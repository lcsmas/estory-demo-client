import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { AmazonItem_Interface } from '../../interfaces/AmazonItemsInterface.interface';

const initialState: AmazonItem_Interface[] = [];

export const relatedSourceSlice = createSlice({
  name: 'relatedSource',
  initialState: initialState as AmazonItem_Interface[],
  reducers: {
    add: (state, { payload }: PayloadAction<AmazonItem_Interface>) => {
      state.push(payload);
    },
    remove: (state, { payload }: PayloadAction<{ id: number }>) => {
      const index = state.findIndex((timeline) => Number(timeline.id) === payload.id);
      if (index !== -1) state.splice(index, 1);
    },
  },
});

export const { add, remove } = relatedSourceSlice;

export const selectTimelines = (state: RootState) => state.timelines;

export default timelineListSlice.reducer;
