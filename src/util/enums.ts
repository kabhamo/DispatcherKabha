export enum PasswordEnum {
    Password = "Password",
    ReinterPassword = "Re-Enter Password",
}

export enum ErrorFirebaseAuthEnum { 
    InvalidEmail = "auth/invalid-email",
    EmailExist = "auth/email-already-in-use",
    UserNotFound = "auth/user-not-found",
    InvalidOperation = "auth/operation-not-allowed",
    RequestsExceeded = "auth/too-many-requests",
    NetworkError = "auth/network-request-failed",
    UnmatchedPassword = "local/unmatched-passwords",
    WeakPassword = "auth/weak-password",
    WrongPassword = "auth/wrong-password",
    LogoutFailed = "auth/no-current-user"
}

export enum AsyncLocalStorageKeysType { 
    UserAuthKey = "@userAuthKey",
    OnBoardingKey = "@isOnBoarding",
    ArticlesKey = "@articles",
    FavoriteArticle = "@favoriteArticles"
}

export enum LoadingStatus { 
    Idle = 'Idle',
    Pending = 'Pending',
    Succeeded = 'Succeeded',
    Failed = 'Failed'
}

export enum ProfileTabs { 
    Setting = 1,
    Terms = 2,
    Logout = 3,
    MyProfile = 4,
}

export enum ArticleCategory { 
    Business = 'business',
    Entertainment = 'entertainmen0t',
    General = 'general',
    Health = 'health',
    Science = 'science',
    Sports = 'sports',
    Technology = 'technology'
}


export enum SourcesDrawerOptionsEnum {
    CBS = 'CBS',
    NBC = 'NBC',
    Ynet = 'Ynet'
}

export enum LanguageDrawerOptionsEnum {
    EN = 'english',
    AR = 'arabic',
    HE = 'hebrew'
}