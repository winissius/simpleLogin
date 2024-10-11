import React, { Component } from "react";
import firebase from "../../Firebase";
import './index.css'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: null
    };

    this.signIn = this.signIn.bind(this);
  }

  async signIn() {
    if (!this.state.email || !this.state.password) {
      this.setState({ error: "Email and password are required." });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(this.state.email)) {
      this.setState({ error: "Please enter a valid email address." });
      return;
    }

    try {
      await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
      window.location.href = './myaccount';
    } catch (error) {
      this.setState({ error: 'Invalid Email or Password' });
    }
  }

  render() {
    return (
      <div className="container">
        <h1>Login</h1>
        {this.state.error && <p style={{ color: 'red' }}>{this.state.error}</p>}
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => this.setState({ email: e.target.value })}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => this.setState({ password: e.target.value })}
        />
        <br />
        <button onClick={this.signIn}>Sign In</button>
      </div>
    );
  }
}

export default Login;
