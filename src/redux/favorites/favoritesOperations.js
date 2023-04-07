import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// GET
export const fetchFavorites = createAsyncThunk(
  'favorites/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/favorites');
      return res.data;
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
      const response = await axios.post('/favorites', { _id: recipeId });
      console.log(response.data);
      return response.data;
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
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
