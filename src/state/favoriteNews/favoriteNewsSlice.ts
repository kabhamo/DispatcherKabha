import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addFavoriteArticleByUserId, removeFavoriteArticleByUserId } from '../../services/cloudFirestore';
import { AsyncLocalStorageKeysType, LoadingStatus } from '../../util/enums';
import type { FavoriteArticle, SerializedError, UserCredential } from '../../util/types';
import { getData } from '../../services/asyncStorage';

// params is a single favArticle
export const fetchFavoriteArticles = createAsyncThunk('favoriteArticles/fetchFavoriteArticles',
    async (favoriteArticle: FavoriteArticle) => {
        try {
            const userCredential: UserCredential = await getData(AsyncLocalStorageKeysType.UserAuthKey);
            return await addFavoriteArticleByUserId(favoriteArticle, userCredential.uid)
        } catch (ex) { 
            return ex
        }
    })

export const removeFavoriteArticles = createAsyncThunk('favoriteArticles/removeFavoriteArticles',
    async (id: number | null) => { 
        try {
            const userCredential: UserCredential = await getData(AsyncLocalStorageKeysType.UserAuthKey);
            return await removeFavoriteArticleByUserId(id, userCredential.uid)
        } catch (ex) { 
            return ex
        }
})


interface FavoriteNews { 
    loading: LoadingStatus;
    error: SerializedError;
}

const initialState: FavoriteNews = {
    loading: LoadingStatus.Idle,
    error: {
        code: "",
        message: ""
    }
}

export const favoriteNewsSlice = createSlice({
    name: 'favoriteNews',
    initialState,
    reducers: {},
    extraReducers(builder) {
        
        //? fetchFavoriteArticles
        builder.addCase(fetchFavoriteArticles.fulfilled, (state, action) => { 
            console.log("fulfilled")
        })
        builder.addCase(fetchFavoriteArticles.pending, (state, action) => { 
            console.log("pending")
        })
        builder.addCase(fetchFavoriteArticles.rejected, (state, action) => { 
            console.log("rejected", action.error)
        })

        //? removeFavoriteArticles
        builder.addCase(removeFavoriteArticles.fulfilled, (state, action) => { 
            console.log("fulfilled", state)
        })
        builder.addCase(removeFavoriteArticles.pending, (state, action) => { 
            console.log("pending", action)
        })
        builder.addCase(removeFavoriteArticles.rejected, (state, action) => {
            console.log("rejected", action)
         })
    },

})

export default favoriteNewsSlice.reducer