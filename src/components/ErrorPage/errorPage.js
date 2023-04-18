import React from "react";
import "./errorPage.css";
import BaseComponent from "../base/base.component";
export default function errorPage() {
  return (
    <>
      <BaseComponent />
      <div className="error-wrapper">
        <div className="error-img">
          <img
            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/error-500_cd3e64.png"
            alt="Error Image"
          />
        </div>
        <div className="error-text">
            <p className="error-text-one">Somethings's not right!</p>
          
            <p className="error-text-two">Please try again</p>
            <button className="error-text-btn">RETRY</button>
        </div>
      </div>
    </>
  );
}
