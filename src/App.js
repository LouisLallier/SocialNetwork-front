import { Routes, Route } from "react-router-dom";
import Page1 from "./components/page1";
import Page2 from "./components/page2";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="font-chivo border-0 outline-0 box-border list-none no-underline">
        {/* React, Materiel ui, react-html2pdg*/}

        {/* colone de gauche*/}
        {/* détails perso - User */}
        {/* competences - skills */}
        {/* langues - skills */}
        {/* interest */}

        {/* colone de droite */}
        {/* profil */}
        {/* formations */}
        {/* exp */}
        {/* light/dark mode */}
        {/* pdf */}
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />

        <Routes>
          <Route>
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
