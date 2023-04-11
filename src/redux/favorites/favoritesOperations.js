import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// GET
export const fetchFavorites = createAsyncThunk(
  'favorites/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/favorites');
      const { data } = res.data;

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// POST;
export const addFavorite = createAsyncThunk(
  'favorites/addFavorites',
  async (recipeId, thunkAPI) => {
    try {
      const res = await axios.post('/favorites', { _id: recipeId });
      const { data } = res.data;
      console.log('response add', data[0]);
      return data[0];
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// DELETE
export const deleteFavorite = createAsyncThunk(
  'favorites/deleteFavorite',
  async (id, thunkAPI) => {
    try {
      const res = await axios.delete(`/favorites/${id}`);
      const { data } = res.data;

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
