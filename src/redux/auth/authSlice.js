import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { logIn, register, logOut, refreshUser, updateAvatar, updateInfo, getUserInfo } from './authOperations';

const persistConfig = {
  key: 'auth',
  storage: storage,
  whitelist: ['token'],
};
const handlePending = (state) => {
  state.isLoading = true;
};
const handleError = (state) => {
  state.isLoading = false;
}
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null, avatar: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: false,
  },

  extraReducers: {
    [register.pending]: handlePending,
    [register.fulfilled](state, { payload }) {
      state.user.name = payload.name;
      state.user.email = payload.email;
      state.user.avatarURL = payload.avatarURL;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [register.rejected]: handleError,
    [logIn.pending]: handlePending,
    [logIn.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [logIn.rejected]: handleError,
    [logOut.pending]: handlePending,
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null, avatarURL: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [logOut.rejected]: handleError,
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected] (state) {
      state.isRefreshing = false;
    },
    [updateAvatar.pending]: handlePending,
    [updateAvatar.fulfilled](state, { payload }) {
      state.user.avatar = payload.avatarURL;
      state.isLoading = false;
    },
    [updateAvatar.rejected]: handleError,
    [updateInfo.pending]: handlePending,
    [updateInfo.fulfilled](state, { payload }) {
      state.user = {...state.user, ...payload};
      state.isLoading = false;
    },
    [updateInfo.rejected]: handleError,
  },
    [getUserInfo.pending](state) {
      state.isRefreshing = true;
    },
    [getUserInfo.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [getUserInfo.rejected] (state) {
      state.isLoading = false;
    },
});

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
