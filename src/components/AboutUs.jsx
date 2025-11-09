import React from 'react';
import bg from '../assets/images/About Us Section/BG.png';
import mountain from '../assets/images/About Us Section/Mountain.png';
import wrapperAroundmountain from '../assets/images/About Us Section/WrapAroundMountain.png';
import card1 from '../assets/images/About Us Section/85+.png';
import card2 from '../assets/images/About Us Section/50+.png';
import card3 from '../assets/images/About Us Section/10+.png';

const AboutUs = () => {
  return (
    <section
      id="aboutus"
      className="relative w-full min-h-screen overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 flex flex-col lg:flex-row flex-wrap items-start justify-between gap-8 lg:gap-0">
        {/* Left Side */}
        <div className="w-full lg:w-[44%] flex flex-col items-center pt-8 sm:pt-12 md:pt-20">
          <div className="mb-4 sm:mb-6 w-full text-center px-2">
            <span className="font-serif text-[clamp(24px,4vw,36px)] text-[#2c2c2c]">
              A montage of familiar faces and names.
            </span>
          </div>
          <div className="mb-6 sm:mb-8 w-full text-center px-2">
            <p className="text-[clamp(14px,2.2vw,18px)] text-[#2c2c2c] font-sans leading-relaxed">
              Some stories come from the biggest names.<br />
              Others begin with bold, rising voices.<br />
              We've been fortunate to walk alongside both –<br />
              listening, creating, and building stories that matter.
            </p>
          </div>
          {/* Cards */}
          <div className="flex mt-4 sm:mt-5 justify-center items-center flex-wrap gap-2 sm:gap-0">
            <div className="relative w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] md:w-[220px] md:h-[220px] lg:w-[250px] lg:h-[250px] rotate-[6deg] z-30">
              <img src={card1} alt="Projects" className="w-full h-full object-contain" />
            </div>
            <div className="relative w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] md:w-[220px] md:h-[220px] lg:w-[250px] lg:h-[250px] rotate-[6deg] -ml-12 sm:-ml-16 md:-ml-20 lg:-ml-24 z-40">
              <img src={card2} alt="Happy Clients" className="w-full h-full object-contain" />
            </div>
            <div className="relative w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] md:w-[220px] md:h-[220px] lg:w-[250px] lg:h-[250px] rotate-[6deg] -ml-12 sm:-ml-16 md:-ml-20 lg:-ml-24 z-30">
              <img src={card3} alt="Experts Team" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-[56%] flex flex-col items-center lg:items-end pt-4 sm:pt-6 lg:pt-8 relative">
          <div className="w-full flex flex-col items-center pr-0 lg:pr-2 px-2">
            <h2 className="font-script text-[clamp(24px,4.5vw,38px)] text-[#1e3a8a] leading-snug text-center mb-2">
              Every project is more than just a brief -<br />
              it's a new chapter waiting to be written.<br />
              Together, we've crafted tales that inspire,<br />
              connect, and endure.
            </h2>
          </div>
          {/* Mountain image with wrapper */}
          <div className="relative w-full flex justify-center items-end mt-4 sm:mt-2">
            <div className="relative w-full max-w-[90%] sm:max-w-[500px] md:max-w-[560px] aspect-[560/340] flex items-end justify-end">
              <img
                src={wrapperAroundmountain}
                alt="Wrapper Around Mountain"
                className="absolute left-0 bottom-0 w-full h-full object-contain z-10"
              />
              <img
                src={mountain}
                alt="Mountain"
                className="absolute left-[5%] bottom-[6%] w-[85%] h-[60%] object-contain z-20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;