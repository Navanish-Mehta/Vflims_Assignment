import React from 'react';
import bg from '../assets/images/Services Section/BG.png';
import tape from '../assets/images/Services Section/Tape.png';
import card1 from '../assets/images/Services Section/Card1.png';
import card2 from '../assets/images/Services Section/Card2.png';
import card3 from '../assets/images/Services Section/Card3.png';
import blueline from '../assets/images/Services Section/Blueline.svg';
import footerDesign from '../assets/images/Services Section/Footer.svg';

const Services = () => {
    return (
        <section
            id="services"
            className="relative w-full min-h-screen overflow-hidden"
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Top Heading */}
            <div className="pt-8 sm:pt-12 pb-2 w-full flex flex-col items-center px-4 sm:px-6">
                <h2 className="font-serif text-[clamp(24px,4vw,36px)] text-[#2c2c2c] text-center mb-2 px-2">
                    The storyboard reveals the breadth of our craft.
                </h2>
                <img src={blueline} alt="blue underline" className="w-[90%] mt-2 mb-6 sm:mb-8" style={{ maxWidth: 'min(90vw, 900px)' }} />
            </div>

            {/* Cards Row */}
            <div className="w-full flex flex-col sm:flex-row justify-center items-center sm:items-start gap-6 sm:gap-4 md:gap-6 lg:gap-8 pb-12 sm:pb-16 px-4 sm:px-6 md:px-8">
                {/* Card 1 */}
                <div className="relative w-full flex flex-col items-center" style={{ maxWidth: 'clamp(260px, 28vw, 320px)', height: 'clamp(340px, 38vw, 400px)' }}>
                    <img
                        src={tape}
                        alt="tape"
                        className="absolute z-20 rotate-[2deg]"
                        style={{ pointerEvents: 'none', left: '-1px', top: 'clamp(-25px, -3vw, -20px)', width: 'clamp(140px, 16vw, 180px)' }}
                    />
                    <img
                        src={card1}
                        alt="Film Production"
                        className="w-full h-full object-cover rounded-lg z-10"
                        style={{ transform: 'rotate(7deg)' }}
                    />
                </div>
                {/* Card 2 */}
                <div className="relative w-full flex flex-col items-center mt-8 sm:mt-12 md:mt-14" style={{ maxWidth: 'clamp(260px, 28vw, 320px)', height: 'clamp(340px, 38vw, 400px)' }}>
                    <img
                        src={tape}
                        alt="tape"
                        className="absolute z-20 rotate-[2deg]"
                        style={{ pointerEvents: 'none', left: 'clamp(70px, 7vw, 90px)', top: 'clamp(-30px, -3.5vw, -25px)', width: 'clamp(140px, 16vw, 180px)' }}
                    />
                    <img
                        src={card2}
                        alt="Branding"
                        className="w-full h-full object-cover rounded-lg z-10"
                        style={{ transform: 'rotate(0deg)' }}
                    />
                </div>
                {/* Card 3 */}
                <div className="relative w-full flex flex-col items-center" style={{ maxWidth: 'clamp(260px, 28vw, 320px)', height: 'clamp(340px, 38vw, 400px)' }}>
                    <img
                        src={tape}
                        alt="tape"
                        className="absolute z-20 rotate-[25deg]"
                        style={{ pointerEvents: 'none', right: 'clamp(-18px, -2vw, -12px)', top: 'clamp(-25px, -3vw, -20px)', width: 'clamp(140px, 16vw, 180px)' }}
                    />
                    <img
                        src={card3}
                        alt="Art Curation"
                        className="w-full h-full object-cover rounded-lg z-10"
                        style={{ transform: 'rotate(-7deg)' }}
                    />
                </div>
            </div>

            {/* Footer Design */}
            <div className="absolute left-0 bottom-0 w-full z-40">
                <img src={footerDesign} alt="footer design" className="w-full h-auto" />
            </div>
        </section>
    );
};

export default Services;