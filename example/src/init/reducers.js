import { combineReducers } from 'redux';
import demo from 'features/demo/reducers';


const rootReducer = combineReducers({
  demo,
});

export default rootReducer;
