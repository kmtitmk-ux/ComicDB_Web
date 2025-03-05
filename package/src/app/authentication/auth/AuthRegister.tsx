import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { Box, Typography, Button } from "@mui/material";

import CustomTextField from "@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField";
import { Stack } from "@mui/system";
import {
    UserAuth,
    ProcessSignUp,
    ProcessConfirmationCode,
} from "@/myComponents/UserAuth";

interface registerType {
    title?: string;
    subtitle?: JSX.Element | JSX.Element[];
    subtext?: JSX.Element | JSX.Element[];
}

const AuthRegister = ({ title, subtitle, subtext }: registerType) => {
    const [registerData, setRegisterData] = useState<{
        username: string;
        password: string;
        email: string;
    }>({ username: "", password: "", email: "" });
    const [nextStep, setNextStep] = useState<string>("");
    const router = useRouter();
    const user = { userId: "" };

    if (user.userId) router.push("/");

    return (
        <>
            {title ? (
                <Typography fontWeight="700" variant="h2" mb={1}>
                    {title}
                </Typography>
            ) : null}
            {subtext}
            <Box>
                {nextStep === "" && (
                    <form
                        onSubmit={async (e) => {
                            const signUpStep = await ProcessSignUp(e, setRegisterData);
                            setNextStep(signUpStep);
                        }}
                    >
                        <Stack mb={3}>
                            <Typography
                                variant="subtitle1"
                                fontWeight={600}
                                component="label"
                                htmlFor="username"
                                mb="5px"
                            >
                                ユーザー名
                            </Typography>
                            <CustomTextField id="username" variant="outlined" fullWidth />
                            <Typography
                                variant="subtitle1"
                                fontWeight={600}
                                component="label"
                                htmlFor="email"
                                mb="5px"
                                mt="25px"
                            >
                                Eメールアドレス
                            </Typography>
                            <CustomTextField id="email" variant="outlined" fullWidth />
                            <Typography
                                variant="subtitle1"
                                fontWeight={600}
                                component="label"
                                htmlFor="password"
                                mb="5px"
                                mt="25px"
                            >
                                パスワード
                            </Typography>
                            <CustomTextField id="password" variant="outlined" fullWidth />
                        </Stack>
                        <Button
                            color="primary"
                            variant="contained"
                            size="large"
                            fullWidth
                            type="submit"
                        >
                            サインアップ
                        </Button>
                    </form>
                )}
                {nextStep === "CONFIRM_SIGN_UP" && (
                    <form
                        onSubmit={async (e) => {
                            const signUpStep = await ProcessConfirmationCode(e, registerData);
                            if (signUpStep === "DONE") window.location.href = "/";
                        }}
                    >
                        <Stack mb={3}>
                            <Typography
                                variant="subtitle1"
                                fontWeight={600}
                                component="label"
                                htmlFor="confirmationCode"
                                mb="5px"
                            >
                                認証コード
                            </Typography>
                            <CustomTextField
                                id="confirmationCode"
                                variant="outlined"
                                fullWidth
                            />
                        </Stack>
                        <Button
                            color="primary"
                            variant="contained"
                            size="large"
                            fullWidth
                            type="submit"
                        >
                            サインアップ
                        </Button>
                    </form>
                )}
            </Box>
            {subtitle}
        </>
    );
};

export default AuthRegister;
