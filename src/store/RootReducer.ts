import { combineReducers } from '@reduxjs/toolkit';
import sessionReducer from './slices/sessionSlice';
import userProfileReducer from './slices/userProfileSlice';
import restaurantFormReducer from './slices/restaurantFormSlice';

const rootReducer = combineReducers({
  session: sessionReducer,
  userProfile: userProfileReducer,
  restaurantForm: restaurantFormReducer,
});

export default rootReducer;
