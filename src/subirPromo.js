import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import * as firebase from 'firebase'
import './subirPromo.css';
const x="https://designcode.io/images/bg/footer.jpg";
var array=[];
var cantidadFlayers=0;
class Promo extends Component{
  render(){
    return(
      <li> <img src={this.props.p}/></li>
    );
  }
}
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
      uploadStatus:0,
      picture: x,
    }
  }

handleOnChange(event){
const file= event.target.files[0];
const storageRef = firebase.storage().ref(`fotos/${file.name}`);
const task = storageRef.put(file);
task.on('state_changed', (snapshot) => {
      let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      this.setState({
        uploadStatus: percentage,

      }),

      (error) => {
      console.error(error.message)
    },


    array.push(task.snapshot.downloadURL);
        this.setState({
          picture: task.snapshot.downloadURL,

        })

    })
  }

  render() {
    let id = 0;
    return (
      <div>
      <progress value={this.state.uploadStatus} max="100">
        {this.state.uploadStatus}%
      </progress>

      <input type='file' onChange={this.handleOnChange.bind(this)}/>
      <div id='gallery'>
      <ul id='listaImagenes'>
      {array.map(lista=>{if(lista!=null){
        return (<Promo p={lista}/>);}
      })}
      </ul>
      </div>
      </div>
    );
  }

}

export default SubirPromo;
