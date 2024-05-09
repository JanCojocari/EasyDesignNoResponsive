import React, { useState } from "react";
import cl from "./Home.module.css";
import Container from "../../Components/Container/Container";
import Social from "../../Components/Social/Social";
import { CSSTransition } from "react-transition-group";
import "./animation.css";

const Home = () => {
   const [show, setShow] = useState(false);
   setTimeout(() => {
      setShow(true);
   }, 200);
   return (
      <div>
         <section id={cl.first_section} className={cl.section}>
            <Container>
               <div className={cl.section__inner}>
                  <div className={cl.content}>
                     <CSSTransition
                        in={show}
                        classNames="title"
                        timeout={1000}
                        unmountOnExit
                     >
                        <div>
                           <div className={cl.title}>
                              Visele devin realitate
                           </div>
                           <div className={cl.sub_title}>
                              “Puterea imaginației ne face Infiniți." - John
                              Muir
                           </div>
                        </div>
                     </CSSTransition>
                  </div>
               </div>
            </Container>
         </section>

         <section className={cl.section}>
            <Container>
               <div className={cl.section__inner}>
                  <div className={cl.theme_content}>
                     <div className={cl.theme}>Logo Design</div>
                     <div className={cl.separator}></div>
                     <div className={cl.theme_block}>
                        <div className={cl.logo}>Logo</div> este ceea ce îmbină
                        în sine toate aspectele afacerii tale. El trebuie sa fie{" "}
                        <div className={cl.distinct}>distinct</div>,{" "}
                        <div className={cl.memorabil}>memorabil </div> și{" "}
                        <div className={cl.atractiv}>atractiv</div>
                     </div>
                  </div>
               </div>
            </Container>
         </section>

         <section className={cl.section}>
            <Container>
               <div className={cl.section__inner}>
                  <div className={cl.theme_content}>
                     <div className={cl.theme_block_2}>
                        Un <div className={cl.logo}>website</div>, este imaginea{" "}
                        <div className={cl.memorabil}>companiei</div> tale, iar
                        noi o putem face{" "}
                        <div className={cl.fantastica}>fantastică</div>.<br />
                        <br />O întâlnire{" "}
                        <div className={cl.distinct}>online</div> este de ajuns
                        pentru a înțelege care este{" "}
                        <div className={cl.atractiv}>rezultatul</div> așteptat
                     </div>
                     <div className={cl.separator}></div>
                     <div className={cl.theme_2}>
                        <div className={cl.web}>Web</div> Design
                     </div>
                  </div>
               </div>
            </Container>
         </section>
         <Social />
      </div>
   );
};

export default Home;
