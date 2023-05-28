import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addFavoriteArticleByUserId, getFavoriteArticleByUserId, removeFavoriteArticleByUserId } from '../../services/cloudFirestore';
import { AsyncLocalStorageKeysType, LoadingStatus } from '../../util/enums';
import type { FavoriteArticle, SerializedError, UserCredential } from '../../util/types';
import { getData } from '../../services/asyncStorage';

// params is a single favArticle
export const fetchFavoriteArticles = createAsyncThunk('favoriteArticles/fetchFavoriteArticles',
    async (favoriteArticle: FavoriteArticle) => {
        const userCredential: UserCredential = await getData(AsyncLocalStorageKeysType.UserAuthKey);
        return await addFavoriteArticleByUserId(favoriteArticle, userCredential.uid)
    })

export const removeFavoriteArticles = createAsyncThunk('favoriteArticles/removeFavoriteArticles',
    async (id: number | null) => { 
        const userCredential: UserCredential = await getData(AsyncLocalStorageKeysType.UserAuthKey);
        return await removeFavoriteArticleByUserId(id, userCredential.uid)
    })

export const getFavoriteArticles = createAsyncThunk('favoriteArticles/getFavoriteArticles',
    async () => { 
        const userCredential: UserCredential = await getData(AsyncLocalStorageKeysType.UserAuthKey);
        return await getFavoriteArticleByUserId(userCredential.uid)
})


interface FavoriteArticles { 
    value: FavoriteArticle[],
    loading: LoadingStatus;
    error: SerializedError;
}

const initialState: FavoriteArticles = {
    value: [],
    loading: LoadingStatus.Idle,
    error: {
        code: "",
        message: ""
    }
}

export const favoriteArticlesSlice = createSlice({
    name: 'favoriteArticles',
    initialState,
    reducers: {},
    extraReducers(builder) {
        //when fetch new articles update the state
        builder.addCase(fetchFavoriteArticles.fulfilled, (state, action) => { 
            state.value = action.payload;
            console.log("fetch fulfilled: ",action.payload)
        })
        //When remove update the state
        builder.addCase(removeFavoriteArticles.fulfilled, (state, action) => { 
            state.value = action.payload;
            console.log("remove fulfilled: ",action.payload)
        })
        //when login retrive and update the data
        builder.addCase(getFavoriteArticles.fulfilled, (state, action) => { 
            state.value = action.payload;
            console.log("get fulfilled: ",action.payload)
        })
        builder.addCase(fetchFavoriteArticles.pending, (state, action) => { 
            console.log("pending")
        })
        builder.addCase(fetchFavoriteArticles.rejected, (state, action) => { 
            console.log("rejected", action.error)
        })
    },

})
