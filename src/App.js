import 'bootstrap/dist/css/bootstrap.min.css';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import TopBar from './components/TopBar';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <ResponsiveAppBar />
      <TopBar />
      <About />
      <Skills />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
