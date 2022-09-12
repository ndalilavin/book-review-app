import HeroCSS from "./Hero.module.css";

import React from "react";
import Books from "../book/Books";

function Hero() {

  return (
    <>
      <nav className={HeroCSS.navHero}>
        <header className={HeroCSS.section + " " + HeroCSS.hero}>
          <div className="columns">
         
            <div className="column is-12">
              <div className={HeroCSS.image}>
                <img
                  alt="new"
                  src="https://images.unsplash.com/photo-1548048026-5a1a941d93d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                ></img>
              </div>
            </div>
          </div>
        </header>
      </nav>
      <section className={HeroCSS.section}>
        <Books/>
      </section>
    </>
  );
}
export default Hero;
