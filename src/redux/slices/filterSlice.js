import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  sort: {
    name: 'популярности',
    sortProperty: 'rating',
  },
  desc: false,
}


const filterSlice = createSlice ({
  name:'filters',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload

    },
    setSort(state, action) {
      state.sort = action.payload
    },

    setDesc (state, action) {
      state.desc = action.payload
    }
  }
})

export const {setCategoryId, setSort, setDesc} = filterSlice.actions;

export default filterSlice.reducer
