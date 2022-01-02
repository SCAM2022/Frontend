const intialState = {
  userInfo: null,
};

const SignupReducer = (state = intialState, action) => {
  switch (action.type) {
    // case "PAGE_ONE":
    //   return {
    //     ...state,
    //     pageOne: action.pageOne,
    //   };

    // case "PAGE_TWO": {
    //   return {
    //     ...state,
    //     pageTwo: action.pageTwo,
    //   };
    // }

    // case "PAGE_THREE": {
    //   return {
    //     ...state,
    //     pageThree: action.pageThree,
    //   };
    // }
    // case "SET": {
    //   return {
    //     ...state,
    //     ...action.userInfo,
    //   };
    // }
    default:
      return {
        ...state,
      };
  }
};

export default SignupReducer;
