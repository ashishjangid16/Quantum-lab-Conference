import { useState } from "react";
import Textbox from "./components/intro";
import Organisers from "./components/organisers";
import Registration from "./components/registration";
import Theme from "./components/Theme";
import Logo from "./components/Logo";
import "./App.css";
import Title from "./components/Title";
import GangaAd from "./components/GangaAd";
import IIT_BHU from "./assets/IIT-BHU.png";
import IIT_BHU_2 from "./assets/IIT-BHU 2.jpg";
import sponsor1Img from "./assets/sponser 1.jpeg";
import sponsor2Img from "./assets/sponser 2.jpeg";
import Speakers from "./components/speakers";
import Footer from "./components/footer";
import Accommodation from "./components/accommodation";
import Contact from "./components/Contact";

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
          <div
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
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
            Speakers
          </button>
          <button
            className="nav-link"
            onClick={() => handleNavClick("accommodation")}
          >
            Accommodation
          </button>
          <button
            className="nav-link"
            onClick={() => handleNavClick("contact")}
          >
            Contact Us
          </button>
        </div>
      </>
    );
  };

  const SponsorshipSection = () => (
    <div className="sponsorship-section">
      <h2 style={{ marginBottom: '30px', color: '#222', fontSize: '2.2rem' }}>
        Sponsorship Categories
      </h2>
      
      <div className="sponsorship-categories">
        <div className="sponsor-tier platinum">
          <div className="tier-header">
            🟩 <span>Platinum (₹75,000)</span>
          </div>
          <ul>
            <li>Prominent logo display on all materials</li>
            <li>Exhibition stall</li>
            <li>Acknowledgement during sessions</li>
            <li>Provision of refreshments & meals for all participants</li>
          </ul>
        </div>

        <div className="sponsor-tier gold">
          <div className="tier-header">
            🟨 <span>Gold (₹50,000)</span>
          </div>
          <ul>
            <li>Logo on brochure and banner</li>
            <li>Stall space</li>
            <li>Shared acknowledgement in sessions</li>
          </ul>
        </div>

        <div className="sponsor-tier silver">
          <div className="tier-header">
            🟦 <span>Silver (₹25,000)</span>
          </div>
          <ul>
            <li>Logo on event website and program booklet</li>
            <li>Inclusion in sponsor acknowledgements</li>
          </ul>
        </div>
      </div>

      <div className="sponsor-list" style={{ marginTop: '24px', textAlign: 'left', maxWidth: '680px', marginInline: 'auto' }}>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <div style={{ background: '#f3f7ff', borderRadius: '10px', padding: '12px 14px', flex: '1 1 240px', minWidth: '220px', textAlign: 'center' }}>
            <img src={sponsor1Img} alt="IR TECH logo" style={{ width: '100%', maxHeight: '120px', objectFit: 'contain', borderRadius: '8px' }} />
            <strong style={{ display: 'block', marginTop: '8px' }}>IR TECH</strong>
          </div>
          <div style={{ background: '#fff8e4', borderRadius: '10px', padding: '12px 14px', flex: '1 1 240px', minWidth: '220px', textAlign: 'center' }}>
            <img src={sponsor2Img} alt="CSIR logo" style={{ width: '100%', maxHeight: '120px', objectFit: 'contain', borderRadius: '8px' }} />
            <strong style={{ display: 'block', marginTop: '8px' }}>CSIR</strong>
          </div>
        </div>
      </div>
    </div>
  );

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
        // ---------------- HOME SECTION ----------------
        return (
          <>
            <div className="IIT-BHU-bg">
              <img src={IIT_BHU} alt="IIT-BHU" className="IIT-BHU-img" />
            </div>

            <Title />

            <GangaAd />

            <Textbox />

            <SponsorshipSection />
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
