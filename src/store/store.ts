import { configureStore } from '@reduxjs/toolkit'
import { favoriteArticlesSlice } from './favoriteArticles/favoriteArticlesSlice'
import { userSlice } from './user/userSlice'

// The Redux Toolkit configureStore API automatically adds the thunk middleware during store creation,
// so it should typically be available with no extra configuration needed.

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    favoriteArticles: favoriteArticlesSlice.reducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {user: userState, news: newsState}
export type AppDispatch = typeof store.dispatch