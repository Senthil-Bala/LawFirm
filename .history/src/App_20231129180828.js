import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/Navbars"
import HeroSection from './Components/HeroSection';
import Main from "./Components/Main";
import Boxes from "./Components/Boxes";
import Practices from './Practices';
import Clients from "./Clients";
import Team from "./Components/Team";
import Faq from "./Components/Faq"
import Subscribe from './Components/Subscribe';
import Footer from "./Components/Footer"

function App() {
  return (
    <div className="container">
      <Navbar/>
      <HeroSection/>
      <Main/>
      <Boxes/>
      <Practices/>
      <Clients/>
      <Team/>
      <Faq/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}

export default App;
