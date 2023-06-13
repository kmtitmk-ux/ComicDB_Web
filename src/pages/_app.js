import React, { useState } from 'react';
import { Amplify } from 'aws-amplify';
import Head from 'next/head';
import { CacheProvider } from '@emotion/react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { AuthConsumer, AuthProvider } from 'src/contexts/auth-context';
import { useNProgress } from 'src/hooks/use-nprogress';
import { createTheme } from 'src/theme';
import { createEmotionCache } from 'src/utils/create-emotion-cache';
import 'simplebar-react/dist/simplebar.min.css';
// import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../aws-exports';
Amplify.configure(awsExports);
const initialState = { name: '', description: '' };
const clientSideEmotionCache = createEmotionCache();
const SplashScreen = () => null;

const App = (props) => {
    const [formState, setFormState] = useState(initialState);
    const [todos, setTodos] = useState([]);
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
    function setInput(key, value) {
        setFormState({ ...formState, [key]: value });
    }
    useNProgress();
    const getLayout = Component.getLayout ?? ((page) => page);
    const theme = createTheme();
    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <title>
                    Devias Kit
                </title>
                <meta
                    name="viewport"
                    content="initial-scale=1, width=device-width"
                />
            </Head>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <AuthProvider>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        {/* <Authenticator>
                            {({ signOut, user }) => {
                                pageProps.signOut = signOut;
                                pageProps.user = user;
                                return (
                                    <>
                                        {getLayout(<Component {...pageProps} />)}
                                    </>
                                );
                            }}
                        </Authenticator> */}
                        {getLayout(<Component {...pageProps} />)}
                    </ThemeProvider>
                </AuthProvider>
            </LocalizationProvider>
        </CacheProvider >
    );
};

export default App;
