import React, { useState } from "react";
import cl from "./About.module.css";
import Container from "../../Components/Container/Container";
import { CSSTransition } from "react-transition-group";
import images from "../../actions/getImage.js";
import Social from "../../Components/Social/Social";
import './animation.css'
const About = () => {
   const [show, setShow] = useState(false);
   setTimeout(() => {
      setShow(true);
   }, 200);

   return (
    // body
      <div>
         <div className={cl.section}>
            <Container>
               <div className={cl.section__inner}>
                  <div className={cl.content}>
                     <CSSTransition
                        in={show}
                        classNames="content"
                        timeout={1000}
                        unmountOnExit
                     >
                        <>
                           <div className={cl.title}>Cine suntem noi</div>
                        </>
                     </CSSTransition>
                  </div>
               </div>
            </Container>
         </div>

         <div id={cl.section} className={cl.section}>
            <Container>
               <div className={cl.section__inner}>
                  <div className={cl.title_2}><div>Despre</div><div>„EasyDesign”</div></div>
                  <div className={cl.info}>
                     <div className={cl.theme}>{images.aboutUsTheme_1()}</div>
                     <div className={cl.separator}></div>
                     <div className={cl.text}>
                        <div className={cl.green}>Noi</div>, echipa „Easy
                        Design”, suntem un grup de{" "}
                        <div className={cl.azure}>profesioniști</div> care îți
                        pot crea <div className={cl.red}>totul</div> începând
                        cu <div className={cl.green}>logo</div> și terminând cu{" "}
                        <div className={cl.azure}>site-ul tău web</div>. <br />
                        <br />
                        Procesul de <div className={cl.yellow}>creare</div> se
                        desfașoara cu multă{" "}
                        <div className={cl.green}>dedicație</div> și{" "}
                        <div className={cl.azure}>atenție</div> pentru detalii.{" "}
                        <br />
                        <br />
                        Nimic nu este ignorat, iar informția furnizată de{" "}
                        <div className={cl.azure}>client</div> este utilizată la{" "}
                        <div className={cl.green}>maxim</div>.
                     </div>
                  </div>
               </div>
            </Container>
         </div>
          <Social/>
      </div>//Body
   );
};

export default About;
