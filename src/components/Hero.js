import React from "react";
import { useGlobalContext } from "../context/Context";
const Hero = () => {
  console.log(useGlobalContext());
  const { closeSubmenu } = useGlobalContext();
  return (
    <div className="hero-container" onMouseOver={closeSubmenu}>
      <div className="hero">
        <div className="hero__info">
          <h1 className="hero__info--heading">
            Payments <br />
            infrastructure
            <br /> for the internet
          </h1>
          <p className="hero__info--para">
            Millions of companies of all sizes-- from startups to Fortune
            400s--use Stripe's software and APIs to accept payments, send
            payouts, and manage their businesses online.
          </p>
          <button className="hero__info--btn">Start now</button>
        </div>
        <div className="hero__img">
          <img src="/static/phone.svg" alt="" />
        </div>
      </div>
    </div>
  );
};
export default Hero;
