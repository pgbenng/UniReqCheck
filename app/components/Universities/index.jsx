import React from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import Navbar from "../Navbar/index.jsx";

export default class Universities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      req: ""
    };
  }

  componentDidMount() {
    axios
      .get("/uni/reqSearch", {
        params: {
          uniName: this.props.params.uniName,
          faculty: this.props.params.faculty
        }
      })
      .then(res => {
        console.log(res.data);
        this.setState({
          req: res.data.reqs
        });
      });
  }

  render() {
    return (
      <div className="univer row reqs">
        <div className="col-md-12"></div>
        <Navbar backgroundcolor="black" textcolor="white" />
        <div id="reqbody" className="row">
          <div className="col-md-12">
            <ReactMarkdown source={this.state.req} escapeHtml={false} />
          </div>
        </div>
      </div>
    );
  }
}
