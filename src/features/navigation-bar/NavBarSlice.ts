import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface navBarState {
  value: boolean;
}

const initialState: navBarState = {
  value: false,
};

export const navBarSlice = createSlice({
  name: 'navBar',
  initialState,
  reducers: {
    connect: (state) => {
      state.value = true;
    },
    disconnect: (state) => {
      state.value = false;
    },
  },
});

export const { connect, disconnect } = navBarSlice.actions;

export const selectConnect = (state: RootState) => state.connected.value;

export default navBarSlice.reducer;
