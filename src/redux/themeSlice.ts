import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ThemeState {
  darkThemeEnabled: boolean;
}

const initialState: ThemeState = {
  darkThemeEnabled: false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkThemeEnabled = !state.darkThemeEnabled;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
