import React, { useState } from "react";
import Social from "../../Components/Social/Social";
import cl from "./Contact.module.css";
import Container from "../../Components/Container/Container";
import SendForm from "../../Components/SendForm/SendForm";
import { CSSTransition } from "react-transition-group";
import "./animation.css";
const Contact = () => {
   const [show, setShow] = useState(false);
   setTimeout(() => {
      setShow(true);
   }, 200);

   return (
      <div>
         <section className={cl.section}>
            <Container>
               <div className={cl.section__inner}>
                  <div className={cl.content}>
                     <CSSTransition
                        timeout={1000}
                        in={show}
                        classNames="content"
                        unmountOnExit
                     >
                        <div className={cl.title}>Contactează-ne</div>
                     </CSSTransition>

                     <CSSTransition
                        timeout={1000}
                        in={show}
                        classNames="content"
                        unmountOnExit
                     >
                        <a href="tel:+37368669920" className={cl.phone_number}>
                           Tel: +373 68-66-99-20
                        </a>
                     </CSSTransition>
                  </div>
               </div>
            </Container>
         </section>

         <section className={cl.second__title__section}>
            <Container>
               <div className={cl.second__title__inner}>
                  <div className={cl.second_title}>Trimite un mesaj</div>
               </div>
            </Container>
         </section>

         <section id={cl.form_section}className={cl.section}>
            <Container>
               <SendForm/>
            </Container>
         </section>

         <Social />
      </div>
   );
};

export default Contact;
