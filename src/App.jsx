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

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const renderSection = () => {
    switch (activeSection) {
      case "theme":
        return <Theme />;
      case "registration":
        return <Registration />;
      case "committee":
        return <Organisers />;
      case "speaker":
        return <Speakers/>;
      case "accommodation":
        return <div>Accommodation content here</div>;
      case "contact":
        return <div>Contact Us content here</div>;
      default:
        return (
          <>
            <Logo />
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
      <div className="top-nav">
        <button className="nav-link" onClick={() => setActiveSection("home")}>
          Home
        </button>
        <button className="nav-link" onClick={() => setActiveSection("theme")}>
          Theme
        </button>
        <button
          className="nav-link"
          onClick={() => setActiveSection("registration")}
          >
          Registration
        </button>
        <button
          className="nav-link"
          onClick={() => setActiveSection("committee")}
          >
          Committee
        </button>
        <button
          className="nav-link"
          onClick={() => setActiveSection("speaker")}
        >
          Speaker
        </button>
        <button
          className="nav-link"
          onClick={() => setActiveSection("accommodation")}
        >
          Accommodation
        </button>
        <button
          className="nav-link"
          onClick={() => setActiveSection("contact")}
        >
          Contact Us
        </button>
      </div>
      {renderSection()}
          <Footer/>
    </div>
  );
}

export default App;
