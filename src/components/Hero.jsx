import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import heroMandala from '../assets/images/Hero section/Hero Mandala.png';
import bg1 from '../assets/images/Hero section/BG1.png';
import logo from '../assets/Logo.png';

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroSection = heroRef.current;
        const heroTop = heroSection.offsetTop;
        const heroHeight = heroSection.offsetHeight;
        const heroBottom = heroTop + heroHeight;
        const scrollPosition = window.scrollY;
        
        // Show logo when scrolled past the Hero section (when scroll position exceeds hero bottom)
        setShowLogo(scrollPosition > heroBottom);
      }
    };

    // Check on mount and on scroll
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Services', to: 'services' },
    { label: 'Their Stories', to: 'portfolio' },
    { label: 'Our Story', to: 'aboutus' },
    { label: 'Varnan', to: 'about' },
  ];

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex flex-col bg-[#FFF8F0] overflow-hidden"
      style={{
        backgroundImage: `url(${bg1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,107,53,0.12) 1px, transparent 1px)',
          backgroundSize: 'clamp(12px, 1.8vw, 20px) clamp(12px, 1.8vw, 20px)',
          zIndex: 0,
        }}
      ></div>

      {/* Navigation Bar */}
      <nav 
        className="fixed top-0 left-0 w-full z-[999] px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-4 sm:py-6"
        style={{ 
          backgroundColor: showLogo ? '#FFF8F0' : 'transparent',
          transition: 'background-color 0.3s ease-in-out'
        }}
      >
        <div className="flex justify-between items-center relative">
          {/* Logo - Fixed at top-left corner */}
          <div 
            className="fixed top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 lg:top-6 lg:left-16 xl:left-24 flex items-center z-[1000]"
            style={{ 
              opacity: showLogo ? 1 : 0,
              pointerEvents: showLogo ? 'auto' : 'none'
            }}
          >
            <img 
              src={logo} 
              alt="Logo" 
              className="w-16 sm:w-20 md:w-24 h-auto object-contain transition-opacity duration-500"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-[#2C2C2C] hover:text-[#FF6B35] transition-colors p-2 ml-auto"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 ml-auto">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                className="text-[#2C2C2C] hover:text-[#FF6B35] cursor-pointer transition-colors text-base font-normal font-sans"
              >
                {item.label}
              </Link>
            ))}
            <Link to="contact" smooth={true} duration={500}>
              <button className="bg-[#FF6B35] text-white px-5 py-2.5 rounded-lg hover:bg-[#E86A33] transition-colors text-base font-normal flex items-center gap-2 shadow-sm">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Let's Talk
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-[#FFF8F0] shadow-lg py-4 px-6 z-[999]">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-[#2C2C2C] hover:text-[#FF6B35] cursor-pointer transition-colors text-base font-normal font-sans py-2"
                >
                  {item.label}
                </Link>
              ))}
              <Link to="contact" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>
                <button className="bg-[#FF6B35] text-white px-5 py-2.5 rounded-lg hover:bg-[#E86A33] transition-colors text-sm font-normal flex items-center gap-2 shadow-sm w-full justify-center">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Let's Talk
                </button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Hero Section */}
      <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-center lg:items-center gap-y-6 sm:gap-y-8 lg:gap-x-12 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-8 sm:py-12 lg:py-16 mt-16 sm:mt-20 md:mt-24">
        {/* Left Side - Mandala with Logo */}
        <div className="w-full lg:w-1/2 min-w-0 flex justify-center lg:justify-start items-center mt-4 sm:mt-8 lg:mt-0 relative px-2 sm:px-4 lg:pl-12">
          <div
            className="relative flex items-center w-full flex-none"
            style={{ maxWidth: 'clamp(260px, 36vw, 520px)' }}
          >
            {/* Mandala */}
            <img
              src={heroMandala}
              alt="Mandala decorative pattern"
              className="w-full h-auto object-contain opacity-60 animate-spin-slow"
              style={{ filter: 'brightness(1.1)' }}
            />

            {/* Logo (centered over mandala) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="flex items-baseline">
                <span
                  className="font-bold text-[#FF6B35] leading-none"
                  style={{ fontSize: 'clamp(64px, 8vw, 140px)' }}
                >
                  ✓
                </span>
                <span
                  className="font-bold text-[#2C2C2C] leading-none ml-2 lg:ml-3"
                  style={{ fontSize: 'clamp(48px, 6.5vw, 110px)' }}
                >
                  Films
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="w-full lg:w-1/2 min-w-0 flex-1 space-y-3 sm:space-y-4 lg:space-y-6 text-center flex flex-col justify-center items-center px-4 sm:px-6 lg:pr-12">
          <h1
            className="font-script text-[clamp(24px,5vw,64px)] sm:text-[clamp(28px,4.5vw,64px)] text-[#1e3a8a] leading-[1.15] font-medium"
            style={{ lineHeight: 1.15 }}
          >
            <span className="block">Varnan is where stories find</span>
            <span className="block">their voice and form</span>
          </h1>

          <p className="font-sans text-[clamp(14px,2.5vw,22px)] sm:text-[clamp(16px,2.2vw,22px)] text-[#FF6B35] font-normal pt-1">
            Films . Brands . Art
          </p>

          <div className="w-full max-w-full sm:max-w-xl lg:max-w-lg pt-2 sm:pt-4 lg:pt-6 px-2 sm:px-0">
            <p className="text-[clamp(11px,1.8vw,16px)] sm:text-[clamp(12px,1.6vw,16px)] text-[#2C2C2C] leading-relaxed font-sans font-normal relative">
              <span className="underline decoration-[#2C2C2C] decoration-1 underline-offset-2">
                Since 2009, V've been telling stories - stories of people, their
                journeys, and the places that shape them. Some begin in polished
                boardrooms, others in humble village squares. But every story
                starts the same way - by listening with intention. V believes it
                takes trust, patience, and an eye for the unseen to capture what
                truly matters. V doesn't just tell stories - V honors them.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;