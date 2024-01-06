/* eslint-disable react/prop-types */

const HomeSection = ({position}) => {
  return (
    <>
      <section className="home">
        <img src="/home/sky.png" alt="sky" id="sky" />
        <img src="/home/moon.png" alt="sky" id="moon" style={{top: `${position}px`}}/>
        <img src="/home/water.png" alt="sky" id="water" />
        <img src="/home/center-city.png" alt="sky" id="city" />
        <img src="/home/right-city.png" alt="sky" id="right" />
        <img src="/home/left-city.png" alt="sky" id="left" />
        <img src="/home/train.png" alt="sky" id="train" style={{left: `${1.5*position}px`}}/>
        <img src="/home/rail.png" alt="sky" id="rail" />
        <h1 id="text" style={{top: `${80+position*-0.05}%`}}>Fisherman&apos;s Website</h1>
        <img src="/home/hill-left-1.png" alt="sky" id="hillleft" />
        <img src="/home/hill-right-1.png" alt="sky" id="hillright" />
      </section>
    </>
  );
};

export default HomeSection;
