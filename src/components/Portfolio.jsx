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
        className="absolute left-0 z-10 opacity-80 sm:opacity-100"
        style={{
          top: 'clamp(56px, 8vw, 120px)',
          // Smaller on mobile/tablet, unchanged at desktop
          width: 'clamp(90px, 12vw, 200px)',
          pointerEvents: 'none',
        }}
      />

      {/* Right Mandala Footer Design */}
      <img
        src={footerDesign}
        alt="Footer Design"
        className="absolute right-0 bottom-0 z-10 opacity-80 sm:opacity-100"
        style={{
          width: 'clamp(200px, 13vw, 220px)',
          pointerEvents: 'none',
        }}
      />

      {/* Section Heading */}
      <div className="pt-12 sm:pt-16 pb-2 w-full flex flex-col items-center px-4 sm:px-6 ml-8 sm:ml-16 md:ml-0">
        <h2 className="font-serif text-[clamp(24px,4vw,36px)] text-[#2c2c2c] text-center mb-2 px-2 ml-6 sm:ml-14 md:ml-0">
          The Highlight Reel
        </h2>
        <p className="text-[clamp(16px,2.5vw,20px)] text-[#2c2c2c] font-sans text-center mb-6 sm:mb-8 ml-6 sm:ml-10 md:ml-0">
          Watch the magic we've captured.
        </p>
      </div>

      {/* Video Reel */}
      <div className="w-full flex justify-center items-center pb-12 sm:pb-16 px-6 sm:px-6 mt-6 md:mt-0 ml-8 sm:ml-16 md:ml-0">
        <div className="relative w-full max-w-[95%] sm:max-w-[90%] md:max-w-[min(90vw,820px)] aspect-[820/420] flex items-center justify-center">
          {/* Reel Frame */}
          <img
            src={videoReel}
            alt="Video Reel Frame"
            className="absolute w-full h-full object-contain z-10"
          />
          {/* Video Area (centered) */}
          <div className="relative z-20 flex items-center justify-center w-[58%] sm:w-[60%] md:w-[min(60%,480px)] aspect-[480/320] mx-auto">
            {/* Left Arrow */}
            <div
              className="absolute top-1/2 -translate-y-1/2 flex items-center justify-center bg-white bg-opacity-80 rounded-md shadow-md cursor-pointer hover:bg-opacity-100 transition-opacity"
              style={{
                left: 'clamp(-70px, -6vw, -40px)',
                width: 'clamp(36px, 5vw, 60px)',
                height: 'clamp(160px, 35vh, 280px)',
              }}
            >
              <span className="text-[clamp(32px,5vw,60px)] font-bold text-[#2c2c2c]">&lt;</span>
            </div>
        
            {/* Right Arrow */}
            <div
              className="absolute top-1/2 -translate-y-1/2 flex items-center justify-center bg-white bg-opacity-80 rounded-md shadow-md cursor-pointer hover:bg-opacity-100 transition-opacity"
              style={{
                right: 'clamp(-70px, -6vw, -40px)',
                width: 'clamp(36px, 5vw, 60px)',
                height: 'clamp(160px, 35vh, 280px)',
              }}
            >
              <span className="text-[clamp(32px,5vw,60px)] font-bold text-[#2c2c2c]">&gt;</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;