import "./App.css";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portforlio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Industry from "./components/industry/Industry";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Services />
      <Industry />
      <Testimonials />
      <Experience />

      <Portfolio />

      <Contact />
      <Footer />
    </>
  );
}

export default App;
