import React from "react";
import SignupButton from '../SignupButton';

function Universe() {
  return (
    <div className="mx-5 px-5">
    <div className="px-5 mx-3 py-1">
      <div className="mx-5 px-5 py-3 my-2 text-center">
        <h3>The Quantara Universe</h3>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row mx-5 px-5 py-3 my-2">
        <div className="col-lg-4">
          <img
            src="media/images/quantarafund.svg"
            alt="quantara_fund"
            style={{ width: "11rem" }}
          />
          <p className="p-2" style={{fontSize:"0.75rem"}}>
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-lg-4">
          <img
            src="media/images/sensibullLogo.svg"
            alt="sensibullLogo"
            style={{ width: "9rem" }}
          />
          <p className="p-3" style={{fontSize:"0.75rem"}}>
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-lg-4">
          <img
            src="media/images/goldenpiLogo.png"
            alt="goldenpiLogo"
            style={{ width: "8rem" }}
          />
          <p className="p-2" style={{fontSize:"0.75rem"}}>
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
      </div>
      <div className="row mx-5 px-5 py-3 my-2">
        <div className="col-lg-4">
          <img
            src="media/images/streakLogo.png"
            alt="streakLogo"
            style={{ width: "8rem" }}
          />
          <p className="p-2" style={{fontSize:"0.75rem"}}>
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-lg-4">
          <img
            src="media/images/smallcaseLogo.png"
            alt="smallcase"
            style={{ width: "9rem" }}
          />
          <p className="p-2" style={{fontSize:"0.75rem"}}>
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-lg-4">
          <img
            src="media/images/dittoLogo.png"
            alt="dittoLogo"
            style={{ width: "5rem" }}
          />
          <p className="p-2" style={{fontSize:"0.75rem"}}>
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>  
      </div>
      <div className="row mx-5 px-5 py-2 my-1">
        <div className="col-4"></div>
        <div className="col-4">
            <SignupButton />
        </div>
        <div className="col-4"></div>
      </div>
    </div>
    </div>
  );
}

export default Universe;
