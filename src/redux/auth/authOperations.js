import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {  toast } from 'react-toastify';

axios.defaults.baseURL = 'https://soyummy-tw3y.onrender.com/api/v1';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (user, { rejectWithValue }) => {
    try {
      const {data} = await axios.post('/auth/register', user);
      if(data?.code === 200) {
        toast.error(data.message);
        return rejectWithValue(data.message);
      }
      token.set(data.token);
      return data;
    } catch (error) {
      toast.error('Oops, something wrong')
      return rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (user, { rejectWithValue }) => {
    try {
      const {data} = await axios.post('/auth/login', user);
      if(data?.code === 200) {
        toast.error(data.message);
        return rejectWithValue(data.message);
      }
      token.set(data.token);
      return data;
    } catch (error) {
      toast.error('Oops, something wrong')
      return rejectWithValue(error.message);
    }
  }
);
export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/auth/logout');
      token.unset();
      return data;
    } catch (error) {
      toast.error('Oops, something wrong')
      return rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) return thunkAPI.rejectWithValue();

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/auth/current');
      if(data?.code === 200) {
        return thunkAPI.rejectWithValue(data.message);
      }
      return data;
    } catch (error) {
      toast.error('Oops, something wrong')
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const updateAvatar = createAsyncThunk(
  'auth/avatar',
  async (avatar, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch('/auth/user/avatar', avatar);
      return data;
    } catch (error) {
      toast.error('Oops, something wrong')
      return rejectWithValue(error.message);
    }
  }
);
export const updateInfo = createAsyncThunk(
  'auth/update',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.put('/auth/user/update', user);
      const {name, email } = data;
      return { name, email };

    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
