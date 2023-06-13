import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { createComic } from '../../graphql/mutations';
import { listComics } from '../../graphql/queries';
import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Link, Stack, TextField, Typography } from '@mui/material';
import { useAuth } from 'src/hooks/use-auth';
import { Layout as AuthLayout } from 'src/layouts/auth/layout';
const initialState = { url: '', title: '' };

const Page = () => {
    const [formState, setFormState] = useState(initialState);
    const [comics, setComics] = useState([]);

    const router = useRouter();
    const auth = useAuth();
    const formik = useFormik({
        initialValues: {
            title: '',
            url: '',
            submit: null
        },
        validationSchema: Yup.object({
            title: Yup
                .string()
                .max(255)
                .required('Title is required'),
            url: Yup
                .string()
                .max(255)
                .required('URL is required')
        }),
        onSubmit: async (values, helpers) => {
            // try {
            //     await auth.signUp(values.email, values.name, values.password);
            //     router.push('/');
            // } catch (err) {
            //     helpers.setStatus({ success: false });
            //     helpers.setErrors({ submit: err.message });
            //     helpers.setSubmitting(false);
            // }
        }
    });

    async function fetchComics() {
        try {
            let comicData = await API.graphql(graphqlOperation(listComics));
            let comics = comicData.data.listComics.items;
        } catch (err) {
            console.error(err);
        }
    }

    function setInput(key, e) {
        console.log(key, e.target.value);
        formik.handleChange(e);
        setFormState({ ...formState, [key]: e.target.value });
    }

    async function addComic() {
        try {
            console.log('formState', formState);
            if (!formState.url || !formState.title) return;
            const comic = { ...formState };
            setComics([...comics, comic]);
            setFormState(initialState);
            console.log('createComic:', createComic, 'input:', { input: comic });
            await API.graphql(graphqlOperation(createComic, { input: comic }));
        } catch (err) {
            console.error('error creating todo:', err);
        }
    }

    useEffect(() => {
        fetchComics();
    }, []);

    return (
        <>
            <Head>
                <title>新規登録 | Devias Kit</title>
            </Head>
            <Box
                sx={{
                    flex: '1 1 auto',
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <Box
                    sx={{
                        maxWidth: 550,
                        px: 3,
                        py: '100px',
                        width: '100%'
                    }}
                >
                    <div>
                        <Stack
                            spacing={1}
                            sx={{ mb: 3 }}
                        >
                            <Typography variant="h4">新規登録</Typography>
                            <Typography
                                color="text.secondary"
                                variant="body2"
                            >
                                Already have an account?
                                &nbsp;
                                <Link
                                    component={NextLink}
                                    href="/auth/login"
                                    underline="hover"
                                    variant="subtitle2"
                                >
                                    Log in
                                </Link>
                            </Typography>
                        </Stack>
                        <form
                            noValidate
                            onSubmit={formik.handleSubmit}
                        >
                            <Stack spacing={3}>
                                <TextField
                                    error={!!(formik.touched.title && formik.errors.title)}
                                    fullWidth
                                    helperText={formik.touched.title && formik.errors.title}
                                    label="タイトル"
                                    name="title"
                                    onBlur={formik.handleBlur}
                                    onChange={event => setInput('title', event)}
                                    value={formik.values.title}
                                />
                                <TextField
                                    error={!!(formik.touched.url && formik.errors.url)}
                                    fullWidth
                                    helperText={formik.touched.url && formik.errors.url}
                                    label="URL"
                                    name="url"
                                    onBlur={formik.handleBlur}
                                    onChange={event => setInput('url', event)}
                                    value={formik.values.url}
                                />
                                {/* <TextField
                                    error={!!(formik.touched.password && formik.errors.password)}
                                    fullWidth
                                    helperText={formik.touched.password && formik.errors.password}
                                    label="Password"
                                    name="password"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="password"
                                    value={formik.values.password}
                                /> */}
                            </Stack>
                            {formik.errors.submit && (
                                <Typography
                                    color="error"
                                    sx={{ mt: 3 }}
                                    variant="body2"
                                >
                                    {formik.errors.submit}
                                </Typography>
                            )}
                            <Button
                                fullWidth
                                size="large"
                                sx={{ mt: 3 }}
                                type="submit"
                                variant="contained"
                                onClick={addComic}
                            >
                                Continue
                            </Button>
                        </form>
                    </div>
                </Box>
            </Box>
        </>
    );
};

Page.getLayout = (page) => (
    <AuthLayout>
        {page}
    </AuthLayout>
);

export default Page;
