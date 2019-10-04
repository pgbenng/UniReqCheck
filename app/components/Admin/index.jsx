import React from "react";
import axios from "axios";

export default class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uniName: "",
      req: ""
    };
  }

  componentDidMount() {}

  handleAddUniName(e) {
    this.setState({
      uniName: e.target.value
    });
  }

  handleAddReq(e) {
    this.setState({
      req: e.target.value
    });
  }

  handleSubmitReq() {
    axios
      .post("/uni/req", {
        uniName: this.state.uniName,
        req: this.state.req
      })
      .then(res => {
        console.log(res);
        alert("submitted");
      });
  }
  render() {
    return (
      <div id="container">
        <div className="row">
          <div className="col-md-12 inputboxes">
            <h1 id="admintitle"> Post-Secondary Requirements Admin Page</h1>
            <input
              id="uniname"
              type="text"
              onChange={this.handleAddUniName.bind(this)}
              placeholder="Uni name"
            ></input>
          </div>
          <div className="row">
            <div className="col-md-12">
              <textarea
                onChange={this.handleAddReq.bind(this)}
                placeholder="Add reqs"
                rows="10"
                cols="100"
              ></textarea>
            </div>
          </div>
          <button onClick={this.handleSubmitReq.bind(this)}> Submit</button>
        </div>
      </div>
    );
  }
}
