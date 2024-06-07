import { createSlice } from '@reduxjs/toolkit';

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    betAmount: 100,
    betType: '7down',
    result: null,
    loading: false,
    points: 5000,
  },
  reducers: {
    setBetAmount: (state, action) => {
      state.betAmount = action.payload;
    },
    setSelectedOption: (state, action) => {
      state.betType = action.payload;
    },
    setResult: (state, action) => {
      state.result = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    updatePoints: (state, action) => {
      state.points = action.payload;
    },
  },
});

export const { setBetAmount, setSelectedOption, setResult, setLoading, updatePoints } = gameSlice.actions;

export default gameSlice.reducer;
