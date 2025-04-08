"use client";

import type { Dispatch, FormEvent, SetStateAction } from "react";
import { confirmSignUp, getCurrentUser, signUp, signIn } from "aws-amplify/auth";

export async function UserAuth(setUser: Dispatch<{
    userId: string;
    username: string;
}>) {
    try {
        const { userId, username } = await getCurrentUser();
        console.info("getCurrentUser", { userId, username });
        setUser({ userId, username });
    } catch (e) {
        console.info(e);
    }
}

/**
 * サインアップ処理
 * @param e
 * @param setNextStep
 * @param setRegisterData
 */
type ProcessSignUpType<T> = T extends 'web' ? FormEvent<HTMLFormElement> : { username: string; password: string; email: string; };
export async function ProcessSignUp<T extends 'web' | 'native'>(e: ProcessSignUpType<T>, setRegisterData: Dispatch<SetStateAction<{
    username: string;
    password: string;
    email: string;
}>>) {
    console.info("ProcessSignUp", e);
    let username: string = "", password: string = "", email: string = "";
    if (typeof e === 'object' && 'username' in e) {
        // React Native 側の処理
        username = e.username;
        password = e.password;
        email = e.email;
    } else {
        // Web 側の処理
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        username = formData.get("username") as string;
        password = formData.get("password") as string;
        email = formData.get("email") as string;
    }
    const { nextStep: signUpNextStep } = await signUp({
        username, password, options: {
            userAttributes: { email },
            // autoSignIn: { authFlowType: "USER_AUTH" },
        },
    });
    setRegisterData({
        username,
        password,
        email,
    });
    return signUpNextStep.signUpStep;
}

/**
 * サインアップ認証処理
 * @param e
 * @param setNextStep
 * @param setRegisterData
 */
type ProcessConfirmationCodeType<T> = T extends 'web' ? FormEvent<HTMLFormElement> : {
    confirmationCode: string;
};
export async function ProcessConfirmationCode<T extends 'web' | 'native'>(
    e: ProcessConfirmationCodeType<T>,
    registerData: {
        username: string;
        password: string;
        email: string;
    }
) {
    let confirmationCode = "";
    const { username } = registerData;
    if (typeof e === 'object' && 'confirmationCode' in e) {
        confirmationCode = e.confirmationCode;
    } else {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        confirmationCode = formData.get("confirmationCode") as string;
    }
    const { nextStep: confirmSignUpNextStep } = await confirmSignUp({
        username,
        confirmationCode,
    });
    return confirmSignUpNextStep.signUpStep;
}

/**
 * サインイン処理
 * @param e
 */
type ProcessSignInType<T> = T extends 'web' ? FormEvent<HTMLFormElement> : { username: string; password: string; };
export async function ProcessSignIn<T extends 'web' | 'native'>(e: ProcessSignInType<T>) {
    console.info("ProcessSignIn", e);
    let username = "", password = "";
    if (typeof e === 'object' && 'username' in e) {
        // React Native 側の処理
        username = e.username;
        password = e.password;
    } else {
        // Web 側の処理
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        username = (formData.get("username") as string) ?? '';
        password = (formData.get("password") as string) ?? '';
    }
    console.log("signIn", { username, password });
    try {
        const { nextStep: signInNextStep } = await signIn({ username, password });
        console.log("nextStep", signInNextStep.signInStep);
        return signInNextStep.signInStep;
    } catch (e) {
        console.log(e);
    }

}
