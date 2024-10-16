import React from "react";
import { HiOutlinePlus } from 'react-icons/hi';
import '../../BusinessCase.scss'

const BusinessCase = () => {
    return (
        <div className="business-container">
            <div className="feature title">
                <h4>How to Use it</h4>
                <h2>BUSINESS CASES</h2>
            </div>
            <div className="feature international">
                <h3>International Purchase Order</h3>
                <p>A client plans to engage with an overseas provider but is aware that traditional contracts offer limited protection in case of disputes due to high international court costs. They turn to D-Share to fraction the payment, releasing funds as the provider meets agreed milestones, ensuring that the service is delivered as promised.</p>
                </div>
                <div className="feature secure">
                <h3>Secure Delivery & Payment</h3>
                <p>A service provider is looking to work with a new client and wants assurance of payment upon completion. By using D-Share, they invite the client to lock the service fee in escrow, ensuring solvency and commitment. They also agree on a mediator for any unresolved disputes, providing a safety net for both parties.</p>
                </div>
                <div className="feature advertiser">
                <h3>Advertiser Marketing Agreement</h3>
                <p>A client collaborates with an influencer promising significant views and engagement. To ensure results, they use D-Share, linking the deal to the social network's data sourcing. Payments are triggered based on actual views and engagement metrics, aligning the influencer's compensation with their performance.</p>
                </div>
                <div className="feature venture">
                <h3>Venture Capitalist Investment</h3>
                <p>An investor is interested in funding a startup and agrees on specific milestones for investment release. Using D-Share, they lock the investment funds, releasing them milestone by milestone based on agreed KPIs validated by all stakeholders, ensuring a transparent and performance-based investment process.</p>
                </div>
                <div className="feature plus">
                    <HiOutlinePlus className="plus-icon"/>
                </div>

        </div>
    )



}

export default BusinessCase;