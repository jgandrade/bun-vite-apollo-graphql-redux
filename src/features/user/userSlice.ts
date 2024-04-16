import { createSlice } from '@reduxjs/toolkit';

export interface InitialStateType {
  state: {
    isFetching: boolean;
  };
  user: {
    name: string;
    isAuthenticated: boolean;
  };
}

const initialState: InitialStateType = {
  state: {
    isFetching: false,
  },
  user: {
    name: 'john',
    isAuthenticated: false,
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsFetching: (fromState) => ({
      ...fromState,
      state: {
        ...fromState.state,
        isFetching: false,
      },
    }),
  },
});

export const { setIsFetching } = userSlice.actions;

export default userSlice.reducer;
