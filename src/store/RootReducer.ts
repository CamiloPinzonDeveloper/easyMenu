import { combineReducers } from '@reduxjs/toolkit';
import sessionReducer from './slices/sessionSlice';
import userProfileReducer from './slices/userProfileSlice';

const rootReducer = combineReducers({
  session: sessionReducer,
  userProfile: userProfileReducer,
});

export default rootReducer;
