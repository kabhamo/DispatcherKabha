import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { logoutUser, signUpAndSetUserCredential } from '../../services/firebaseAuth';
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

export const logoutUserAndNavigate = createAsyncThunk('logoutUser/logoutUser',
    async () => {
        return await logoutUser();
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
        //when fetch succeeded update the loading status
        builder.addCase(fetchUserCredential.fulfilled, (state, action) => {
            state.loading = LoadingStatus.Succeeded;
            state.error = {code: "", message: ""}
        })
        //when fetching update the loading status
        builder.addCase(fetchUserCredential.pending, (state) => {
            state.loading = LoadingStatus.Pending
        });
        //when loggingout update the loading 
        builder.addCase(logoutUserAndNavigate.pending, (state) => {
            state.loading = LoadingStatus.Pending
        });
        //when logout fulfilled update the loading 
        builder.addCase(logoutUserAndNavigate.fulfilled, (state) => {
            state.loading = LoadingStatus.Succeeded
        });
        //when loggingout faild update the loading and the error state
        builder.addCase(logoutUserAndNavigate.rejected, (state, action) => {
            state.loading = LoadingStatus.Failed
            state.error = {
                code: ErrorFirebaseAuthEnum.LogoutFailed,
                message: action.error.message ? action.error.message : ""
            }
            state.error.message = state.error.message.replace(state.error.code, "").replace("[]", "")
        });
        //when fetching fialed update the loading and the error state
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