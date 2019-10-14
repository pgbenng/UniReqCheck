import React from "react";
import axios from "axios";

export default class UniversitiesHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allFaculties: []
    };
  }

  componentDidMount() {
    axios
      .get("/uni/getFacultiesOfUni", {
        params: {
          uniSelected: this.props.params.uniName
        }
      })
      .then(res => {
        console.log(res)
        this.setState({
          allFaculties: res.data
        });
      });
  }

  h


  render() {
      
    return (
        
      <div>
        <h1>List of faculties</h1> 
        <ul>
          {this.state.allFaculties.map(x => {
            console.log(x)
            return (
            <li> <a href= {"/universities/" + this.props.params.uniName + "/" + x.name}> {x.name} </a></li>
            
            )
          })}
        </ul>
      </div>
    );
  }
}
