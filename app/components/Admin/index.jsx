import React from 'react';
import axios from 'axios'; 

export default class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        uniName: '',
        req: ''
    }
  }

  componentDidMount(){
    
  }

  handleAddUniName(e) {
    this.setState({
        uniName: e.target.value
    })
  }

  handleAddReq(e) {
    this.setState({
        req: e.target.value
    })

  }

  handleSubmitReq() {
    axios.post('/uni/req', {
        uniName: this.state.uniName,
        req: this.state.req
    })
    .then (res => {
        console.log(res)
    })
  }
  render() {
    return (
      <div>
        <input type="text" onChange={this.handleAddUniName.bind(this)} placeholder="Uni name"></input>
        <input type="text" onChange={this.handleAddReq.bind(this)} placeholder="Add reqs"></input>
        <button onClick={this.handleSubmitReq.bind(this)}></button>
      </div>
    )
  }
}

