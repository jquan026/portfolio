import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Interests from './components/Interests';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/> 
      <Skills/>
      <Experience/>
      <Interests/>
      <Footer/>
    </div>
  );
}

export default App;
