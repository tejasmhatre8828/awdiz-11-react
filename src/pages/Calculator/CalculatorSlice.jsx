// calculatorSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  current: '0',
  previous: null,
  operator: null,
  overwrite: false,
};

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    inputDigit: (state, action) => {
      if (state.overwrite) {
        state.current = action.payload;
        state.overwrite = false;
      } else {
        state.current = state.current === '0' ? action.payload : state.current + action.payload;
      }
    },
    chooseOperator: (state, action) => {
      if (state.previous == null) {
        state.previous = state.current;
      } else if (!state.overwrite) {
        const result = eval(`${state.previous} ${state.operator} ${state.current}`);
        state.previous = result.toString();
      }
      state.operator = action.payload;
      state.overwrite = true;
    },
    calculate: (state) => {
      if (state.operator && state.previous !== null) {
        const result = eval(`${state.previous} ${state.operator} ${state.current}`);
        state.current = result.toString();
        state.previous = null;
        state.operator = null;
        state.overwrite = true;
      }
    },
    clear: (state) => {
      state.current = '0';
      state.previous = null;
      state.operator = null;
      state.overwrite = false;
    },
    percent: (state) => {
      const currentNum = parseFloat(state.current);
      if (!isNaN(currentNum)) {
        state.current = (currentNum / 100).toString();
        state.overwrite = true;
      }
    }
  },
});

export const { inputDigit, chooseOperator, calculate, clear, percent } = calculatorSlice.actions;
export default calculatorSlice.reducer;
