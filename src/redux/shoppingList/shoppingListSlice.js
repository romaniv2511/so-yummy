import {
  fetchShoppingList,
  addToShoppingList,
  deleteToShoppingList,
} from './shoppingListOperations';
import { createSlice } from '@reduxjs/toolkit';
const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState: {
    items: [],
    status: '',
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchShoppingList.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchShoppingList.fulfilled, (state, { payload }) => {
        state.status = 'succeeded';
        state.items = payload;
      })
      .addCase(fetchShoppingList.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload;
      })
      .addCase(addToShoppingList.pending, state => {
        state.status = 'loading';
      })
      .addCase(addToShoppingList.fulfilled, (state, { payload }) => {
        state.status = 'succeeded';
      })
      .addCase(addToShoppingList.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload;
      });
    builder.addCase(deleteToShoppingList.pending, state => {
      state.status = 'loading';
    });
    builder.addCase(deleteToShoppingList.fulfilled, (state, action) => {
      if (Array.isArray(state.items)) {
        const removedItemIndex = state.items.findIndex(
          item => item._id === action.payload._id
        );
        if (removedItemIndex !== -1) {
          state.items.splice(removedItemIndex, 1);
        }
        state.status = 'succeeded';
      }
    });
    builder.addCase(deleteToShoppingList.rejected, (state, action) => {
      state.error = action.payload;
      state.status = 'failed';
    });
  },
});

export const shoppingListReducer = shoppingListSlice.reducer;
