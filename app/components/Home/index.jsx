import React from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uniName: "",
      req: "",
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

  handleUni(e) {
    axios
      .get("/uni/req", {
        params: {
          uniName: e.target.value
        }
      })
      .then(uni => {
        console.log(uni, "line 19");
        this.setState({
          req: uni.data.req
        });
      });
  }

  render() {
    return (
      <div id="container">
        <div className="row">
          <div className="col-md-12">
            <nav className="navbar navbar-default">
              <a class="navbar-brand" href="#">Uni Requirements</a>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Universities
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      {this.state.allPossibleUniversities.map(x => {
                        return (
                          <div>
                            <a className="dropdown-item" href="#">
                              {x.name}
                            </a>
                            <div className="dropdown-divider"></div>
                          </div>
                        );
                      })}
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>

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

        <div className="row">
          <div className="col-md-12">
            <div>
              {" "}
              <ReactMarkdown source={this.state.req} />{" "}
            </div>
          </div>
        </div>
<<<<<<< HEAD
       
      {/* </div> */}
      <div id="reqbody"> <ReactMarkdown source={this.state.req}/> </div>
=======
>>>>>>> 7b066de052ee4eb17d8f4868a84befe1e8a4c6b3
      </div>
    );
  }
}

module.exports = Home;
