import { useState } from "react";
import Textbox from "./components/intro";
import Organisers from "./components/organisers";
import Registration from "./components/registration";
import Theme from "./components/Theme";
import Logo from "./components/Logo";
import "./App.css";
import Title from "./components/Title";
import IIT_BHU from "./assets/IIT-BHU.png";
import IIT_BHU_2 from "./assets/IIT-BHU 2.jpg";
import Speakers from "./components/speaker";
import Footer from "./components/footer";
import Accommodation from "./components/accommodation";
import Contact from "./components/Contact";
import Marquee from "./components/marquee";
import SpecialOffer from "./components/specialOffer";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNavClick = (section) => {
      setActiveSection(section);
      setMenuOpen(false);
    };

    return (
      <>
        <Logo />
        <div className={`top-nav ${menuOpen ? "open" : ""}`}>
          <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <button className="nav-link" onClick={() => handleNavClick("home")}>
            Home
          </button>
          <button className="nav-link" onClick={() => handleNavClick("theme")}>
            Theme
          </button>
          <button
            className="nav-link"
            onClick={() => handleNavClick("registration")}
          >
            Registration
          </button>
          <button
            className="nav-link"
            onClick={() => handleNavClick("committee")}
          >
            Committee
          </button>
          <button
            className="nav-link"
            onClick={() => handleNavClick("speaker")}
          >
            Speaker
          </button>
          <button
            className="nav-link"
            onClick={() => handleNavClick("accommodation")}
          >
            Accommodation
          </button>
          <button className="nav-link" onClick={() => handleNavClick("contact")}>
            Contact Us
          </button>
        </div>
      </>
    );
  };

  const renderSection = () => {
    switch (activeSection) {
      case "theme":
        return (
          <>
            <div className="IIT-BHU-bg">
              <img src={IIT_BHU_2} alt="IIT-BHU" className="IIT-BHU-img" />
            </div>
            <Theme />
          </>
        );
      case "registration":
        return (
          <>
            <div className="IIT-BHU-bg">
              <img src={IIT_BHU_2} alt="IIT-BHU" className="IIT-BHU-img" />
            </div>
            <Registration />
          </>
        );
      case "committee":
        return (
          <>
            <div className="IIT-BHU-bg">
              <img src={IIT_BHU_2} alt="IIT-BHU" className="IIT-BHU-img" />
            </div>
            <Organisers />
          </>
        );
      case "speaker":
        return (
          <>
            <div className="IIT-BHU-bg">
              <img src={IIT_BHU_2} alt="IIT-BHU" className="IIT-BHU-img" />
            </div>
            <Speakers />
          </>
        );
      case "accommodation":
        return (
          <>
            <div className="IIT-BHU-bg">
              <img src={IIT_BHU_2} alt="IIT-BHU" className="IIT-BHU-img" />
            </div>
            <Accommodation />
          </>
        );
      case "contact":
        return (
          <>
            <div className="IIT-BHU-bg">
              <img src={IIT_BHU_2} alt="IIT-BHU" className="IIT-BHU-img" />
            </div>
            <Contact />
          </>
        );
      default:
        return (
          <>
            <div className="IIT-BHU-bg">
              <img src={IIT_BHU} alt="IIT-BHU" className="IIT-BHU-img" />
            </div>
            <Title />
            <Marquee text="Students can enjoy Early Bird Registration Discount. Updated Registration fee for PhD scholars is Rs 1500 & Master's student is Rs 1000." />
            <SpecialOffer />
            <Textbox />
          </>
        );
    }
  };

  return (
    <div className="App">
      <Nav />
      <div className="content-container">
        {renderSection()}
        <Footer />
      </div>
    </div>
  );
}

export default App;
