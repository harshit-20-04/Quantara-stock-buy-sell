import React from "react";

function RightSection({
  imgURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="m-3 p-3">
      <div className="row flex space-around">
        <div className="col-10 col-lg-5 m-3 p-3">
          <h2 className='mx-4 p-4'>{productName}</h2>
          <p className='mx-4 p-4'>{productDescription}</p>
          <div className='mx-4 p-4 flex space-between'>
            <a href={tryDemo}>Try Demo</a>
            <a href={learnMore}>Learn More</a>
          </div>
          <div>
              <img scr="media/images/googlePlayBadge.svg" alt={productName} />
            <a href={appStore}>
              <img scr="media/images/appStoreBadge.svg" alt={productName} />
            </a>
          </div>
        </div>
        <div className="col col-lg-5 m-3 p-3">
          <img src={imgURL} style={{width:"35rem"}} alt={productName} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
