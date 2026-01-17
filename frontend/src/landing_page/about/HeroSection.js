import React from "react";

function HeroSection() {
  return (
    <div className="mx-5 my-2 p-3">
      <div className="my-5 py-5 text-center border-bottom">
        <h5 mt-3 pt-3>We pioneered the discount broking model in India.</h5>
        <h5 className="pb-3">Now, we are breaking ground with our technology.</h5>
      </div>
      <div className="row m-5 p-5">
        <div className="col col-6">
          <p>
            We founded Quantara with a vision to redefine how people invest and
            trade by bringing clarity, transparency, and intelligence to modern
            finance. The name Quantara is inspired by the fusion of “Quant” —
            representing data-driven decision making — and “Tara”, the Sanskrit
            word for star, symbolizing guidance and growth.
          </p>
          <p>
            Our mission is simple — to empower every investor with
            institutional-grade tools, seamless technology, and fair pricing,
            eliminating the complexity and barriers that often hold people back
            from financial success.
          </p>
          <p>
            Today, our innovative platforms and AI-driven insights enable
            thousands of investors and traders to make smarter decisions with
            confidence. With our focus on precision, speed, and trust, Quantara
            aims to become the go-to ecosystem for next-generation trading and
            wealth management.
          </p>
          <p>
            Join us as we illuminate the path toward a smarter, data-powered
            financial future.
          </p>
        </div>
        <div className="col col-6 p-2">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            Rainmatter, our fintech fund and incubator, has invested in several
            fintech startups with the goal of growing the Indian capital
            markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us or learn more about our business and product philosophies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
