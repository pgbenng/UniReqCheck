import React from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

export default class Navbar extends React.Component {
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
        allPossibleUniversities: univ.data,
        req: ''
       
      });
    });
  }


 
  

  render() {
    return (
    
        <nav className="navbar">
          <a className="navbar-brand" href="#">
            Uni Req Check
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto ul">
              <li className="nav-item active li">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>

              <li className="nav-item dropdown li">
                <a className="a"
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
                   console.log(x);
                    return (
                      <div className="dropdown-submenu">
                      <a>{x.name}</a>
                      <div className="dropdown-menu">
                        <div>
                          {x.Faculties.map(y=>{
                            return(
                              <div>
                              <a href= {"/universities/" + x.name + "/" + y.name}>
                                {y.name}
                              </a>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                    );
                  })}
                </div>
              </li>
            </ul>
            
          
          </div>
        </nav>
        
   
    );
  }
}

module.exports = Navbar;