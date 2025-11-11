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
      {/* Desktop/large-only original composition */}
      <div className="hidden md:block relative w-full max-w-[1400px] mx-auto h-full min-h-[600px] md:min-h-[700px] px-4 sm:px-6 md:px-8">
        {/* Sticky Note */}
        <div className="absolute left-12 top-16 w-[340px] rotate-[-6deg] z-20">
          <img src={noteImg} alt="note" className="w-full h-auto" />
        </div>
        {/* India Gate */}
        <div className="absolute left-24 bottom-24 w-[250px] z-10">
          <img src={indiaGate} alt="India Gate" className="w-full h-auto" />
        </div>
        {/* Branding Experts label */}
        <div className="absolute left-[33%] bottom-[40%] z-30">
          <span className="font-script text-[22px] text-[#1e3a8a]">Branding Experts</span>
        </div>
        {/* Silhouettes */}
        <div className="absolute right-[16%] top-[15%] w-[440px] z-20 flex flex-col items-center">
          <img src={silhouettes} alt="team silhouettes" className="w-full h-auto drop-shadow-xl" />
          <span className="absolute left-[15px] top-[-105px] font-script text-[22px] text-[#1e3a8a]">Film Makers</span>
          <span className="absolute right-[-170px] top-[-80px] font-script text-[22px] text-[#1e3a8a]">Art Curators</span>
        </div>
        {/* Arrows */}
        <img
          src={arrow1}
          alt="arrow 1"
          className="absolute"
          style={{ right: '33%', top: '4%', width: '110px', zIndex: 30, transform: 'rotate(-3deg)' }}
        />
        <img
          src={arrow3}
          alt="arrow 2"
          className="absolute"
          style={{ left: '37%', bottom: '44%', width: '160px', zIndex: 30, transform: 'rotate(3deg)' }}
        />
        <img
          src={arrow2}
          alt="arrow 3"
          className="absolute"
          style={{ right: '7%', top: '10%', width: '110px', zIndex: 30, transform: 'rotate(5deg)' }}
        />
        {/* Headline & CTA */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-10 w-full max-w-2xl text-center z-40">
          <h2 className="text-[32px] text-[#2c2c2c] font-serif mb-6">
            Take a closer look at the stories V bring to life.
          </h2>
          <button
            className="bg-[#FF6B35] text-white px-6 py-3 rounded-full shadow-md text-base"
            onClick={() => {
              const el = document.getElementById('portfolio');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View Portfolio
          </button>
        </div>
      </div>

      {/* Mobile/Tablet simplified stacked layout (keeps desktop untouched) */}
      <div className="block md:hidden w-full mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-6">
          <img src={noteImg} alt="note" className="w-4/5 max-w-[300px] rotate-[-6deg]" />
          <img src={silhouettes} alt="team silhouettes" className="w-4/5 max-w-[340px] drop-shadow-xl" />
          <span className="font-script text-[18px] text-[#1e3a8a]">Branding Experts</span>
          <img src={indiaGate} alt="India Gate" className="w-2/3 max-w-[220px]" />
          <h2 className="text-[clamp(20px,4.5vw,28px)] text-[#2c2c2c] font-serif text-center px-2">
            Take a closer look at the stories V bring to life.
          </h2>
          <button
            className="bg-[#FF6B35] text-white px-5 py-2.5 rounded-full shadow-md text-[clamp(14px,1.8vw,16px)]"
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