const intialState = {
  id: null,
};

const userId = (state = intialState, action) => {
  switch (action.type) {
    case "SET": {
      return {
        ...state,
        ...action.id,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default userId;
