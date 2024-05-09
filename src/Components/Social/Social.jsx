import React from "react";
import cl from "./Social.module.css";
// import Container from "../Container/Container";
import EndLogo from "../UI/logo/EndLogo";
import Instagram from "../UI/Instagram/Instagram";
import Telegram from "../UI/Telegram/Telegram";
import TikTok from "../UI/TikTok/TikTok";
import Facebook from "../UI/Facebook/Facebook";
import { Link } from "react-router-dom";
import MyLink from "../MyLink/MyLink";
import { Box, Container, Grid, Typography } from "@mui/material";

const Social = () => {
   const socialData = [
      {
         title: "Instagram",
         component: <Instagram />,
         href: "https://instagram.com/easydesign.md?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D",
      },
      {
         title: "Telegram",
         component: <Telegram />,
         href: "https://t.me/easydesignmd",
      },
      {
         title: "TikTok",
         component: <TikTok />,
         href: "https://www.tiktok.com/@_easydesign?_t=8eXVZAABa4s&_r=1",
      },
      {
         title: "Facebook",
         component: <Facebook />,
         href: "https://www.facebook.com/profile.php?id=100091770320782&mibextid=ZbWKwL",
      },
   ];

   return (
      <div>
         <Container>
            <Grid container columns={12} spacing={{ xs: 10, sm: 4 }}>
               {socialData.map((element, key) => {
                  return (
                     <Grid
                        item
                        key={key}
                        md={3}
                        sm={6}
                        xs={12}
                        sx={{ display: "flex", justifyContent: "center" }}
                     >
                        <MyLink href={element.href} target="_blank">
                           <div className={cl.container}>
                              <div className={cl.title}>{element.title}</div>
                              <div className={cl.icon}>{element.component}</div>
                              <div className={cl.link}>
                                 <a href={element.href} target="_blank">
                                    @easydesign
                                 </a>
                              </div>
                           </div>
                        </MyLink>
                     </Grid>
                  );
               })}
            </Grid>
         </Container>
         <div className={cl.logo}>
            <Link to="/home">
               <EndLogo />
            </Link>
         </div>
      </div>
   );
};

export default Social;
