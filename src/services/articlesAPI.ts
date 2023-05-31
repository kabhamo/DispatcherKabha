import axios from "axios";
import { getConfig } from "../../config/config";
import { ArticleCategory, AsyncLocalStorageKeysType } from "../util/enums";
import { ArticleResponse } from "../util/types";
import { storeLocalData } from "./asyncStorage";

const { apiKey, baseURL } = getConfig().general;

const axiosInstance = axios.create({
    baseURL: baseURL,
});

const ARTICLES_NUMBER = 7;

export const getArticles = async() => { 
    try {
        //get the data from api
        const response = await axiosInstance.get(`/top-headlines?apiKey=${apiKey}&pageSize=${ARTICLES_NUMBER}&country=us`);
        const arrayArticles: ArticleResponse[] = response.data?.articles;
        return arrayArticles;
    } catch (ex) { 
        console.log("error getArticles: ", ex)
        return [];
    }
}

export const getArticlesByfilter = async() => { 
    try {

    } catch (ex) { 

    }
}

export const refreshArticles = async() => { 
    try {

    } catch (ex) { 

    }
}