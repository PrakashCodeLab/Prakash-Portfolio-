import "./assets/styles/style.scss";
import { useEffect } from "react";
import { Navbar, SocialSection } from "./components/Components";
import {
  Hero,
  Contactus,
  Project,
  Technology,
  Footer,
} from "./container/Container";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="body__container">
      <header className="header__container">
        <Navbar />
        <Hero />
      </header>

      <main className="main__body__container">
        <div id="project" className="project--section__wrapper">
          <Project />
        </div>

        <Technology />

        <SocialSection />
        <Contactus />
        <Footer />
      </main>
    </div>
  );
};

export default App;
