import React, { Component } from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import * as firebase from 'firebase'


firebase.initializeApp ({
  apiKey: "AIzaSyCoUdVIu_yMekq4UxPuEW7jY4pNqTLXt90",
  authDomain: "bebat-d9540.firebaseapp.com",
  databaseURL: "https://bebat-d9540.firebaseio.com",
  projectId: "bebat-d9540",
  storageBucket: "bebat-d9540.appspot.com",
  messagingSenderId: "179875780966"
});
class SubirPromo extends Component {
  constructor(){
    super();
    this.state={
      uploadStatus:0

    }
  }

handleOnChange(event){
const file= event.target.files[0];
const storageRef = firebase.storage().ref(`pictures/${file.name}`);
const task = storageRef.put(file);

task.on('state_changed', (snapshot) => {
      let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      this.setState({
        uploadStatus: percentage,

      }), (error) => {
      console.error(error.message)
    },
      ()=>{
        this.setState({
          picture: task.snapshot.downloadURL
        })
      }
    })
  }

  render() {
    return (
      <div>
      <progress value={this.state.uploadStatus} max="100">
      {this.state.uploadStatus}%
      </progress>
      <input type='file' onChange={this.handleOnChange.bind(this)}/>
      <img width='200' src={this.state.picture}/>
      </div>
    );
  }
}

export default SubirPromo;
