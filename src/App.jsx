import { useState } from "react";
import Textbox from "./components/intro";
import Organisers from "./components/organisers";
import Registration from "./components/registration";
import Theme from "./components/Theme";
import Logo from "./components/Logo";
import "./App.css";
import Title from "./components/Title";
import IIT_BHU from "./assets/IIT-BHU.png";
import Speakers from "./components/speaker";
import Footer from "./components/footer";
import Accommodation from "./components/accommodation";
import Contact from "./components/Contact"; // ✅ Import the Contact component

function App() {
  const [activeSection, setActiveSection] = useState("home");

  // ✅ Navbar Component
  const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNavClick = (section) => {
      setActiveSection(section);
      setMenuOpen(false); // close menu after click
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
        <button className="nav-link" onClick={() => handleNavClick("speaker")}>
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

  // ✅ Section Renderer
  const renderSection = () => {
    switch (activeSection) {
      case "theme":
        return <Theme />;
      case "registration":
        return <Registration />;
      case "committee":
        return <Organisers />;
      case "speaker":
        return <Speakers />;
      case "accommodation":
        return <Accommodation />;
      case "contact":
        return <Contact />; // ✅ Replaced placeholder with Contact component
      default:
        return (
          <>
           
            <div className="IIT-BHU-bg">
              <img src={IIT_BHU} alt="IIT-BHU" className="IIT-BHU-img" />
            </div>
            <Title />
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
