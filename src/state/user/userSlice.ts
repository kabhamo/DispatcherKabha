import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store';

// Define a type for the slice state
interface UserState {
    value: {
        //name: string,
        email: string,
        //password: string,
        isLoggedIn: boolean
    }
}

// Define the initial state using that type
const initialState: UserState = {
    value: {
        //name: "",
        email: "",
        //password: "",
        isLoggedIn: false
    }
}

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    updateUserAction: (state, action: PayloadAction<UserState>) => {
        state.value = action.payload.value
        //  state.value.email = action.payload.
      }
  }
})

export const {  updateUserAction } = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
//export const selectCount = (state: RootState) => state.user.value

export default userSlice.reducer