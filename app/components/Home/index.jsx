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
        allPossibleUniversities: univ.data,
        req: ''
       
      });
    });
  }


  handleUni(e) {
    axios
      .get("/uni/reqSearch", {
        params: {
          uniName: e.target.value
        }
      })
      .then(uni => {
        console.log(uni, "line 19")
        this.setState({
          req: uni.data.req
        })
       
      });
  }

  render() {
    return (
      <div id="container">
        <nav className="navbar">
          <a className="navbar-brand" href="#">
            Uni Req Check
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>

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
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {this.state.allPossibleUniversities.map(x => {
                    return (
                      <div>
                        <a className="dropdown-item" href="/universities">
                          {x.name}
                        </a>
                        <div className="dropdown-divider"></div>
                      </div>
                    );
                  })}
                </div>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
              
                type="text"
               
              onChange = {this.handleUni.bind(this)}></input>
            </form>
          </div>
        </nav>
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



        {/* </div> */}
       
        <div className = 'wow'>
        </div>
        <div>
        <h300> Admission Requirements </h300>

        </div>
        <div >
          <p3>
            Look up Universities you want to go to! Dont be sad if u dont meet the Requirements!
            <div className="col-md-12 requ">
              <div className="row">
            <div>
              {" "}
              <ReactMarkdown source={this.state.req} />{" "}
            </div>
            </div>
        </div>
          </p3>
          
          </div>
        
          
          
          
        
       
        
       

        <div className = 'under'>
          <div>
            Canadian Universities
          </div>

        </div>
      </div>
   
    );
  }
}

module.exports = Home;
