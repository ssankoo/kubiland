import './App.css';
import Welcome from './components/Welcome'
import Navbar from './components/Navbar'
import KnowUs from './components/Knowus'
import Looking from './components/Looking'
import Mission from './components/Mission'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Welcome />
      <Navbar />
      <KnowUs />
      <Looking />
      <Mission />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
