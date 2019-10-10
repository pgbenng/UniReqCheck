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

  componentDidMount() {}

  handleAddBody(e) {
    this.setState({
      aboutBody: e.target.value
    });
  }

  handleAddBodySubmit() {
    console.log("Line 22", this.state)
    axios.post('/uni/about-us-submit', {
      aboutBody: this.state.aboutBody
    })
    .then(res=> {
      console.log(res)
      alert('submitted')
    })
  }

  

  render() {
    return (
      <div id="container">
        <h1 id="admintitle"> Post-Secondary Requirements About-Us Admin Page</h1>
      <div id="about">
        <textarea
          onChange={this.handleAddBody.bind(this)}
          placeholder="Add about me thing"
          rows="10"
          cols="50"
        ></textarea>
      </div>
      <div>
      <button onClick={this.handleAddBodySubmit.bind(this)}> Submit </button>
        </div>
        </div>
    )
  }
}
