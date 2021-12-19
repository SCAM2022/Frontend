const SelectOption = (props) => {
  const { text, setOption, setOpen, setValue } = props;
  const handleSelection = () => {
    setOption(text);
    setOpen(false);
    setValue(text);
  };
  return <li onClick={handleSelection}> {text}</li>;
};

export default SelectOption;
