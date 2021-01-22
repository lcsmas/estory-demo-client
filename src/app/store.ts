import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import connectedReducer from '../features/navigation-bar/NavBarSlice';
import timelineListReduder from '../features/timeline-list/TimelineListSlice';
import { Timeline_Interface } from '../interfaces/Timeline.interface';

export interface State {
  counter: number;
  connected: boolean;
  timelines: Timeline_Interface[];
}

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    connected: connectedReducer,
    timelines: timelineListReduder,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
