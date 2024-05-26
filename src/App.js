
import './App.css';
import Navbar from './Components/Navbar';
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
      </div>
    </>
  );
}

export default App;
