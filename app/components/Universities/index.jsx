import React from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

export default class Universities extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        req : ""
        
        
      };
    }

    componentDidMount() {
      axios.get("/uni/reqSearch",{
        params:{
          uniName : this.props.params.uniName,
          faculty : this.props.params.faculty
        }
      }).then(res=>{
        console.log(res.data)
        this.setState({
          req: res.data.reqs
        })
      })

    }

    
    render() {
        return (
          <div>
        <div>
            Hello world
        </div>
        <div>
          <ReactMarkdown source = {this.state.req}/>
        </div>
        </div>

        )}
}

