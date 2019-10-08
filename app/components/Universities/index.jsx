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
          uniName : this.props.params.uniName
        }
      }).then(res=>{
        this.setState({
          req: res.data.req
        })
      })

    }

    
    render() {
        return (
          
        <div id= "reqbody">
          
           <ReactMarkdown source = {this.state.req}/>
        </div>
        
        

        )}
}

