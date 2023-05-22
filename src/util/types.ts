import { ErrorFirebaseAuthEnum } from "./enums";

export interface ErrorType {
    code: ErrorFirebaseAuthEnum;
    message: string;
}

export interface SerializedError {
    name?: string
    message?: string
    stack?: string
    code?: string
}


export type ArticleResponse = {
    source: {
    id: string | null,
    name: string | null
    },
    author: string | null,
    title: string | null,
    description: string | null,
    url: string | null,
    urlToImage: string | null,
    publishedAt: string | null,
    content: string | null
}

export type UserCredential = {
    email: string,
    token: string,
    isLoggedIn: boolean
}