export const setUser = (userInfo) => {
  return {
    type: "SET",
    userInfo,
  };
};

export const unsetUser = () => {
  return {
    type: "UNSET",
  };
};
