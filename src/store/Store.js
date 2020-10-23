import { createStore } from 'redux';

import  Reducer from '../reducers/Reducers';

const store = createStore(Reducer);
  
export default store;