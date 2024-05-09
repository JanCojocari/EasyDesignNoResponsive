// import Container from "../Container/Container";
import Logo from "../UI/logo/Logo";
import cl from "./Header.module.css";
import {Link} from "react-router-dom";
import {Container, Typography} from '@mui/material'

import React from "react";

const Header = ({ children, ...props }) => {
   return (
      <div className={cl.header}>
         <Container>
            <div className={cl.header__inner}>
            <Link className={cl.home_button} to="/home"><Typography component={"span"}><Logo /></Typography></Link>
               <nav className={cl.nav_bar}>
                  <Link className={cl.link}  to="/home"><Typography variant="h5" component={"span"}>Home</Typography></Link>
                  <Link className={cl.link} to="/aboutus"><Typography variant="h5" component={"span"}>About</Typography></Link>
                  <Link className={cl.link} to="/contact"><Typography variant="h5" component={"span"}>Contact</Typography></Link>
               </nav>
            </div>
         </Container>
      </div>
   );
};

export default Header;
