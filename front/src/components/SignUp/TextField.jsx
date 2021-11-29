import React, { useEffect } from "react";

import classes from "./TextField.module.css";

function TextField(props) {
  const { label, name, placeholder, type, value, setValue, isDisabled } = props;
  const [dialCode, setDialCode] = React.useState("353");
  const [drop, setDrop] = React.useState(false);
  const [countryCode, setCountryCode] = React.useState("IE");

  let phoneN = "";

  return (
    <div className={classes["form__control__signup"]}>
      <label htmlFor={name}>{label}</label>
      <div className={classes["div__input__box"]}>
        {name === "mobile" && (
          <div className={classes["country__flag__wrapper"]}>
            <div
              className={classes["flag__container"]}
              onClick={() => {
                if (isDisabled) return null;
                setDrop(!drop);
              }}
            >
              {/* <img src={} alt="flag__icon" /> */}
            </div>
            <span className={classes["country__code"]}>+{dialCode}</span>
          </div>
        )}
        {name === "mobile" || name === "contactNumber" ? (
          <input
            country={countryCode}
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
