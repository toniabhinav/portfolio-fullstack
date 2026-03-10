import Footer from "./components/Footer";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

import { useEffect } from "react";
import { config } from "./constants/config";

const App = () => {
  useEffect(() => {
    document.title = config.html.title;
  }, []);

  return (
    <div className="bg-primary relative z-0">
      <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
        <Navbar />
        <Hero />
      </div>

      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />

      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>

      <Footer />
    </div>
  );
};

export default App;