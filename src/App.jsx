import Hero from './components/Hero';
import About from './components/About';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import ContactUs from './components/ContactUs';
import './App.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <AboutUs />
      <Services />
      <Portfolio />
      <ContactUs />
    </div>
  );
}

export default App;
