import React from 'react';
import aboutBg from '../assets/images/About Team Section/BG.png';
import noteImg from '../assets/images/About Team Section/Paper.png';
import silhouettes from '../assets/images/About Team Section/Standing People.png';
import indiaGate from '../assets/images/About Team Section/indiagate.png';
import arrow1 from '../assets/images/About Team Section/Vector.png';
import arrow2 from '../assets/images/About Team Section/Vector1.png';
import arrow3 from '../assets/images/About Team Section/Vector2.png';

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: `url(${aboutBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative w-full max-w-[1400px] mx-auto h-full min-h-[500px] sm:min-h-[600px] md:min-h-[700px] px-4 sm:px-6 md:px-8">
        {/* Sticky Note */}
        <div className="absolute left-2 sm:left-6 md:left-12 top-8 sm:top-12 md:top-16 w-[200px] sm:w-[260px] md:w-[300px] lg:w-[340px] rotate-[-6deg] z-20">
          <img src={noteImg} alt="note" className="w-full h-auto" />
        </div>

        {/* India Gate */}
        <div className="absolute left-4 sm:left-12 md:left-24 bottom-12 sm:bottom-16 md:bottom-24 w-[150px] sm:w-[200px] md:w-[250px] z-10">
          <img src={indiaGate} alt="India Gate" className="w-full h-auto" />
        </div>

        {/* Branding Experts label */}
        <div className="absolute left-[5%] sm:left-[25%] md:left-[33%] bottom-[35%] sm:bottom-[38%] md:bottom-[40%] z-30">
          <span className="font-script text-[clamp(14px,2.5vw,22px)] text-[#1e3a8a]">Branding Experts</span>
        </div>

        {/* Silhouettes */}
        <div className="absolute right-[2%] sm:right-[8%] md:right-[16%] top-[10%] sm:top-[12%] md:top-[15%] w-[220px] sm:w-[320px] md:w-[380px] lg:w-[440px] z-20 flex flex-col items-center">
          <img src={silhouettes} alt="team silhouettes" className="w-full h-auto drop-shadow-xl" />
          {/* Film Makers label */}
          <span className="absolute left-[8px] sm:left-[12px] md:left-[15px] top-[-60px] sm:top-[-80px] md:top-[-105px] font-script text-[clamp(14px,2.5vw,22px)] text-[#1e3a8a]">Film Makers</span>
          {/* Art Curators label */}
          <span className="absolute right-[-90px] sm:right-[-130px] md:right-[-170px] top-[-50px] sm:top-[-65px] md:top-[-80px] font-script text-[clamp(14px,2.5vw,22px)] text-[#1e3a8a]">Art Curators</span>
        </div>

        {/* Arrows */}
        {/* Arrow to "Film Makers" */}
        <img
          src={arrow1}
          alt="arrow 1"
          className="absolute hidden sm:block"
          style={{
            right: '33%',
            top: '4%',
            width: 'clamp(60px, 8vw, 110px)',
            zIndex: 30,
            transform: 'rotate(-3deg)',
          }}
        />
        {/* Arrow to "Branding Experts" */}
        <img
          src={arrow3}
          alt="arrow 2"
          className="absolute hidden sm:block"
          style={{
            left: '40%',
            bottom: '44%',
            width: 'clamp(90px, 12vw, 160px)',
            zIndex: 30,
            transform: 'rotate(3deg)',
          }}
        />
        {/* Arrow to "Art Curators" */}
        <img
          src={arrow2}
          alt="arrow 3"
          className="absolute hidden sm:block"
          style={{
            right: '8%',
            top: '10%',
            width: 'clamp(60px, 8vw, 110px)',
            zIndex: 30,
            transform: 'rotate(5deg)',
          }}
        />

        {/* Headline & CTA */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-4 sm:bottom-6 md:bottom-10 w-full max-w-[90%] sm:max-w-2xl text-center z-40 px-4">
          <h2 className="text-[clamp(20px,3.5vw,32px)] text-[#2c2c2c] font-serif mb-4 sm:mb-6">
            Take a closer look at the stories V bring to life.
          </h2>
          <button
            className="bg-[#FF6B35] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-md text-[clamp(14px,1.8vw,16px)] hover:bg-[#E86A33] transition-colors"
            onClick={() => {
              const el = document.getElementById('portfolio');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;