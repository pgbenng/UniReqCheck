import React from 'react';
import axios from 'axios'; 
import ReactMarkdown from 'react-markdown';

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
    axios.get("/uni/req",{
      params:{
        uniName: e.target.value
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
      // <div class = 'banner'>
      //   <span id='admission'>
      //       <img id='check'src='https://1001freedownloads.s3.amazonaws.com/vector/thumb/126084/thatsmyboy_Simple_Red_Checkmark.png'></img>
          
          // <p1> ADMISSION </p1>
          // </span>
        
      <div>
        <div>
          
        </div>
        <div>
        <input type='text' onChange={this.handleUni.bind(this)}></input>
        </div>
       
      {/* </div> */}
      <div id="reqbody"> <ReactMarkdown source={this.state.req}/> </div>
      </div>
      
    )
  }
}


module.exports = Home;

