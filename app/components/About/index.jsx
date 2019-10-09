import React from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutBody: ""
    
    };
  }

  componentDidMount() {
   

  }

  handleAddBody(e) {
    this.setState({
      aboutBody: e.target.value
    })
      
 }
 
  

  render() {
    return (
      
    <div id = 'about'>

    </div>
    
    

    )}
}


