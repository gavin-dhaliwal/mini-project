import {applyMiddleware, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/index';

export default configureStore = () => {
  const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
  return store;
};
