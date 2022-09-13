import CardCSS from "./Card.module.css";
import React from "react";
import image from "../../logo.svg";

function Card() {
  return (
    <>
      <div className={CardCSS.fullCard}>
        <div className="columns is-multiline">
          <div className="column is-4">
            <div className={CardCSS.card}>
              <div className={CardCSS.image}>               
                <img src={image} alt="ProductName" />
              </div>
            <div className={CardCSS.buttons}>
                <button>Rate</button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
