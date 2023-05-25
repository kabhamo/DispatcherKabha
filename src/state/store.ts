import { configureStore } from '@reduxjs/toolkit'
import userSlice from './user/userSlice'

export const store = configureStore({
  reducer: {
    //if the slice was exported as export default counterSlice.reducer so there is no need for .reducer
    user: userSlice,
    //news: newsSlice,
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {user: userState, news: newsState}
export type AppDispatch = typeof store.dispatch