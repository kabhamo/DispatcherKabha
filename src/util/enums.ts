export enum PasswordEnum {
    Password = "Password",
    ReinterPassword = "Re-Enter Password",
}

export enum ErrorFirebaseAuthEnum { 
    InvalidEmail = "auth/invalid-email",
    EmailExist = "auth/email-already-in-use",
    InvalidOperation = "auth/operation-not-allowed",
    NetworkError = "auth/network-request-failed",
    UnmatchedPassword = "local/unmatched-passwords",
    WeakPassword = "auth/weak-password",
    WrongPassword = "auth/wrong-password"
}

export enum AsyncLocalStorageKeysType { 
    UserAuthKey = "@userAuthKey",
    OnBoardingKey = "@isOnBoarding"
}