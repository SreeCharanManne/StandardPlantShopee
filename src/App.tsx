import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Clients from './components/Clients';
import Gallery from './components/Gallery';
import RecentWorks from './components/RecentWorks';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <RecentWorks />
        <Reviews />
        <Contact />
        <Clients />
      </main>
      <Footer />
    </div>
  );
}

export default App;