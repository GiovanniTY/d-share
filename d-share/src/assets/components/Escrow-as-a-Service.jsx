// src/About.jsx
import React from 'react';
import '../../Escrow-as-a-Service.scss'; // Importa il CSS per la sezione

const EscrowAsAService = () => {
  return (
    <div className='escrow-container'>
      <div className="escrow-as-a-service">
        <h2>Escrow-as-a-Service</h2> {/* Cambiato da <p> a <h3> */}
        <h3>AVOID COSTLY DISPUTES</h3>
        <p>
          D-Share redefines partnership agreements by making them smarter,
          safer, and incredibly efficient. With the power of smart contracts 
          in the Web3 realm, D-Share not only automates payment processes 
          and secures each transaction, but also prevents being ghosted by 
          partners or chasing down payments. It simplifies dispute resolution 
          and ensures that all parties adhere to agreed terms.
        </p>
        </div>
        <div className='info-escrow'>
          <div className='info-item'>
            <p className='info-number'>60%</p>
            <p className='info-string'>of all commercial disputes are contract-related.</p>
          </div>
          <div className='info-item'>
            <p className='info-number'>$1T</p>
            <p className='info-string'>lost in annual contract disputes.</p>
        </div>
      </div>
    </div>
  );
};

export default EscrowAsAService;
