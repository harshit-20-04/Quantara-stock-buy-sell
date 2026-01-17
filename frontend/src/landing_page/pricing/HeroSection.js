import React from "react";

function HeroSection() {
  return (
    <div className="m-4 p-3">
      <div className="my-3 py-3 text-center">
        <h2>Charges</h2>
        <p style={{fontSize:"0.98rem"}}>List of all charges and taxes</p>
      </div>
      <div className="row m-3 p-3 flex space-around">
        <div className="col-3 m-3 p-2 text-center">
          <img src="media/images/pricing0.svg" style={{ width: "13rem" }} />
          <h5>Free equity delivery</h5>
          <p style={{fontSize:"0.85rem"}}>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-3 m-3 p-3 text-center">
          <img
            src="media/images/pricingIntraday.svg"
            style={{ width: "13rem" }}
          />
          <h5>Intraday and F&O trades</h5>
          <p style={{fontSize:"0.85rem"}}>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-3 m-3 p-3 text-center">
          <img src="media/images/pricing0.svg" style={{ width: "13rem" }} />
          <h5>Free direct MF</h5>
          <p style={{fontSize:"0.85rem"}}>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
