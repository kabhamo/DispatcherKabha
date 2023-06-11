import { SourcesDrawerOptionsEnum, LanguageDrawerOptionsEnum } from "./enums";

export interface ErrorType {
    code?: string;
    message?: string;
}

export interface SerializedError {
    message: string
    code: string
}

export type Article = {
    source: {
    id: string | null,
    name: string | null
    },
    author: string | null,
    title: string | null,
    description: string | null,
    url: string | null,
    urlToImage: string | undefined,
    publishedAt: string | null,
    content: string | null,
}

export type FavoriteArticle = {
    id: number | null,
    title: string | null,
    urlToImage: string | undefined,
    publishedAt: string | null,
    isFavoriteArticle: boolean | null
}

export type UserCredential = {
    email: string,
    token: string,
    isLoggedIn: boolean,
    uid:string,
    lastLogin: string
}

export type ProfileTab = {
    id: number,
    name: string,
    icon?: JSX.Element
}

export type DrawerItemType = {
    label: string,
}

export type CompositeCurrentOptionType = 'All' | SourcesDrawerOptionsEnum | LanguageDrawerOptionsEnum
    
export type DrawerListItem = {
    drawer: DrawerItemType,
    currentOptionState: CompositeCurrentOptionType,
    drawerOptions: SourcesDrawerOptionsEnum[] | LanguageDrawerOptionsEnum[],
}
