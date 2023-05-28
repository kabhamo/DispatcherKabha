import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ErrorFirebaseAuthEnum, LoadingStatus } from '../../util/enums';
import type { SerializedError, FavoriteArticle } from '../../util/types';
import { addFavoriteArticleByUserId } from '../../services/cloudFirestore';

// params is a single favArticle
export const fetchFavoriteArticles = createAsyncThunk('favoriteArticles/fetchFavoriteArticles',
    async (favoriteArticle :FavoriteArticle) => { 
        //call the api to firestore
        //return response(success/failure)
        return await addFavoriteArticleByUserId(favoriteArticle, 'uid')
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
        
    },
})