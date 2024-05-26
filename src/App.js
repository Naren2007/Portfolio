
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/mobileNav/Hero/Hero';

function App() {
  document.title = 'PORTFOLIO'

  return (
    <>
      <Navbar />
      <div className='container'>
        <Hero />
      </div>
    </>
  );
}

export default App;
