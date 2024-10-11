import { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "../../Firebase";
import './index.css'

  class Register extends Component{
    constructor(props){
      super(props)
      this.state = {
        //  e-mail, senha, nome, sobrenome e data de nascimento
        name: "",
        surname: "",
        email: "",
        password: "",
        birthday: "",  
        dataUsers: []      
      }


      this.saveUser = this.saveUser.bind(this)
      

    }

    async saveUser() {
      const { name, surname, email, password, birthday } = this.state;
  
      if (!name || !surname || !email || !password || !birthday) {
        this.setState({ error: "All fields are required." });
        return;
      }
  
      if (!/\S+@\S+\.\S+/.test(email)) {
        this.setState({ error: "Please enter a valid email address." });
        return;
      }
  
      try {
        const answer = await firebase.auth().createUserWithEmailAndPassword(email, password);
  
        await firebase.firestore().collection('user').doc(answer.user.uid).set({
          name: name,
          surname: surname,
          email: email,
          birthday: birthday
        });
  
        this.setState({ error: null, dataUsers: [...this.state.dataUsers, { name, surname, birthday }] });
        


      } catch (error) {
        this.setState({ error: error.message });
      }
    }
  

    render(){
      return(
        <div className="container">
            <h1>Sign Up</h1>
            <input type="text" placeholder="Name" onChange={ (e) => this.setState({name: e.target.value})} required></input>
            <br/>
            <input type="text" placeholder="Surname" onChange={ (e) => this.setState({surname: e.target.value})} required></input>
            <br/>
            <input type="e-mail" placeholder="e-mail" onChange={ (e) => this.setState({email: e.target.value})} required></input>
            <br/>
            <input type="password" placeholder="password" onChange={ (e) => this.setState({password: e.target.value})} required></input>
            <br/>
            <input type="date" placeholder="birthday" onChange={ (e) => this.setState({birthday: e.target.value})} required></input>
            <br/>
            <button onClick={this.saveUser}>Sign up</button>
            <br/>
            {this.state.error && <p style={{ color: 'red' }}>{this.state.error}</p>} 

            

            
            
          {this.state.dataUsers.length > 0 && 
            this.state.dataUsers.map((user) => (
              <p key={user.id}>
                Registration complete! <br/>
                Click here to <Link to="/login">Login</Link>
              </p>
            ))
          }
            
        </div>
      )
    }
  }
  
  export default Register;