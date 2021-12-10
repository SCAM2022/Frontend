import React, { useEffect } from "react";

import classes from "./TextField.module.css";

function TextField(props) {
  const { label, name, placeholder, type, value, setValue, isDisabled } = props;
  const [drop, setDrop] = React.useState(false);

  return (
    <div className={classes["form__control__signup"]}>
      <label htmlFor={name}>{label}</label>
      <div className={classes["div__input__box"]}>
        {name === "mobile" || name === "contactNumber" ? (
          <input
            placeholder="Enter phone number"
            value={value}
            onChange={setValue}
            disabled={isDisabled && true}
          />
        ) : (
          <input
            type={type}
            name={name}
            id={name}
            placeholder={placeholder}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            disabled={isDisabled && true}
          />
        )}
        {name === "mobile" && drop && (
          <div
            className={classes["country__select__list"]}
            disabled={isDisabled && true}
          ></div>
        )}
      </div>
    </div>
  );
}

export default TextField;
