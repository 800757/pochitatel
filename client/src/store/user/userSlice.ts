import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { IUser } from '../../types/types'

interface UserState {
  user: IUser | null
  isAuth: boolean
}

const initialState: UserState = {
  user: null,
  isAuth: true
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<IUser>) => {
        state.user=action.payload;
        state.isAuth = true;
        //console.log(state.isAuth);
    },
    logout: (state) => {
        state.isAuth = false;
        state.user = null;
        //console.log(state.isAuth);
    }
  },
})

export const { login, logout } = userSlice.actions

export const selectCount = (state: RootState) => state.user

export default userSlice.reducer