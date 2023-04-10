import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { logIn, register, logOut, refreshUser, updateAvatar, updateInfo } from './authOperations';

const persistConfig = {
  key: 'auth',
  storage: storage,
  whitelist: ['token'],
};
const handlePending = (state) => {
  state.isLoading = true;
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
    [logIn.pending]: handlePending,
    [logIn.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [logOut.pending]: handlePending,
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null, avatarURL: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, { payload }) {
      console.log(payload);
      state.user = payload.user;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
    [updateAvatar.pending]: handlePending,
    [updateAvatar.fulfilled](state, { payload }) {
      state.user.avatar = payload.avatarURL;
      state.isLoading = false;
    },
    [updateInfo.pending]: handlePending,
    [updateInfo.fulfilled](state, { payload }) {
      console.log(payload);
      state.user = {...state.user, ...payload};
      state.isLoading = false;
      console.log(state.user);
    }
  },
});

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
