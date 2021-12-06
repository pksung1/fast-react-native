import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface GlobalState {
  loading: boolean;
}

const initialState: GlobalState = {
  loading: false,
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<{loading: boolean}>) {
      state.loading = action.payload.loading;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setLoading} = globalSlice.actions;

export default globalSlice.reducer;
