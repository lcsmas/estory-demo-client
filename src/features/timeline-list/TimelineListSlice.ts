import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Timeline_Interface } from '../../interfaces/Timeline.interface';

const initialState: Timeline_Interface[] = [];

export const timelineListSlice = createSlice({
  name: 'timelineList',
  initialState: initialState as Timeline_Interface[],
  reducers: {
    addTimeline: (state, { payload }: PayloadAction<Timeline_Interface>) => {
      state.push(payload);
    },
    removeTimeline: (state, { payload }: PayloadAction<{ id: number }>) => {
      const index = state.findIndex((timeline) => Number(timeline.id) === payload.id);
      if (index !== -1) state.splice(index, 1);
    },
  },
});

export const {
  addTimeline: createTimelineActionCreator,
  removeTimeline: removeTimelineActionCreator,
} = timelineListSlice.actions;

export const selectTimelines = (state: RootState) => state.timelines;

export default timelineListSlice.reducer;
