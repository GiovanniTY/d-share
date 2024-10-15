import React from "react";
import '../../Web3Solutions.scss';

const Web3Solutions = () => {
    return (
      <div className="web3-solution">
        <h3>Web 3 Solution</h3>
        <h2>EMBRACE TRUST IN CODE</h2>
        <div className="web3-container">
          <div className="secure">
            <div className="title-icon">
              <img src="d-share-icon/secure-business.png" alt="Secure Business Transactions" />
              <h4 className="title-container">Secure Business Transactions</h4>
            </div>
            <div className="web3-content">
              <p>
                Create quotes and purchase orders in just a few clicks, and invite your partners to join a deal with confidence. Funds are securely held in an escrow account and released based on the pre-set conditions agreed upon by all parties.
              </p>
            </div>
          </div>
          <div className="versatile">
            <div className="title-icon">
              <img src="d-share-icon/versatile2.png" alt="Versatile Deal-making" />
              <h4 className="title-container">Versatile Deal-making</h4>
            </div>
            <div className="web3-content">
              <p>
                D-Share stands out for its versatility, enabling you to create a broad range of deals, including complex multi-party agreements. From revenue sharing to strategic collaborations, the platform allows you to invite various partners and define their contributions, ensuring transparency and equity in every agreement.
              </p>
            </div>
          </div>
          <div className="fair">
            <div className="title-icon">
              <img src="d-share-icon/fairconflict.png" alt="Fair Conflict Resolution" />
              <h4 className="title-container">Fair Conflict Resolution</h4>  
            </div>
            <div className="web3-content">
              <p>
                Navigate the complexities of deal-making with D-Share’s conflict resolution feature. In the event of disputes, partners retain control by selecting a trusted mediator, ensuring fair and efficient resolution. D-Share is committed to safeguarding the integrity of your agreements and maintaining a level playing field, where every party’s interests are protected and respected.
              </p>
            </div>
          </div>
          <div className="data">
            <div className="title-icon">
              <img src="d-share-icon/Oracle.png" alt="Data Sourcing" />
              <h4 className="title-container">Data Sourcing (soon)</h4>
            </div>
            <div className="web3-content">
              <p>
                This innovative upcoming feature will allow you to use external data, like the number of views on a video, to automatically trigger payments. This means your agreements can be executed with great accuracy, based on real, measurable data. Keep an eye out for this feature, which will enhance your decision-making process by integrating reliable, data-driven triggers into every transaction.
              </p>
            </div>
          </div>
  
        </div>
      </div>
    );
};

export default Web3Solutions;
