import React from "react";
import HeroSection from "./HeroSection";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function Product() {
  return (
    <>
      <HeroSection />
      <LeftSection
        imgURL="media/images/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="/kite"
        learnMore="/kite"
        googlePlay="/googleplay"
        appStore="/appstore"
      />
      <RightSection
        imgURL="media/images/console.png"
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        tryDemo="/console"
        learnMore="/console"
        googlePlay="/googleplay"
        appStore="/appstore"
      />
      <LeftSection
        imgURL="media/images/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="Coin"
        learnMore="coin"
        googlePlay="/googleplay"
        appStore="/appstore"
      />
      <RightSection
        imgURL="media/images/kiteconnect.png"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        tryDemo="/kiteconnect"
        learnMore="/kiteconnect"
        googlePlay="/googleplay"
        appStore="/appstore"
      />
      <LeftSection
        imgURL="media/images/varsity.png"
        productName="Varsity mobile"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="/varsity"
        learnMore="/varsity"
        googlePlay="/googleplay"
        appStore="/appstore"
      />
      <p className='text-center p-3 m-3'>Want to know more about our technology stack? Check out the Quantara.tech blog.</p>
      <Universe/>
    </>
  );
}

export default Product;
