import React from "react";
import '../../Why.scss';
import { HiOutlinePlus } from 'react-icons/hi';

export default function Why() {
    return (
      <div className="why-d-share">
        <h3 className="subtitle">Frictionless Process</h3>
        <h2 className="title">WHY CHOOSE D-SHARE?</h2>
        <div className="features-grid">
          <div className="feature crypto-fiat">
            <img src="poligon/noun-polygon-2596326.png" alt="Crypto & FIAT icon" />
            <h3>Crypto & FIAT</h3>
            <p>Experience effortless transitions between fiat and digital currencies with D-Share's innovative on/off ramping feature. Our platform ensures smooth currency conversions, facilitating easy entry and exit points for users new to the digital economy. This integration bridges the gap between traditional finance and the Web3 world, making transactions accessible to a broader audience.</p>
          </div>
          <div className="feature-image">
            <img src="../../../public/d-share-icon/maniabilité.png" alt="D-Share feature illustration" />
          </div>
          <div className="feature web2">
            <img src="poligon/noun-polygon-2596326.png" alt="Web2 Usability icon" />
            <h3>Web2 Usability</h3>
            <p>D-Share's semi-custodial wallet strikes the perfect balance between security and convenience. Designed for Web2 usability while harnessing the power of Web3 technology, it offers a user-friendly interface without compromising on the advanced features of blockchain technology. This approach caters to both crypto-savvy users and newcomers, making digital transactions more accessible than ever.</p>
          </div>
         
          <div className="feature tailored-disputes">
            <img src="poligon/noun-polygon-2596326.png" alt="Tailored Dispute Resolution icon" />
            <h3>Tailored Dispute Resolution</h3>
            <p>At D-Share, we understand the importance of fair and efficient conflict resolution. Our platform allows for custom mediation or the selection of pre-vetted judicial agents globally. This unique feature provides a diverse range of dispute resolution options, catering to the specific needs and legal frameworks of different regions, thereby ensuring a truly global and adaptable solution.</p>
          </div>
          <div className="ghost-grid">
          <HiOutlinePlus className="plus-icon"/>
          </div>
          <div className="feature notarized">
            <img src="poligon/noun-polygon-2596326.png" alt="Notarized Chat icon" />
            <h3>Notarized Chat</h3>
            <p>Revolutionize your deal-making with D-Share's notarized chat feature and AI-driven contract drafting. This innovative tool allows users to communicate securely within the platform, with the added benefit of notarizing discussions. Furthermore, our AI technology will assist in drafting contract outlines, ensuring that every agreement is precise, legally sound, and tailored to specific deal requirements.</p>
          </div>
        </div>
      </div>
    );
}
