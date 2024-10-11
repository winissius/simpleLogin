import React, { Component } from "react";
import { Link } from "react-router-dom";

class Contacts extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="container">
        <h1>Contacts</h1>
        <p>Winissius machado</p>
        <a href="https://www.github.com/winissius">Github</a><br></br>
        <Link to="/"><button>Return to home</button></Link> <br/>
</div>
    )
  }

}

export default Contacts;