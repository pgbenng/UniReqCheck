import React from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import Navbar from "../Navbar/index.jsx";
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allPossibleUniversities: []
    };
  }

  componentDidMount() {
    axios.get("/uni/req", {}).then(univ => {
      console.log(univ);
      this.setState({
        allPossibleUniversities: univ.data
      });
    });
   
  }
  




  render() {
    return (
      <div id="container">
        <Navbar backgroundcolor='white' textcolor='black'/>
        <div className="row">
          <div className="col-md-12">
            <div id="banner">
              <span id="admission">
                <img
                  id="check"
                  src="https://cdn.pixabay.com/photo/2014/04/02/10/19/check-303494_640.png"
                ></img>

                <p1> ADMISSIONS </p1>
              </span>
            </div>
          </div>
        </div>
        <div className="wow"></div>
        <div>
          <h300> Admission Requirements </h300>
        </div>
        <div>
          <p3>
            Look up Universities you want to go to! Dont be sad if u dont meet
            the Requirements!
          </p3>
        </div>
        <div className="under">
          <div>Canadian Universities</div>
        </div>
      </div>
    );
  }
}

module.exports = Home;
