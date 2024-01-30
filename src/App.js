import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import "./App.css";
import Menu from "./components/Menu";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import ViewMenu from "./components/ViewMenu";
import Reservations from "./components/Reservations";

const App = () => {
  return (
    <div id="home" className="bg-pink-50">
      <Navbar />
      <Main />
      <About />
      <Menu />
      <ViewMenu />
      <Testimonials />
      <Gallery />
      <Reservations />
      <Contact />
    </div>
  );
};

export default App;
