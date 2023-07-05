import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Amplify, Auth } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import Head from 'next/head';
import { CacheProvider } from '@emotion/react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import TagManager from 'react-gtm-module';
import { AuthConsumer, AuthProvider } from 'src/contexts/auth-context';
import { useNProgress } from 'src/hooks/use-nprogress';
import { createTheme } from 'src/theme';
import { createEmotionCache } from 'src/utils/create-emotion-cache';
import 'simplebar-react/dist/simplebar.min.css';
import awsExports from '../aws-exports';
Amplify.configure(awsExports);
const s3Bucket = Amplify.configure(awsExports).aws_user_files_s3_bucket;
const initialState = { name: '', description: '' };
const clientSideEmotionCache = createEmotionCache();
const SplashScreen = () => null;
const App = (props) => {
    const router = useRouter();
    const [formState, setFormState] = useState(initialState);
    const [user, setUser] = useState(null);
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
    useEffect(
        () => {
            TagManager.initialize({ gtmId: 'GTM-WN44VP7' });
            // ページ変更時にもトラッキングする
            router.events.on('routeChangeComplete', () => {
                TagManager.dataLayer({ pageview: window.location.pathname });
            });
            return () => {
                router.events.off('routeChangeComplete');
            };
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );
    const signIn = async (username, password) => {
        let outParam = '';
        try {
            outParam = await Auth.signIn(username, password);
        } catch (error) {
            console.error('error signing in', error);
        }
        setUser(outParam);
        return outParam;
    };
    const signOut = async () => {
        try {
            await Auth.signOut();
            setUser(Auth.user);
        } catch (error) {
            console.log('error signing out: ', error);
        }
    };
    // Auth.setupTOTP(user).then((code) => {
    //     // You can directly display the `code` to the user or convert it to a QR code to be scanned.
    //     // E.g., use following code sample to render a QR code with `qrcode.react` component:
    //     //      import QRCodeCanvas from 'qrcode.react';
    //     //      const str = "otpauth://totp/AWSCognito:"+ username + "?secret=" + code + "&issuer=" + issuer;
    //     //      <QRCodeCanvas value={str}/>
    //     console.log(code);
    // });
    // Auth.verifyTotpToken(user, challengeAnswer)
    //     .then(() => {
    //         // don't forget to set TOTP as the preferred MFA method
    //         Auth.setPreferredMFA(user, 'TOTP');
    //         // ...
    //     })
    //     .catch((e) => {
    //         // Token is not verified
    //     });
    function setInput(key, value) {
        setFormState({ ...formState, [key]: value });
    }
    useNProgress();
    const getLayout = Component.getLayout ?? ((page) => page);
    const theme = createTheme();
    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <title>人気のWeb漫画を探すなら【ComicDB】</title>
                <meta
                    name="viewport"
                    content="initial-scale=1, width=device-width"
                />
            </Head>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <AuthProvider>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        {getLayout(<Component
                            {...pageProps}
                            s3Bucket={s3Bucket}
                            user={user}
                            signIn={signIn}
                            signOut={signOut}
                        />)}
                    </ThemeProvider>
                </AuthProvider>
            </LocalizationProvider>
        </CacheProvider >
    );
};

export default App;
