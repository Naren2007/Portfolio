
import './App.css';
import Contact from './Components/Contact/Contact';
import Navbar from './Components/Navbar';
import Footer from './Components/footer/Footer';
import Hero from './Components/mobileNav/Hero/Hero';
import Skills from './Components/mobileNav/Skills/Skills';

function App() {
  document.title = 'PORTFOLIO'

  return (
    <>
      <Navbar />
      <div className='container'>
        <Hero />
        <Skills />
        <Contact />
      </div>
      <Footer />

    </>
  );
}

export default App;
