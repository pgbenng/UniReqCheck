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
        <div className= 'sticky' style={{backgroundColor:this.props.backgroundcolor, color:this.props.textcolor}}>
    
        <nav className="navbar">
          <a className="navbar-brand" href="/" style={{color:this.props.textcolor}}>
            Uni Req Check
          </a>
          
          
         
         
          
          <div>
         
          <div id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto ul">
              <li className="nav-item dropdown li">
                <a className="a"
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{color:this.props.textcolor}}
                >
                  Universities
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {this.state.allPossibleUniversities.map(x => {
                   console.log(x);
                    return (
                      <div className="dropdown-submenu">
                      <a style={{color:this.props.textcolor}} href= {"universities/" + x.name} >{x.name}</a>
                      {/* <div className="dropdown-menu">
                        <div>
                          {x.Faculties.map(y=>{
                            return(
                              <div>
                              <a href= {"/universities/" + x.name + "/" + y.name}  style={{color:this.props.textcolor}}>
                                {y.name}
                              </a>
                              </div>
                            )
                          })}
                        </div>
                      </div> */}
                    </div>
                    );
                  })}
                </div>
              </li>
            </ul>
            
          
          </div>
          </div>
        </nav>
        </div>
        
   
    );
  }
}

module.exports = Navbar;