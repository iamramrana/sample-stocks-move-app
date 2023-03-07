import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../store';

export type stockType = {
        company: string,
        ticker: string,
        stockPrice: string,
        timeElapsed: string,
      
}
export interface stocksListState {
  list1:stockType[];
  list2:stockType[];
}

const initialState: stocksListState = {
  list1:[
    {
      company: "Twitter Inc",
      ticker: "TWTR",
      stockPrice: "22.76 USD",
      timeElapsed: "5 sec ago",
    },
    {
      company: "Square Inc",
      ticker: "SQ",
      stockPrice: "45.28 USD",
      timeElapsed: "10 sec ago",
    },
    {
      company: "Shopify Inc",
      ticker: "SHOP",
      stockPrice: "341.79 USD",
      timeElapsed: "3 sec ago",
    },
    {
      company: "Sunrun Inc",
      ticker: "RUN",
      stockPrice: "9.87 USD",
      timeElapsed: "4 sec ago",
    },
    {
      company: "Adobe Inc",
      ticker: "ADBE",
      stockPrice: "300.99 USD",
      timeElapsed: "10 sec ago",
    },
    {
      company: "HubSpot Inc",
      ticker: "HUBS",
      stockPrice: "115.22 USD",
      timeElapsed: "12 sec ago",
    },
  ],
  list2:[]
};


export const stocksListSlice = createSlice({
  name: 'stocksList',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    move:(state,action:PayloadAction<stockType>)=>{
       state.list1 =  state.list1.filter((item)=> item.ticker !== action.payload.ticker);
       state.list2= [...state.list2,action.payload];
    },
    moveItemBack:(state,action:PayloadAction<stockType>)=>{
      state.list2 =  state.list2.filter((item)=> item.ticker !== action.payload.ticker);
      state.list1= [...state.list1,action.payload];
    }
  },

});

export const { move,moveItemBack } = stocksListSlice.actions;

export const selectFirstList = (state: RootState) => state.stocksList.list1;
export const selectSecondList = (state: RootState) => state.stocksList.list2;

export default stocksListSlice.reducer;
