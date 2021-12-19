import { useState } from "react";

import classes from "./TextField.module.css";

function TextField(props) {
  const { label, name, placeholder, type, value, setValue, isDisabled } = props;
  const [drop, setDrop] = useState(false);
  const curYear = new Date().getFullYear();
  return (
    <div className={classes["form__control__signup"]}>
      <label htmlFor={name}>{label}</label>
      <div className={classes["div__input__box"]}>
        {name === "year" || name === "admission-year" ? (
          <input
            placeholder={placeholder}
            type="number"
            id={name}
            value={value}
            // defaultValue={curYear}
            min={1000}
            max={9999}
            onChange={(e) => setValue(e.target.value)}
            // onClick={setDrop((prev) => !prev)}
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
        {(name === "Year" || name === "admission-year") && drop && (
          <div
            className={classes["select"]}
            disabled={isDisabled && true}
          ></div>
        )}
      </div>
    </div>
  );
}

export default TextField;
