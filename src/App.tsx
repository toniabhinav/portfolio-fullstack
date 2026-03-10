import { BrowserRouter, Routes, Route } from "react-router-dom";
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

import AdminLogin from "./pages/AdminLogin.tsx";
import AdminMessages from "./pages/AdminMessages.tsx";

import { useEffect } from "react";
import { config } from "./constants/config";

const Home = () => {
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

const App = () => {
  useEffect(() => {
    document.title = config.html.title;
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/messages" element={<AdminMessages />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;