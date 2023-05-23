import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getMeal = createAsyncThunk("getMeal", async () => {
  const response = await fetch(
    // `https://www.themealdb.com/api/json/v1/1/search.php?s`
    "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
    // "https://www.themealdb.com/api/json/v1/1/search.php?s=Apple&Blackberry"
    // "https://www.themealdb.com/api/json/v1/1/search.php?s="
    // "https://api.edamam.com/doc/open-api/recipe-book-v1.json"
  );
  // console.log("response", response);
  return response.json();

});
const mealSlice = createSlice({
  name: "meal",
  initialState: {
    cart: [],
    isLoading: false,
    data: null,
    isError: false,
  },
  reducers: {
    addToCart: (state, action) => {
      // state.meal.push({ ...action.payload, quantity: 1 });
      // console.log("state", state);
      console.log("action", action);
      const itemsInCart = state.cart.find((item) => item === action.payload);
      if (itemsInCart) {
        itemsInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },

    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id == action.payload);
      console.log("increment", action.payload);
      item.quantity++;
      // action.payload.quantity++;
      console.log("increment", item.quantity);
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item.id !== action.payload
      );
      state.cart = removeItem;
    },
    addFavorite: (state, action) => {
      console.log("favoriteItem", action);
      const item = action.payload;
      state.cart.push(item);
    },
    removeFavorite: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item.cart !== action.payload
      );
      state.cart = removeItem;
    },
    setSearchQuery: (state, action) => {
      // const item = action.payload;
      // state.cart.push(item);
      
      // const item = action.payload;
      // state.cart.push(item);
      // console.log("get",item );
      state.data = action.payload;
      console.log("SearchItem", action);
      return state;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getMeal.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getMeal.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getMeal.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});
export default mealSlice.reducer;
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  addFavorite,
  removeFavorite,
  setSearchQuery
} = mealSlice.actions;

// addItems: (state, action) => {
//   state.meal?.push(action.payload);
//   // console.log("addItems",meal);
// },
