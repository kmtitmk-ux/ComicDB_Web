import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { API, graphqlOperation } from 'aws-amplify';
import { comicEngagementsByComicIdAndUserId } from '../../graphql/queries';
import { updateComic, createComicEngagement } from '../../graphql/mutations';
import PropTypes from 'prop-types';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ClockIcon from '@heroicons/react/24/solid/ClockIcon';
import { Avatar, Box, Card, Chip, CardContent, Divider, Link, Stack, SvgIcon, Typography } from '@mui/material';
import dayjs from 'dayjs';
import EllipsisVerticalIcon from '@heroicons/react/24/solid/EllipsisVerticalIcon';

export const CompanyCard = (props) => {
    const { company, changeGraphqlParam, s3Bucket, user } = props;
    const [comic, setComic] = useState(company);
    const router = useRouter();
    const bucketUrl = 'https://' + s3Bucket + '.s3.ap-northeast-1.amazonaws.com/';
    const clickLikeBtn = async (comic) => {
        if (user) {
            try {
                comic.addLike = (comic.addLike) ? comic.addLike : 0;
                // エンゲージメントに追加
                let updateParam = {
                    query: updateComic,
                    variables: {
                        input: {
                            id: comic.id,
                            like: comic.like + 1,
                            addLike: comic.addLike + 1
                        }
                    },
                };
                const updateRes = await API.graphql(updateParam);
                console.info('データが更新されました:', updateRes, updateRes.data.updateComic);
                updateRes.data.updateComic.likeFlg = true;
                setComic(updateRes.data.updateComic);
                // エンゲージメントに追加
                let putParam = {
                    query: createComicEngagement,
                    variables: {
                        input: {
                            comicId: comic.id,
                            userId: user.username,
                            dataType: 'like'
                        }
                    },
                };
                await API.graphql(putParam);
            } catch (error) {
                console.error('データの更新エラー:', error);
            }
        } else {
            router.push('/auth/login');
        }
    };
    return (
        <Card
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
            }}
        >
            <CardContent>
                <Link
                    href={comic.url}
                    target="_blank"
                    rel="noreferrer"
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            pb: 3
                        }}
                    >
                        <Avatar
                            src={bucketUrl + comic.img}
                            variant="square"
                            sx={{ width: "100%", height: "auto", maxHeight: 170 }}
                        />
                    </Box>
                    <Typography
                        align="center"
                        gutterBottom
                        variant="h5"
                    >
                        {comic.title}
                    </Typography>
                </Link>
                <Stack
                    direction="row"
                    spacing={1}
                    sx={{
                        flexWrap: 'wrap',
                        mb: 1
                    }}
                >
                    {(() => {
                        let tags = [], outParam = [];
                        if (comic.tags) tags = JSON.parse(comic.tags);
                        for (let v of tags) {
                            outParam.push(<Chip
                                key={v}
                                label={v}
                                variant="outlined"
                                onClick={((e) => changeGraphqlParam(e.target.innerText))}
                                style={{
                                    marginTop: 8,
                                    marginRight: 10,
                                    marginLeft: 0
                                }}
                                size="small"
                            />);
                        }
                        return outParam;
                    })()}
                </Stack>
                <Typography
                    align="left"
                    variant="subtitle2"
                >
                    {comic.description}
                </Typography>
            </CardContent>
            <Box sx={{ flexGrow: 1 }} />
            <Divider />
            <Stack
                alignItems="center"
                direction="row"
                justifyContent="space-between"
                spacing={2}
                sx={{ p: 2 }}
            >
                <Stack
                    alignItems="center"
                    direction="row"
                    spacing={1}
                >
                    <Typography
                        color="text.secondary"
                        display="inline"
                        variant="body2"
                    >
                        {dayjs(comic.createdAt).format('YYYY/MM/DD')}
                    </Typography>
                </Stack>
                {(() => {
                    if (!user) comic.likeFlg = false;
                })()}
                <Stack
                    alignItems="center"
                    direction="row"
                    spacing={1}
                    onClick={(() => (comic.likeFlg) ? null : clickLikeBtn(comic))}
                >
                    <SvgIcon
                        fontSize="small"
                        color={(() => (comic.likeFlg) ? "primary" : "action")()}
                    >
                        <FavoriteBorderIcon />
                    </SvgIcon>
                    <Typography
                        color={(() => (comic.likeFlg) ? "#6366F1" : "text.secondary")()}
                        display="inline"
                        variant="body2"
                    >
                        {comic.like}
                    </Typography>
                </Stack>
            </Stack>
        </Card>
    );
};

CompanyCard.propTypes = {
    company: PropTypes.object.isRequired
};
