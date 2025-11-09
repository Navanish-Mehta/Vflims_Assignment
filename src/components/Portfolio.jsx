import React from 'react';
import bg from '../assets/images/Portfolio Section/BG.png';
import camera from '../assets/images/Portfolio Section/Camera.svg';
import videoReel from '../assets/images/Portfolio Section/video.png';
import footerDesign from '../assets/images/Portfolio Section/Footer.png';

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="relative w-full min-h-screen overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Left Camera Illustration */}
      <img
        src={camera}
        alt="Camera"
        className="absolute left-0 top-[80px] sm:top-[100px] md:top-[120px] w-[180px] sm:w-[240px] md:w-[280px] lg:w-[180px] z-10 opacity-80 sm:opacity-100"
        style={{ pointerEvents: 'none' }}
      />

      {/* Right Mandala Footer Design */}
      <img
        src={footerDesign}
        alt="Footer Design"
        className="absolute right-0 bottom-0 w-[200px] sm:w-[260px] md:w-[300px] lg:w-[220px] z-10 opacity-80 sm:opacity-100"
        style={{ pointerEvents: 'none' }}
      />

      {/* Section Heading */}
      <div className="pt-12 sm:pt-16 pb-2 w-full flex flex-col items-center px-4 sm:px-6">
        <h2 className="font-serif text-[clamp(24px,4vw,36px)] text-[#2c2c2c] text-center mb-2 px-2">
          The Highlight Reel
        </h2>
        <p className="text-[clamp(16px,2.5vw,20px)] text-[#2c2c2c] font-sans text-center mb-6 sm:mb-8">
          Watch the magic we've captured.
        </p>
      </div>

      {/* Video Reel */}
      <div className="w-full flex justify-center items-center pb-12 sm:pb-16 px-4 sm:px-6">
        <div className="relative w-full max-w-[95%] sm:max-w-[90%] md:max-w-[820px] aspect-[820/420] flex items-center justify-center">
          {/* Reel Frame */}
          <img
            src={videoReel}
            alt="Video Reel Frame"
            className="absolute w-full h-full object-contain z-10"
          />
          {/* Video Area (centered) */}
          <div className="relative z-20 flex items-center justify-center w-[58%] sm:w-[60%] md:w-[480px] aspect-[480/320] mx-auto">
            {/* Left Arrow */}
            <div className="absolute left-[-50px] sm:left-[-60px] md:left-[-70px] top-1/2 transform -translate-y-1/2 w-[40px] sm:w-[50px] md:w-[60px] h-[60%] sm:h-[70%] md:h-[280px] flex items-center justify-center bg-white bg-opacity-80 rounded-md shadow-md cursor-pointer hover:bg-opacity-100 transition-opacity">
              <span className="text-[clamp(32px,5vw,60px)] font-bold text-[#2c2c2c]">&lt;</span>
            </div>
        
            {/* Right Arrow */}
            <div className="absolute right-[-50px] sm:right-[-60px] md:right-[-70px] top-1/2 transform -translate-y-1/2 w-[40px] sm:w-[50px] md:w-[60px] h-[60%] sm:h-[70%] md:h-[280px] flex items-center justify-center bg-white bg-opacity-80 rounded-md shadow-md cursor-pointer hover:bg-opacity-100 transition-opacity">
              <span className="text-[clamp(32px,5vw,60px)] font-bold text-[#2c2c2c]">&gt;</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;