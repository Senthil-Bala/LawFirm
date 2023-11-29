import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/Navbars/Navbar"
import HeroSection from './Components/Heroess/HeroSection';
import Main from "./Components/Mainss/Main";
import Boxes from "./Components/Box/Boxes";
import Practices from './Components/Practicsing/Practices';
import Clients from "./Components/ClientSides/Clients";
import Team from "./Components/Teamss/Team";
import Faq from "./Components/Frequents/Faq"
import Subscribe from './Components/Subscribes/Subscribe';
import Footer from "./Components/Footers/Footer"

function App() {
  return (
    <div className="containe">
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
