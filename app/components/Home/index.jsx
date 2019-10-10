import React from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import Navbar from "../Navbar/index.jsx";
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allPossibleUniversities: [],
      aboutUsBody: ""
    };
  }

  componentDidMount() {
    axios.get("/uni/req", {}).then(univ => {
      console.log(univ);
      this.setState({
        allPossibleUniversities: univ.data
      });
    });

    axios.get("/uni/about-us-submit", {
      

      }).then(res=> {
        console.log(res)
        this.setState({
          aboutUsBody: res.data
        })
      })
  }
  

  render() {
    return (
      <div id="container">
        <Navbar backgroundcolor="white" textcolor="black" />
        <div className="row">
          <div className="col-md-12 univer">
            <div id="banner">
              <span id="admission">
                <img
                  id="check"
                  src="https://cdn.pixabay.com/photo/2014/04/02/10/19/check-303494_640.png"
                ></img>

                <p1 className="admissions-logo"> ADMISSIONS </p1>
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="wow"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h300> Admission Requirements </h300>
          </div>
        </div>
        <br>
        </br>
        <br></br>
        <div className="row">
          <div className="col-md-12">
            <p3>
              "What I learned in university was how little I know."
            </p3>
            <p3> - Malcolm Watts</p3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 aboutus">
            {this.state.aboutUsBody}
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Home;
