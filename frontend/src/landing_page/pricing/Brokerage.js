import React from "react";

function Brokerage() {
  return (
    <div className="m-5 p-5">
      <nav className=" mx-3 nav border-bottom">
        <a
          className="nav-link active active-border-bottom"
          aria-current="page"
          href="#"
        >
          Equity
        </a>
        <a className="nav-link" href="#">
          Currency
        </a>
        <a className="nav-link" href="#">
          Commodity
        </a>
      </nav>
      <div className="table-responsive border p-3 m-3">
        <table className="table">
          <thead>
            <tr className="row">
              <td className="col-2"></td>
              <td className="col-2">Equity delivery</td>
              <td className="col-2">Quity Intraday</td>
              <td className="col-2">F&O - Futures</td>
              <td className="col-3">F&O - Options</td>
            </tr>
          </thead>
          <tbody>
            <tr className="row">
              <td className="col-2">&nbsp;Brokerage</td>
              <td className="col-2">Zero Brokerage</td>
              <td className="col-2">
                0.03% or Rs. 20/executed order
                <br /> whichever is lower
              </td>
              <td className="col-2">
                0.03% or Rs. 20/executed order whichever is lower
              </td>
              <td className="col-3">Flat Rs. 20 per executed order</td>
            </tr>
            <tr className="row">
              <td className="col-2">&nbsp;STT/CTT</td>
              <td className="col-2">0.1% on buy & sell</td>
              <td className="col-2">0.025% on the sell side</td>
              <td className="col-2">0.02% on the sell side</td>
              <td className="col-3">
                0.125% of the intrinsic value on options that are bought and
                exercised
              </td>
            </tr>
            <tr className="row">
              <td className="col-2">&nbsp;Transaction charges</td>
              <td className="col-2">
                NSE: 0.00297%
                <br />
                BSE: 0.00375%
              </td>
              <td className="col-2">
                NSE: 0.00297%
                <br />
                BSE: 0.00375%
              </td>
              <td className="col-2">
                NSE: 0.0.00173%
                <br />
                BSE: 0.
              </td>
              <td className="col-3">
                NSE: 0.03503% (on premium)
                <br />
                BSE: 0.0325% (on premium)
              </td>
            </tr>
            <tr className="row">
              <td className="col-2">&nbsp;GST</td>
              <td className="col-2">
                18% on (brokerage + SEBI <br />
                charges + transaction charges)
              </td>
              <td className="col-2">
                18% on (brokerage + SEBI <br />
                charges + transaction charges)
              </td>
              <td className="col-2">
                18% on (brokerage + SEBI <br />
                charges + transaction charges)
              </td>
              <td className="col-3">
                18% on (brokerage + SEBI <br />
                charges + transaction charges)
              </td>
            </tr>
            <tr className="row">
              <td className="col-2">&nbsp;SEBI charges</td>
              <td className="col-2">₹10 / crore</td>
              <td className="col-2">₹10 / crore</td>
              <td className="col-2">₹10 / crore</td>
              <td className="col-3">₹10 / crore</td>
            </tr>
            <tr className="row">
              <td className="col-2">&nbsp;Stamp charges</td>
              <td className="col-2">
                0.015% or ₹1500 / crore <br />
                on buy side
              </td>
              <td className="col-2">
                0.003% or ₹300 / crore <br />
                on buy side
              </td>
              <td className="col-2">
                0.002% or ₹200 / crore <br />
                on buy side
              </td>
              <td className="col-3">
                0.003% or ₹300 / crore <br />
                on buy side
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mx-2 px-2 my-2 py-2 row">
        <div className="col">
          <h3 className="py-3 my-3">Charges Explained</h3>
          <div className="my-2">
            <h6 style={{ fontSize: "0.95rem" }}>
              Securities/Commodities transaction tax
            </h6>
            <p style={{ fontSize: "0.75rem" }}>
              Tax by the government when transacting on the exchanges. Charged
              as above on both buy and sell sides when trading equity delivery.
              Charged only on selling side when trading intraday or on F&O.
            </p>
            <p style={{ fontSize: "0.75rem" }}>
              When trading at Zerodha, STT/CTT can be a lot more than the
              brokerage we charge. Important to keep a tab.
            </p>
          </div>
          <div className="my-2">
            <h6 style={{ fontSize: "0.95rem" }}>
              Transaction/Turnover Charges
            </h6>
            <p style={{ fontSize: "0.75rem" }}>
              Charged by exchanges (NSE, BSE, MCX) on the value of your
              transactions.
            </p>
            <p style={{ fontSize: "0.75rem" }}>
              BSE has revised transaction charges in XC, XD, XT, Z and ZP groups
              to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been
              merged into a new group X w.e.f 01.12.2017)
            </p>
            <p style={{ fontSize: "0.75rem" }}>
              BSE has revised transaction charges in SS and ST groups to
              ₹1,00,000 per crore of gross turnover.
            </p>
            <p style={{ fontSize: "0.75rem" }}>
              BSE has revised transaction charges for group A, B and other non
              exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC,
              W, T) at ₹375 per crore of turnover on flat rate basis w.e.f.
              December 1, 2022.
            </p>
            <p style={{ fontSize: "0.75rem" }}>
              BSE has revised transaction charges in M, MT, TS and MS groups to
              ₹275 per crore of gross turnover.
            </p>
          </div>
          <div className="my-2">
            <h6 style={{ fontSize: "0.95rem" }}>Call & trade</h6>
            <p style={{ fontSize: "0.75rem" }}>
              Additional charges of ₹50 per order for orders placed through a
              dealer at Zerodha including auto square off orders.
            </p>
          </div>
          <div className="my-2">
            <h6 style={{ fontSize: "0.95rem" }}>Stamp charges</h6>
            <p style={{ fontSize: "0.75rem" }}>
              Stamp charges by the Government of India as per the Indian Stamp
              Act of 1899 for transacting in instruments on the stock exchanges
              and depositories.
            </p>
          </div>
          <div className="my-2">
            <h6 style={{ fontSize: "0.95rem" }}>NRI brokerage charges</h6>
            <p style={{ fontSize: "0.75rem" }}>
              <ul>
                <li style={{ fontSize: "0.75rem" }}>
                  For a non-PIS account, 0.5% or ₹50 per executed order for
                  equity and F&O (whichever is lower).
                </li>
                <li style={{ fontSize: "0.75rem" }}>
                  For a PIS account, 0.5% or ₹200 per executed order for equity
                  (whichever is lower).
                </li>
                <li style={{ fontSize: "0.75rem" }}>
                  ₹500 + GST as yearly account maintenance charges (AMC)
                  charges.
                </li>
              </ul>
            </p>
          </div>
          <div className="my-2">
            <h6 style={{ fontSize: "0.95rem" }}>Account with debit balance</h6>
            <p style={{ fontSize: "0.75rem" }}>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </p>
          </div>
          <div className="my-2">
            <h6 style={{ fontSize: "0.95rem" }}>
              Charges for Investor's Protection Fund Trust (IPFT) by NSE
            </h6>
            <p style={{ fontSize: "0.75rem" }}>
              <ul>
                <li style={{ fontSize: "0.75rem" }}>
                  Equity and Futures - ₹10 per crore + GST of the traded value.
                </li>
                <li style={{ fontSize: "0.75rem" }}>
                  Options - ₹50 per crore + GST traded value (premium value).
                </li>
                <li style={{ fontSize: "0.75rem" }}>
                  Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2
                  per lakh + GST of premium for Options.
                </li>
              </ul>
            </p>
          </div>
          <div className="my-2">
            <h6 style={{ fontSize: "0.95rem" }}>
              Margin Trading Facility (MTF)
            </h6>
            <p style={{ fontSize: "0.75rem" }}>
              <ul>
                <li style={{ fontSize: "0.75rem" }}>
                  MTF Interest: 0.04% per day (₹40 per lakh) on the funded
                  amount. The interest is applied from T+1 day until the day MTF
                  stocks are sold.
                </li>
                <li style={{ fontSize: "0.75rem" }}>
                  MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is
                  lower.
                </li>
                <li style={{ fontSize: "0.75rem" }}>
                  MTF pledge charge: ₹15 + GST per pledge and unpledge request
                  per ISIN.
                </li>
              </ul>
            </p>
          </div>
          <div className="my-2">
            <h6 style={{ fontSize: "0.95rem" }}> Disclaimer</h6>
            <p style={{ fontSize: "0.75rem" }}>
              Brokerage will not exceed the rates specified by SEBI and the
              exchanges. All statutory and regulatory charges will be levied at
              actuals. Brokerage is also charged on expired, exercised, and
              assigned options contracts. Free investments are available only
              for our retail individual clients. Companies, Partnerships,
              Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as
              delivery brokerage. A brokerage of 0.25% of the contract value
              will be charged for contracts where physical delivery happens. For
              netted off positions in physically settled contracts, a brokerage
              of 0.1% will be charged.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
