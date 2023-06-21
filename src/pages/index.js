import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { comicsByStatusAndCreatedAt, comicsByStatusAndLike } from '../graphql/queries';
// import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
// import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
// import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { Box, Button, ButtonGroup, ButtonBase, Container, Pagination, Stack, SvgIcon, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { CompanyCard } from 'src/sections/companies/company-card';
import { CompaniesSearch } from 'src/sections/companies/companies-search';
import dayjs from 'dayjs';

const Page = () => {
    const [companies, setCompanies] = useState([]);
    const [word, setWord] = React.useState('');
    const [sort, setSort] = React.useState('createdAt');
    const [graphqlParam, setGraphqlParam] = React.useState({
        variables: {
            status: 0,
            sortDirection: 'DESC',
            limit: 15
        }
    });
    const fetchUsers = async (newSort = 'createdAt') => {
        try {
            switch (newSort) {
                case 'createdAt':
                    graphqlParam.query = comicsByStatusAndCreatedAt;
                    break;
                case 'like':
                    graphqlParam.query = comicsByStatusAndLike;
                    break;
                default:
            }
            delete graphqlParam.variables.nextToken;
            delete graphqlParam.variables.filter;
            let response = await API.graphql(graphqlParam);
            graphqlParam.variables.nextToken = response.data[Object.keys(response.data)[0]].nextToken;
            setGraphqlParam(graphqlParam);
            setCompanies(response.data[Object.keys(response.data)[0]].items);
        } catch (error) {
            console.log('Error fetching users', error);
        }
    };
    const toggleVisibility = async () => {
        if (graphqlParam.variables.nextToken) {
            let response = await API.graphql(graphqlParam);
            graphqlParam.variables.nextToken = response.data[Object.keys(response.data)[0]].nextToken;
            setGraphqlParam(graphqlParam);
            setCompanies([...companies, ...response.data[Object.keys(response.data)[0]].items]);
        }
    };
    /**
     * 子コンポーネントのinputからワード検索実行
     * @param {*} isState 
     */
    const changeGraphqlParam = async (isWord, isSort) => {
        delete graphqlParam.variables.nextToken;
        console.log('確認', isWord, isSort);
        switch (isSort) {
            case 'createdAt':
                graphqlParam.query = comicsByStatusAndCreatedAt;
                break;
            case 'like':
                graphqlParam.query = comicsByStatusAndLike;
                break;
            default:
        }
        graphqlParam.variables.filter = {
            or: [
                { description: { contains: isWord } },
                { tags: { contains: isWord } },
                { title: { contains: isWord } }
            ]
        };
        console.info('API.graphql IN:', graphqlParam.query);
        let response = await API.graphql(graphqlParam);
        console.info('API.graphql OUT:', response.data[Object.keys(response.data)[0]].items);
        graphqlParam.variables.nextToken = response.data[Object.keys(response.data)[0]].nextToken;
        setCompanies(response.data[Object.keys(response.data)[0]].items);
        setGraphqlParam(graphqlParam);
        setWord(isWord);
    };
    /**
     * ソートの変更
     * @param {*} event 
     * @param {*} newSort 
     */
    const changeSort = (e) => {
        setSort(e.target.name);
        changeGraphqlParam(document.getElementsByName('word')[0].value, e.target.name);
    };
    useEffect(
        () => {
            fetchUsers();
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );
    return (
        <>
            <Head>
                <title>Companies | Devias Kit</title>
            </Head>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    py: 8
                }}
            >
                <Container maxWidth="xl">
                    <Stack spacing={3}>
                        {/* <Stack
                            direction="row"
                            justifyContent="space-between"
                            spacing={4}
                        >
                            <Stack spacing={1}>
                                <Typography variant="h4">
                                    Companies
                                </Typography>
                                <Stack
                                    alignItems="center"
                                    direction="row"
                                    spacing={1}
                                >
                                    <Button
                                        color="inherit"
                                        startIcon={(
                                            <SvgIcon fontSize="small">
                                                <ArrowUpOnSquareIcon />
                                            </SvgIcon>
                                        )}
                                    >
                                        Import
                                    </Button>
                                    <Button
                                        color="inherit"
                                        startIcon={(
                                            <SvgIcon fontSize="small">
                                                <ArrowDownOnSquareIcon />
                                            </SvgIcon>
                                        )}
                                    >
                                        Export
                                    </Button>
                                </Stack>
                            </Stack>
                            <div>
                                <Button
                                    startIcon={(
                                        <SvgIcon fontSize="small">
                                            <PlusIcon />
                                        </SvgIcon>
                                    )}
                                    variant="contained"
                                >
                                    Add
                                </Button>
                            </div>
                        </Stack> */}
                        <CompaniesSearch
                            changeGraphqlParam={changeGraphqlParam}
                            word={word}
                        />
                        <ButtonGroup
                            aria-label="outlined primary button group"
                        >
                            <Button
                                name="createdAt"
                                onClick={changeSort}
                                variant={(sort === 'createdAt') ? 'contained' : 'outlined'}
                            >
                                新着順
                            </Button>
                            <Button
                                name="like"
                                onClick={changeSort}
                                variant={(sort === 'like') ? 'contained' : 'outlined'}
                            >
                                人気順
                            </Button>
                        </ButtonGroup>
                        <Grid
                            container
                            spacing={3}
                        >
                            {companies.map((company) => (
                                <Grid
                                    id={company.id}
                                    xs={12}
                                    md={6}
                                    lg={4}
                                    key={company.id}
                                >
                                    <CompanyCard
                                        changeGraphqlParam={changeGraphqlParam}
                                        company={company}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            {(() => {
                                if (graphqlParam.variables.nextToken) {
                                    return (
                                        <Button
                                            onClick={toggleVisibility}
                                            variant="outlined"
                                            size="large"
                                        >
                                            さらに検索
                                        </Button>
                                    );
                                }
                            })()}
                        </Box>
                    </Stack>
                </Container>
            </Box>
        </>
    );
};


Page.getLayout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export default Page;
