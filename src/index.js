import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import DeposerTicket from './compsonts/clientelle/DeposerTicket'

const Index =()=> {
  const [login]=useState('Tunisie Bank ') 
  const [contrats]=useState(['contrat 1','contrat 2','contrat 3','contrat 4']) 
  
    return <DeposerTicket client={login} listeContrats={contrats} />
}


ReactDOM.render(
  <React.StrictMode>
   <Index></Index>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
