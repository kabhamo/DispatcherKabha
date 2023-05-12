import { ErrorFirebaseAuthEnum } from "./enums";

export interface ErrorType {
    code: ErrorFirebaseAuthEnum;
    message: string;
}