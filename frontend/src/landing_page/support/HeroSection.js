import React from "react";

function HeroSection() {
  return (
    <div className="p-5 bg-primary">
      <div className="flex space-between">
        <h3 className="text-white pb-5">Support Portal</h3>
        <a className="text-white px-5 text-center" href="/loper"> Track Tickets</a>
      </div>
      <div className="row fex space-between">
        <div className="col col-md-5 py-2">
          <h2 className="text-white pt-2 pb-3">Search for an answer or browse help topics to create ticket</h2>
          <input
            type="text"
            class="py-3 my-2 fs-6 form-control"
            placeholder="Eg. how do I activate F&O, why is my order getting rejected"
            style={{width:"420px"}}
          />
          <div style={{width:"460px"}}>
          <a className="text-white" href='/track'>Track account opening</a>&nbsp;&nbsp;&nbsp;
          <a className="text-white" href='/track'>Track segment <br />activation</a>&nbsp;&nbsp;
          <a className="text-white" href='/track'>Intraday</a>&nbsp;&nbsp;
          <a className="text-white" href='/margin'>margins</a>&nbsp;&nbsp;
          <a className="text-white" href='/kite'>Kite User Manual</a>&nbsp;&nbsp;
          </div>
        </div>
        <div className="col-5 col-lg-5 p-3">
            <h2 className="text-white pb-2">Featured</h2>
            <ol>
                <li className="text-white pb-3">Current Takeovers and Delistings - January 2025</li>
                <li className="text-white pb-3">Latest Intraday leverages - MIS & CO</li>
            </ol>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
