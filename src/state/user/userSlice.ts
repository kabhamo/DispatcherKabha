import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { signUpAndSetUserCredential } from '../../services/firebaseAuth';
import { ErrorFirebaseAuthEnum, LoadingStatus } from '../../util/enums';
import { SerializedError } from '../../util/types';

interface Params {
    email: string;
    password: string;
    rePassword?: string
}

// First, create the thunk
export const fetchUserCredential = createAsyncThunk('userCredential/fetchUserCredential',
    async ({email, password, rePassword} : Params) => {
        return await signUpAndSetUserCredential(email, password, rePassword);
    }
)

// Define a type for the slice state
interface UserState {
    loading: LoadingStatus;
    error: SerializedError;
}

// Define the initial state using that type
const initialState: UserState = {
    loading: LoadingStatus.Idle,
    error: {
        code: "",
        message: ""
    }
}

export const userSlice = createSlice({
  name: 'userCredential',
  initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchUserCredential.fulfilled, (state, action) => {
            state.loading = LoadingStatus.Succeeded;
            state.error = {code: "", message: ""}
        })
        builder.addCase(fetchUserCredential.pending, (state) => {
            state.loading = LoadingStatus.Pending
            //state.error = null
        }); 
        builder.addCase(fetchUserCredential.rejected, (state, action) => {
            state.loading = LoadingStatus.Failed;
            if (action.error.message === ErrorFirebaseAuthEnum.UnmatchedPassword) {
                state.error = {
                    code: ErrorFirebaseAuthEnum.UnmatchedPassword,
                    message: "Passwords does not match!"
                };
            } else { 
                state.error = {
                    code: action.error.code ? action.error.code : "" ,
                    message: action.error.message ? action.error.message : ""
                };
                state.error.message = state.error.message.replace(state.error.code, "").replace("[]", "")
            }
            console.log("builder state: ", action.error)
        }); 
    },
    
})

export default userSlice.reducer;