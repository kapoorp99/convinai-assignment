import { configureStore } from '@reduxjs/toolkit'
import userSlice from './reducers/userSlice';
import usersSlice from './reducers/usersSlice';

const store = configureStore({
  reducer: {
    users: usersSlice,
    user:userSlice
  },
});

export default store