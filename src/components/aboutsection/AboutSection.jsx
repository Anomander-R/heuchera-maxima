/* eslint-disable react/prop-types */
//import React from "react";

const AboutSection = ({ position }) => {
  return (
    <>
      <section className="about">
        <div className="info-box">
          <h2>About us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            cupiditate aliquid! Cupiditate voluptas sed quas et est dolorum
            doloremque maiores.
          </p>
          <a href="" className="btn">
            Read more
          </a>
        </div>
        <img
          src="/about/waterfall.png"
          alt=""
          className="about-waterfall"
          id="waterfall"
        />
        <img src="/about/desert-sky.png" alt="" className="" id="desertsky" />
        <img
          src="/about/desert-moon.png"
          alt=""
          className=""
          id="desert-moon"
          style={{ top: `${position * 0.3}px` }}
        />
        <img src="/about/desert-NoSky.png" alt="" className="" id="nosky" />
        <img src="/about/desert-rock.png" alt="" className="" id="rock" />
        <img src="/about/water.png" alt="" className="" id="water" />
        <img
          src="/about/man.png"
          alt=""
          className=""
          id="rock"
          style={{ left: `${0.7 * position - 400}px` }}
        />
        <img src="/about/grass.png" alt="" className="" id="grass" />
      </section>
      
    </>
  );
};

export default AboutSection;
