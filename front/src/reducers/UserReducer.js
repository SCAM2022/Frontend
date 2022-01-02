const intialState = {
  userData: null,
};

const userReducer = (state = intialState, action) => {
  switch (action.type) {
    case "SET": {
      console.log("state update", action);

      return {
        ...state,
        userData: { ...action.userInfo },
      };
    }
    case "UNSET": {
      return {
        data: null,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
