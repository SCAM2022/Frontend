import { useState } from "react";
import SelectOption from "./SelectOption";
import classes from "./SelectField.module.css";

const SelectField = ({ value, setValue, placeholder, label, options }) => {
  const [isOpen, setOpen] = useState(false);
  const [option, setOption] = useState(placeholder);

  return (
    <div className={classes["form__control__signup"]}>
      <label htmlFor="label">{label}</label>
      <div
        className={classes["custom__select"]}
        onClick={(e) => setOpen(isOpen ? false : true)}
      >
        <span
          className={`${classes["selected__item__signup"]} ${
            !value && classes["selected__item__selected"]
          }`}
        >
          {value ? value : option}
        </span>

        <span
          className={`${classes["select__arrow"]} ${
            isOpen && classes["arrow__up"]
          }`}
        ></span>
        <ul
          className={`${classes["dropdown__options"]} ${
            isOpen && classes["dropdown__enable"]
          }`}
        >
          {options?.map((item, index) => (
            <SelectOption
              text={item.name?.toUpperCase()}
              key={index}
              setOption={setOption}
              setOpen={setOpen}
              setValue={setValue}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SelectField;
