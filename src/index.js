import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import DeposerTicket from './compsonts/clientelle/DeposerTicket';
import Sidebar from './compsonts/Sidebar/Sidebar';
import SignIn from './compsonts/signIn/signIn';
import AjouMembSociete from './compsonts/AjouMembSociete/AjouMembSociete';
import AjouClient from './compsonts/AjouClient/AjouClient';
const Index =()=> {
  const [login]=useState('Tunisie Bank') 
  const [contrats]=useState(['contrat 1','contrat 2','contrat 3','contrat 4']) 
  
    return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/login">
          <SignIn />
        </Route>
        <Route path="/DéposerTicket">
        <DeposerTicket client={login} listeContrats={contrats} />
        </Route>
        <Route path="/AjouMembSociete">
        <AjouMembSociete/>
        </Route>
        <Route path="/AjouClient">
        <AjouClient/>
        </Route>
      </Switch>
    </Router>
    );
}


ReactDOM.render(
  <React.StrictMode>
   <Index/>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
