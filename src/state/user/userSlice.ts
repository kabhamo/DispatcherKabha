import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { UserCredential, SerializedError } from '../../util/types'
import { loginAndSetUserCredential } from '../../services/apiService'

interface Params {
    email: string;
    password: string;
}

// First, create the thunk
export const fetchUserCredential = createAsyncThunk('userCredential/fetchUserCredential',
    async ({email, password} : Params, thunkAPI) => {
        const userCredential = await loginAndSetUserCredential(email, password);
        return userCredential;
    }
)

// Define a type for the slice state
interface UserState {
    value: UserCredential;
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
    error: SerializedError | null;
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
  initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchUserCredential.fulfilled, (state, action) => {
            state.value = action.payload;
            state.loading = 'succeeded';
            console.log("fulfilled the new state is: ", state)
        })
        builder.addCase(fetchUserCredential.pending, (state) => {
            state.loading = 'pending'
            console.log("pending, the thunk is working...", state)
        }); 
        builder.addCase(fetchUserCredential.rejected, (state, action) => {
            state.loading = 'failed';
            state.error = action.error;
            console.log("rejected: ", state)
        }); 
    },
})

export default userSlice.reducer;