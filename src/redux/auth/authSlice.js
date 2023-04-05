import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { logIn, register, logOut, refreshUser } from './authOperations';

const persistConfig = {
  key: 'auth',
  storage: storage,
  whitelist: ['token'],
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null, avatarURL: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: {
    [register.fulfilled](state, { payload }) {
      state.user.name = payload.name;
      state.user.email = payload.email;
      state.user.avatarURL = payload.avatarURL;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, { payload }) {
      state.user.name = payload.name;
      state.user.email = payload.email;
      state.user.avatarURL = payload.avatarURL;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null, avatarURL: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
