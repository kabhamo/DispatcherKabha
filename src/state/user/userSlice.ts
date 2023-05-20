import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { UserCredential } from '../../util/types'
import { loginAndSetUserCredential } from '../../services/apiService'

interface Params {
    email: string;
    password: string;
 }
// First, create the thunk
export const fetchUserCredential = createAsyncThunk('userCredential/fetchUserCredential',
    async ({email, password} : Params, thunkAPI) => {
        await loginAndSetUserCredential(email, password)
        //return UserCredential;
    }
)
//! There is no need for return value 
//! the data is stored in asyncStorage not redux store 
// Define a type for the slice state
interface UserState {
    value: UserCredential;
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
    error: null;
}

// Define the initial state using that type
const initialState: UserState = {
    value: {
        email: "",
        token:"",
        isLoggedIn: false
    },
    loading: 'idle',
    error: null
}

export const userSlice = createSlice({
  name: 'userCredential',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
    reducers: {},
    extraReducers(builder) {
      builder.addCase(fetchUserCredential.fulfilled, (state, action) => { 
          //const state.value
        //  const { email, token, isLoggedIn } = action.payload;
        //  state.value.email = email;
        //  state.value.token = token;
        //  state.value.isLoggedIn = isLoggedIn;
        //  state.loading = 'succeeded';
        //  console.log("extraReducers: ",state.value)
      })
    },
})

//export const {  updateUserAction } = userSlice.actions

export default userSlice.reducer;