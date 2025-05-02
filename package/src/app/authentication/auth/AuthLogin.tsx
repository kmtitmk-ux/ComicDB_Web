import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signIn } from "aws-amplify/auth";
import {
    Box,
    Typography,
    FormGroup,
    FormControlLabel,
    Button,
    Stack,
    Checkbox,
} from "@mui/material";
import CustomTextField from "@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField";
import { UserAuth, ProcessSignIn } from "@/myComponents/UserAuth";

interface loginType {
    title?: string;
    subtitle?: JSX.Element | JSX.Element[];
    subtext?: JSX.Element | JSX.Element[];
}
const AuthLogin = ({ title, subtitle, subtext }: loginType) => {
    const [user, setUser] = useState<{ userId: string; username: string; }>({
        userId: "",
        username: "",
    });
    const router = useRouter();

    useEffect(() => {
        UserAuth(setUser);
    }, []);

    if (user.userId) router.push("/");

    return (
        <>
            {title ? (
                <Typography fontWeight="700" variant="h2" mb={1}>
                    {title}
                </Typography>
            ) : null}

            {subtext}
            <form
                onSubmit={async (e) => {
                    const signInStep = await ProcessSignIn(e);
                    if (signInStep === "DONE") window.location.href = "/";
                }}
            >
                <Stack>
                    <Box>
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
                    </Box>
                    <Box my={3}>
                        <Typography
                            variant="subtitle1"
                            fontWeight={600}
                            component="label"
                            htmlFor="password"
                            mb="5px"
                        >
                            パスワード
                        </Typography>
                        <CustomTextField
                            id="password"
                            type="password"
                            variant="outlined"
                            fullWidth
                        />
                    </Box>
                    {/* <Stack
            justifyContent="space-between"
            direction="row"
            alignItems="center"
            my={2}
          >
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Remeber this Device"
              />
            </FormGroup>
            <Typography
              component={Link}
              href="/"
              fontWeight="500"
              sx={{
                textDecoration: "none",
                color: "primary.main",
              }}
            >
              Forgot Password ?
            </Typography>
          </Stack> */}
                </Stack>
                <Box>
                    <Button
                        color="primary"
                        variant="contained"
                        size="large"
                        fullWidth
                        // component={Link}
                        // href="/"
                        type="submit"
                    >
                        サインイン
                    </Button>
                </Box>
                {subtitle}
            </form>
        </>
    );
};

export default AuthLogin;
