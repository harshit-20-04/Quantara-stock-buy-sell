import React from "react";

function CreateTicket() {
  return (
    <div className="p-5 m-5">
      <h2>To create a ticket, select a relevant topic</h2>
      <div className="row flex space-around">
        <div className="col-3">
            <h6 className="pt-2"><i className="fa fa-plus-circle" aria-hidden='true'></i>Account Opening</h6>
          <dl>
            <dt>
              <a href="/opening">Online Account Opening</a>
            </dt>
            <dt>
              <a href="/opening">Offline Account Opening</a>
            </dt>
            <dt>
              <a href="/opening">
                Company, Partnership and HUF Account Opening
              </a>
            </dt>
            <dt>
              <a href="/opening">NRI Account Opening</a>
            </dt>
            <dt>
              <a href="/opening">Charges at Quantara</a>
            </dt>
            <dt>
              <a href="/opening">Quantara IDFC FIRST Bank 3-in-1 Account</a>
            </dt>
            <dt>
              <a href='/getting'>Getting Started</a>
            </dt>
          </dl>
        </div>
        <div className="col-3">
            <h6 className="pt-2">Your Quantara Account</h6>
          <dl>
            <dt>
              <a href="/login">Login Credentials</a>
            </dt>
            <dt>
              <a href="/login">Account Modification and Segment Addition</a>
            </dt>
            <dt>
              <a href="/login">
                DP ID and bank details
              </a>
            </dt>
            <dt>
              <a href="/login">Your Profile</a>
            </dt>
            <dt>
              <a href="/login">Transfer and conversion of shares</a>
            </dt>
          </dl>
        </div>
        <div className="col-3">
            <h6 className="pt-2">Your Quantara Account</h6>
          <dl>
            <dt>
              <a href="/account">Margin/leverage, Product and Order types</a>
            </dt>
            <dt>
              <a href="/account">Kite Web and Mobile</a>
            </dt>
            <dt>
              <a href="/account">
                Trading FAQs
              </a>
            </dt>
            <dt>
              <a href="/account">Corporate Actions</a>
            </dt>
            <dt>
              <a href="/account">Sentinel</a>
            </dt>
            <dt>
              <a href="/account">Kite API</a>
            </dt>
            <dt>
              <a href="/account">PI and other platforms</a>
            </dt>
            <dt>
              <a href="/account">Stock/reports</a>
            </dt>
            <dt>
              <a href="/account">GTT</a>
            </dt>
          </dl>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
