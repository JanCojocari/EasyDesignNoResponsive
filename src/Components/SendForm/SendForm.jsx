import React, { useState } from "react";
import { useForm } from "react-hook-form";

import sendData from "../../actions/sendData";
import cl from "./SendForm.module.css";
import MyCheckBox from "../MyCheckBox/MyCheckBox";
const SendForm = () => {
   const [numePrenume, setNumePrenume] = useState("");
   const [email, setEmail] = useState("");
   const [logo, setLogo] = useState(false);
   const [visitCard, setVisitCard] = useState(false);
   const [sticker, setSticker] = useState(false);
   const [webSite, setWebSite] = useState(false);
   const [text, setText] = useState("");

   function send(data) {
      const callback = () => {
         setEmail("");
         setNumePrenume("");
         setText("");
      };
      sendData(data, callback);
   }

   const {
      register,
      handleSubmit,
      setValue,
      formState: { errors },
   } = useForm({
      mode: "onChange",
      defaultValues: {
         logo: false,
         sticker: false,
         website: false,
         visitcard: false,
      },
   });
   return (
      <div className={cl.the_form}>
         <form className="tg" name="tg_post" onSubmit={handleSubmit(send)}>
            {/* email */}
            <div name="form_block" className={cl.form_block}>
               <div name="first_part" className={cl.firstPart_form}>
                  <input
                     value={email}
                     className={cl.input}
                     {...register("email", {
                        required: "(Introduceți adresa de email)",
                        pattern: {
                           value: /^((([0-9A-Za-z]{1}[-0-9A-z.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}.){1,2}[-A-Za-z]{2,})$/u,
                           message: "(the symbol @ is required)",
                        },
                     })}
                     onChange={(e) => {
                        setEmail(e.target.value);
                        setValue("email", e.target.value);
                     }}
                     placeholder="Email:"
                  />
                  {errors?.email && (
                     <div className={cl.error}>{errors.email.message}</div>
                  )}

                  {/* numePrenume */}

                  <input
                     value={numePrenume}
                     className={cl.input}
                     placeholder="Nume Prenume:"
                     {...register("numeprenume", {
                        required: "(Introdu numele și prenumele)",
                        minLength: {
                           message: "(Numele și/sau prenumele este prea scurt)",
                           value: 8,
                        },
                     })}
                     onChange={(e) => {
                        setNumePrenume(e.target.value);
                        setValue("numeprenume", e.target.vlue);
                     }}
                  />
                  {errors?.numeprenume && (
                     <div className={cl.error}>
                        {errors.numeprenume.message}
                     </div>
                  )}
                  {/* text area */}
                  <textarea
                     value={text}
                     {...register("text")}
                     className={cl.textArea}
                     placeholder="Scrie aici mesajul tău"
                     onChange={(e) => {
                        setText(e.target.value);
                        setValue("text", e.target.value);
                     }}
                  ></textarea>
               </div>

               <div className={cl.separator}></div>

               {/* a doua parte */}

               <div className={cl.secondPart_form}>
                  <div className={cl.secondPart_title}>
                     Alege produsul/produsele:
                  </div>

                  <div className={cl.checkBox_section}>
                     <MyCheckBox
                        name={"website"}
                        id={"website"}
                        value={webSite}
                        {...register("website")}
                        onChange={(e) => {
                           setWebSite(e.target.checked);
                           setValue("website", e.target.checked);
                        }}
                     >
                        WebSite
                     </MyCheckBox>

                     <MyCheckBox
                        {...register("logo")}
                        name={"logo"}
                        id={"logo"}
                        value={logo}
                        onChange={(e) => {
                           setLogo(e.target.checked);
                           setValue("logo", e.target.checked);
                        }}
                     >
                        Logo
                     </MyCheckBox>

                     <MyCheckBox
                        {...register("visitcard")}
                        name={"visitcard"}
                        id={"visitcard"}
                        value={visitCard}
                        onChange={(e) => {
                           setVisitCard(e.target.checked);
                           setValue("visitcard", e.target.checked);
                        }}
                     >
                        Visit Card
                     </MyCheckBox>

                     <MyCheckBox
                        {...register("sticker")}
                        checked={!sticker}
                        name={"sticker"}
                        id={"sticker"}
                        value={sticker}
                        onChange={(e) => {
                           setSticker(e.target.checked);
                           setValue("sticker", e.target.checked);
                        }}
                     >
                        Sticker
                     </MyCheckBox>
                  </div>
               </div>
            </div>
            <button type="submit">Trimite</button>
         </form>
      </div>
   );
};

export default SendForm;
