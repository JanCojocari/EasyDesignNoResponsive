import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import About from "./Pages/AboutUs/About";
import Contact from "./Pages/Contact/Contact";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";

function App() {
   const [show, setShow] = useState(false);
   setTimeout(() => {
      setShow(true);
   }, 100);

   return (
      <CSSTransition
      classNames="body"
      timeout={1000}
      in={show}
      unmountOnExit
      >
         <div style={{ paddingTop: "50px" }}>
            <Router>
               <Header />
               <Routes>
                  <Route path="/home" element={<Home />}></Route>
                  <Route path="/aboutus" element={<About />}></Route>
                  <Route path="/contact" element={<Contact />}></Route>
                  <Route path="/*" element={<Home />}></Route>
               </Routes>
            </Router>
         </div>
      </CSSTransition>
   );
}

export default App;
