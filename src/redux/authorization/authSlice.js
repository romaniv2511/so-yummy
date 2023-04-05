import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const getActions = (extraActions, type) => extraActions.map(action => action[type]);

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

const extraActions = [register, logIn, logOut];

const reducerPending = state => {
  return { ...state, isLoading: true };
};

const reducerRejected = (state, action) => {
  return { ...state, isLoading: false, error: action.payload };
};

const registerFulfilledReducer = (state, action) => {
  return {
    ...state,
    user: action.payload.user,
    token: action.payload.token,
    isLoading: false,
    isLoggedIn: true,
  };
};

const logInFulfilledReducer = (state, action) => {
  return {
    ...state,
    user: action.payload.user,
    token: action.payload.token,
    isLoading: false,
    isLoggedIn: true,
  };
};

const logOutFulfilledReducer = state => {
  return {
    ...state,
    user: { name: null, email: null },
    token: null,
    isLoading: false,
    isLoggedIn: false,
  };
};

const refreshUserPendingReducer = state => {
  return { ...state, isRefreshing: true };
};

const refreshUserFulfilledReducer = (state, action) => {
  return {
    ...state,
    user: action.payload,
    isLoggedIn: true,
    isRefreshing: false,
  };
};

const refreshUserRejectedReducer = state => {
  return { ...state, isRefreshing: false };
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, registerFulfilledReducer)
      .addCase(logIn.fulfilled, logInFulfilledReducer)
      .addCase(logOut.fulfilled, logOutFulfilledReducer)
      .addCase(refreshUser.pending, refreshUserPendingReducer)
      .addCase(refreshUser.fulfilled, refreshUserFulfilledReducer)
      .addCase(refreshUser.rejected, refreshUserRejectedReducer)
      .addMatcher(isAnyOf(...getActions(extraActions, 'pending')), reducerPending)
      .addMatcher(isAnyOf(...getActions(extraActions, 'rejected')), reducerRejected);
  },
});

export const authReducer = authSlice.reducer;
