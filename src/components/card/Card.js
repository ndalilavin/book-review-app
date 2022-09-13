import CardCSS from "./Card.module.css";
import React from "react";
import image from "../../logo.svg";
import { Link } from "react-router-dom";

function Card() {
  return (
    <>
    <Link className={CardCSS.link} to={`/add-review/1`}>
      <div className={CardCSS.fullCard}>
        <div className="columns is-multiline">
          <div className="column is-2">
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
      </Link>
    </>
  );
}
export default Card;
