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
    OnBoardingKey = "@isOnBoarding"
}
//'idle' | 'pending' | 'succeeded' | 'failed';
export enum LoadingStatus { 
    Idle = 'Idle',
    Pending = 'Pending',
    Succeeded = 'Succeeded',
    Failed = 'Failed'
}

export enum ProfileTabs { 
    Setting = 1,
    Terms = 2,
    Logout = 3
}