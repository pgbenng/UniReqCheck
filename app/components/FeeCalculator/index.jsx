import React from "react";
import axios from "axios";
import { readSync } from "fs";

export default class FeeCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allUniversities: [],
      uniSelected: "",
      allFacultiesOfUniSelected: []
    };
  }

  componentDidMount() {
    axios.get("/uni/req", {}).then(res => {
      this.setState({
        allUniversities: res.data
      });
    });
    
    axios.get("/uni/getFacultiesOfUni", {
        params: {
            uniSelected: this.state.uniSelected
        }
    })
    .then(res=> {
        this.setState({
            allFacultiesOfUniSelected: res.data
        })
    })
  }

  handleUniSelected(e) {
    console.log(e.target.value, "line 27");

    this.setState({
      uniSelected: e.target.value
    });

    axios.get("/uni/getFacultiesOfUni", {
        params: {
            uniSelected: e.target.value
        }
    })
    .then(res=> {
        this.setState({
            allFacultiesOfUniSelected: res.data
        })
    })
  }

  render() {
    console.log(this.state.allUniversities);
    return (
      <div id="feecalcbody">
        <div className="row">
          <div className="col-md-12">
            <h1 id="feecalctitle">Fee Calculator</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <p id="feecalcblurb">
              {" "}
              This calculator will calculate the total fees for your first year
              at your desired university.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <p> Select your desired university: </p>
            <select onChange={this.handleUniSelected.bind(this)}>
                <option selected="selected"> Select one</option>
              {this.state.allUniversities.map(x => {
                return <option> {x.name}</option>;
              })}

              
            </select>
          </div>
        </div>

        <div className="row">
          <div classNAme="col-md-12">
            <p> Select the program you plan to study:</p>
            <select>
                {this.state.allFacultiesOfUniSelected.map(x=>{
                    return(
                        <option> {x.name}</option>
                    )
                })}
            
            </select>
          </div>
        </div>
      </div>
    );
  }
}
