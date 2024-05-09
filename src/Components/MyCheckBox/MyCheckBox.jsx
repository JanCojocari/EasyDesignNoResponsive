import React from "react";
import cl from "./MyCheckBox.module.css";
const MyCheckBox = ({ name, id, value, onChange, children }) => {
   return (
      <div className={cl.inputStyle}>
            <input
               className={cl.checkBox}
               type="checkbox"
               name={name}
               id={id}
               value={value}
               onChange={onChange}
               placeholder="A"
            />
         <label className={cl.label} htmlFor={name}>{children}</label>
      </div>
   );
};

export default MyCheckBox;
