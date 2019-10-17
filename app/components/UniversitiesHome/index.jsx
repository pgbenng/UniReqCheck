import React from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

export default class UniversitiesHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allFaculties: [],
      info: ""
    };
  }

  componentDidMount() {
    axios
      .get("/uni/getFacultiesOfUni", {
        params: {
          uniSelected: this.props.params.uniName
        }
      })
      .then(res => {
        console.log(res, "line 22");
        this.setState({
          allFaculties: res.data,
        });
      });
    
    axios
      .get("/uni/getUniInfo", {
        params: {
          uniSelected: this.props.params.uniName
        }
      })
      .then(res => {
        console.log(res, "line 35")
        this.setState({
          info: res.data.info
        });
      });
  }
  render() {
    return (
      <div>
        <div id="uniinfo"><ReactMarkdown source={this.state.info}/></div>
        <h1 id="unihometitle">List of faculties</h1>
        <ul>
          {this.state.allFaculties.map(x => {
            console.log(x);
            return (
              <li>
                {" "}
                <a
                  href={
                    "/universities/" + this.props.params.uniName + "/" + x.name
                  }
                >
                  {" "}
                  {x.name}{" "}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
