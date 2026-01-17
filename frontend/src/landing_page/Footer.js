import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-light">
      <div className="row m-5 pr-5 pl-5">
        <div className="col col-md-3 p-3">
          <img src="media/images/Quantaralogo.svg" id="logo" />
          <p style={{fontSize:"0.7rem"}}>© 2025, Quantara Broking Ltd <br />All rights reserved.</p>
        </div>
        <div className="col p-3">
          <p>Account</p>
          <Link to="#" style={{fontSize:"0.7rem"}}>Open demat account</Link>
          <br />
          <Link to="#" style={{fontSize:"0.7rem"}}>Minor demat account</Link>
          <br />
          <Link to="#" style={{fontSize:"0.7rem"}}>NRI demat account</Link>
          <br />
          <Link to="#" style={{fontSize:"0.7rem"}}>Commodity</Link>
          <br />
          <Link to="#" style={{fontSize:"0.7rem"}}>Dematerialisation</Link>
          <br />
          <Link to="#" style={{fontSize:"0.7rem"}}>Fund transfer</Link>
          <br />
          <Link to="#" style={{fontSize:"0.7rem"}}>MTF</Link>
          <br />
          <Link to="#" style={{fontSize:"0.7rem"}}>Referral program</Link>
          <br />
        </div>
        <div className="col p-3">
          <p>Support</p>
          <Link to="#" style={{fontSize:"0.7rem"}}>Contact us</Link>
          <br />
          <Link to="#" style={{fontSize:"0.7rem"}}>Support portal</Link>
          <br />
          <Link to="#" style={{fontSize:"0.7rem"}}>How to file a complaint?</Link>
          <br />
          <Link to="#" style={{fontSize:"0.7rem"}}>Status of your complaints</Link>
          <br />
          <Link to="#" style={{fontSize:"0.7rem"}}>Bulletin</Link>
          <br />
          <Link to="#" style={{fontSize:"0.7rem"}}>Circular</Link>
          <br />
          <Link to="#" style={{fontSize:"0.7rem"}}>Z-Connect blog</Link>
          <br />
          <Link to="#" style={{fontSize:"0.7rem"}}>Downloads</Link>
          <br />
        </div>
        <div className="col p-3">
          <p>Company</p>
          <Link to="#" style={{fontSize:"0.7rem"}}>About</Link>
          <br />
          <Link to="#" style={{fontSize:"0.7rem"}}>Philosophy</Link>
          <br />
          <Link to="#" style={{fontSize:"0.7rem"}}>Press & media</Link>
          <br />
          <Link to="#" style={{fontSize:"0.7rem"}}>Careers</Link>
          <br />
          <Link to="#" style={{fontSize:"0.7rem"}}>Quantara Cares (CSR)</Link>
          <br />
          <Link to="#" style={{fontSize:"0.7rem"}}>Open source</Link>
          <br />
          <Link to="#" style={{fontSize:"0.7rem"}}>Quantara.tech</Link>
          <br />
        </div>
        <div className="col p-3" >
          <p>Quick links</p>
          <Link to="#" style={{fontSize:"0.7rem"}}>Upcoming IPOs</Link>
          <br />
          <Link to="#" style={{fontSize:"0.7rem"}}>Brokerage charges</Link>
          <br />
          <Link to="#" style={{fontSize:"0.7rem"}}>Market holidays</Link>
          <br />
          <Link to="#" style={{fontSize:"0.7rem"}}>Economic calendar</Link>
          <br />
          <Link to="#" style={{fontSize:"0.7rem"}}>Calculators</Link>
          <br />
          <Link to="#" style={{fontSize:"0.7rem"}}>Markets</Link>
          <br />
          <Link to="#" style={{fontSize:"0.7rem"}}>Sectors</Link>
          <br />
        </div>
      </div>

      <div className="p-5 m-3">
        <p style={{fontSize:"0.6rem"}}>
          Quantara Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
          no.: INZ000031633 CDSL/NSDL: Depository services through Quantara
          Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading
          through Quantara Commodities Pvt. Ltd. MCX: 46025; SEBI Registration
          no.: INZ000038238 Registered Address: Quantara Broking Ltd., #153/154,
          4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th
          Phase, Bengaluru - 560078, Karnataka, India. For any complaints
          pertaining to securities broking please write to
          complaints@Quantara.com, for DP related to dp@Quantara.com. Please
          ensure you carefully read the Risk Disclosure Document as prescribed
          by SEBI | ICF 
        </p>
        <p style={{fontSize:"0.6rem"}}>Procedure to file a complaint on SEBI SCORES: Register
          on SCORES portal. Mandatory details for filing complaints on SCORES:
          Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
          Communication, Speedy redressal of the grievances 
        </p>
        <p style={{fontSize:"0.6rem"}}>  
          <Link to="#" style={{fontSize:"0.6rem"}}>Smart Online Dispute Resolution</Link> | <Link to='#' style={{fontSize:"0.7rem"}}>Grievances Redressal Mechanism </Link>
        </p>

        <p style={{fontSize:"0.6rem"}}>
          Investments in securities market are subject to market risks; read all the related documents
          carefully before investing. 
        </p>
        <p style={{fontSize:"0.6rem"}}>
          Attention investors: 1) Stock brokers can
          accept securities as margins from clients only by way of pledge in the
          depository system w.e.f September 01, 2020. 2) Update your e-mail and
          phone number with your stock broker / depository participant and
          receive OTP directly from depository on your e-mail and/or mobile
          number to create pledge. 3) Check your securities / MF / bonds in the
          consolidated account statement issued by NSDL/CDSL every month.
        </p>
        <p style={{fontSize:"0.6rem"}}>
          India's largest broker based on networth as per NSE. 
          <Link to='#' style={{fontSize:"0.6rem"}}>NSE broker factsheet </Link>
        </p>
        <p style={{fontSize:"0.6rem"}}> 
          "Prevent unauthorised transactions in your account. Update
          your mobile numbers/email IDs with your stock brokers. Receive
          information of your transactions directly from Exchange on your
          mobile/email at the end of the day. Issued in the interest of
          investors. KYC is one time exercise while dealing in securities
          markets - once KYC is done through a SEBI registered intermediary
          (broker, DP, Mutual Fund etc.), you need not undergo the same process
          again when you approach another intermediary." Dear Investor, if you
          are subscribing to an IPO, there is no need to issue a cheque. Please
          write the Bank account number and sign the IPO application form to
          authorize your bank to make payment in case of allotment. In case of
          non allotment the funds will remain in your bank account. As a
          business we don't give stock tips, and have not authorized anyone to
          trade on behalf of others. If you find anyone claiming to be part of
          Quantara and offering such services, please create a ticket here.
        </p>
      </div>
      <div className="px-5 mx-3">
        <p>
            <span><Link to='#'style={{fontSize:"0.7rem"}}>NSE</Link> </span>&nbsp; &nbsp; &nbsp;
            <span><Link to='#' style={{fontSize:"0.7rem"}}>BSE</Link> </span>&nbsp; &nbsp; &nbsp;
            <span><Link to='#' style={{fontSize:"0.7rem"}}>MCX </Link></span>&nbsp; &nbsp; &nbsp;
            <span><Link to='#' style={{fontSize:"0.7rem"}}>Terms & conditions </Link></span>&nbsp; &nbsp; &nbsp;
            <span><Link to='#' style={{fontSize:"0.7rem"}}>Policies & procedures </Link></span>&nbsp; &nbsp; &nbsp;
            <span><Link to='#' style={{fontSize:"0.7rem"}}>Privacy policy </Link></span>&nbsp; &nbsp; &nbsp;
            <span><Link to='#' style={{fontSize:"0.7rem"}}>Disclosure </Link></span>&nbsp; &nbsp; &nbsp;
            <span><Link to='#' style={{fontSize:"0.7rem"}}>For investor's attention </Link></span>&nbsp; &nbsp; &nbsp;
            <span><Link to='#' style={{fontSize:"0.7rem"}}>Investor charter</Link></span>&nbsp; &nbsp; &nbsp;
        </p>
      </div>
    </div>
  );
}

export default Footer;
