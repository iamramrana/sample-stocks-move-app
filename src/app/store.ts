import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import stocksListReducer from './features/stocksListSlice';

export const store = configureStore({
  reducer: {
    stocksList: stocksListReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
