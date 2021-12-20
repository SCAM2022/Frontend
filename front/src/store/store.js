import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import SignupReducer from "../reducers/SignupReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [thunk];

// const store = () => {
//   return createStore(
//     combineReducers({ signUpReducer: SignupReducer }),
//     composeEnhancers(applyMiddleware(...middlewares))
//   );
// };

// export default store;

const configureStore = () => {
  const store = createStore(
    combineReducers({ signUpReducer: SignupReducer }),

    composeEnhancers(applyMiddleware(...middlewares))
  );
  return store;
};

export default configureStore;
