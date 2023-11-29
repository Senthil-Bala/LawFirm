import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/Navbars/Navbar"
import HeroSection from './Components/Heroess/HeroSection';
import Main from "./Components/Mainss/Main";
import Boxes from "./Components/Box/Boxes";
import Practices from './';
import Clients from "./Components/ClientSides/Clients";
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
