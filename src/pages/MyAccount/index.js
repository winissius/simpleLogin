import React, {Component} from "react";
import firebase from "../../Firebase";
import './index.css';

class MyAccount extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: '',
            surname: '',
            birthday: ''

        }

        this.handleLogout = this.handleLogout.bind(this);
    }

    componentDidMount(){

        firebase.auth().onAuthStateChanged((userData) => {
            if(userData){
                var uid = userData.uid

                firebase.firestore().collection('user').doc(uid).get()
                .then((answer) => {

                    this.setState({
                        name: answer.data().name,
                        surname: answer.data().surname,
                        birthday: answer.data().birthday
                    })
                    
                })
            }
        })

    }

    handleLogout = () => {
        firebase.auth().signOut()
            .then(() => {
                window.location.href = '/login'
            })
            .catch((error) => {
                console.error("Error signing out:", error);
            });
    };

    render() {
        return (
          <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <div>
                <img 
                  src="https://www.svgrepo.com/show/532363/user-alt-1.svg" 
                  alt="User Logo" 
                  style={{ width: "250px", height: "250px", filter: 'invert(0.7)' }}
                />
              </div>
              <div style={{ marginLeft: '20px' }}> 
                <p>Name: {this.state.name}</p>
                <p>Surname: {this.state.surname}</p>
                <p>Birthday: {this.state.birthday.split('-').reverse().join('/')}</p>
              </div>
            </div>
            <div style={{ marginTop: '20px' }}> 
              <button  onClick={this.handleLogout}>Logout</button> 
            </div>
          </div>
        );
      }
}

export default MyAccount