import React from 'react';
import axios from 'axios'; 

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      uniName: '',
      req: ''
    }
  
  }
  
  componentDidMount(){
    
   
  }

  handleUni(e){
    this.setState({
      uniName: e.target.value
    })

  }
  handleUniLookup(){
    axios.get("/uni/req",{
      params:{
        uniName: this.state.uniName
      }

    }).then(uni =>{
      console.log(uni, "line 19")
      this.setState({
        req: uni.data.req
      })

    })

  }
  


  render() {
    return (
      <div>
      <div>
        <input type='text' onChange={this.handleUni.bind(this)}></input>
        <button onClick={this.handleUniLookup.bind(this)}>Search</button>
      </div>
      <div> {this.state.req}</div>
      </div>
    )
  }
}


module.exports = Home;

