import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { verifyAuth } from "./auth/actions/index";
import rootReducer from "./auth/reducers";

export default function configureStore() {
  const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
  store.dispatch(verifyAuth());
  return store;
}
