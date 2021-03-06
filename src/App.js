import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import PromoActiva from './promoActiva.js';
import SubirPromo from './subirPromo.js';
import HistorialPromos from './historial.js';
import Analitics from './analitics.js';
import './App.css';

class App extends Component {
  render() {
    return (

      <Router>
        <div className="contenedor">
        <div id="barraLateral">
         <ul>
           <li><Link to="/">Promocion actual</Link></li>
           <li><Link to="/subir-promo">Subir Promocion</Link></li>
           <li><Link to="/historial-promos">Historial promociones</Link></li>
           <li><Link to="/analitics">Analitics</Link></li>

         </ul>
      </div>
         <div className="contenidoComponente">
        <Route exact path="/" component={PromoActiva} />
        <Route path="/subir-promo" component={SubirPromo} />
        <Route path="/historial-promos" component={HistorialPromos} />
        <Route path="/analitics" component={Home}  />
          </div>
            </div>
          </Router>


    );
  }
}

export default App;

// App


//State less components
//Home
const Home = ()=> (
 <div>
   <Analitics texto='holassd'/>
 </div>
)

//About
const About = ()=>(
 <div>
   <h1>About</h1>
   <p>This is about</p>
 </div>
)
