"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { generateClient } from "aws-amplify/api";
import * as mutations from "@/graphql/mutations";
import * as queries from "@/graphql/queries";
import { getComic, cDB02sByPostIdAndUpdatedAt } from "@/graphql/queries";
import { GetComicQueryVariables, Comic } from "@/API";

import { Grid, Typography, Box } from "@mui/material";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import config from "@/aws-exports.js";
import { UserAuth } from "@/myComponents/UserAuth";
import { CommentSection, CommentList, LikeButton } from "@/myComponents/EngagementContainer";


import AutorenewIcon from '@mui/icons-material/Autorenew';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import IosShareIcon from '@mui/icons-material/IosShare';

const ComicPage = () => {
    const [comic, setComic] = useState<Comic>();
    const [user, setUser] = useState<{ userId: string; username: string; }>({ userId: "", username: "" });
    const pathname = usePathname();
    const id = pathname.replace("/comics/", "");
    const client = generateClient();

    useEffect(() => {
        UserAuth(setUser);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    // データ取得
    const fetchData = async () => {
        try {
            const result: any = await client.graphql({
                query: getComic,
                variables: { id },
            });
            console.info("res", result);
            setComic(result.data.getComic);
        } catch (e) {
            console.error(e);
        }
    };

    // データ取得
    const setCommentList = async (res: any) => {
        return res?.data?.cDB02sByPostIdAndUpdatedAt.items ?? [];
    };
    if (!comic) return;
    return (
        <>
            <PageContainer
                title={`${comic?.title ? comic.title : ""}`}
                description={comic?.description ?? ""}
            >
                <Grid container>
                    <Grid item xl={6}>
                        <DashboardCard title={comic?.title ?? ""} url={comic?.url ?? "#"}>
                            <Grid container spacing={3}>
                                <Grid item xl={12}>
                                    {comic?.img && (
                                        <Box
                                            style={{
                                                position: "relative",
                                                height: 300,
                                                marginTop: 10,
                                                marginBottom: 10,
                                            }}
                                        >
                                            <Link
                                                href={comic?.url ?? "#"}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Image
                                                    fill
                                                    src={`https://${config.aws_user_files_s3_bucket}.s3.ap-northeast-1.amazonaws.com/${comic?.img}`}
                                                    alt=""
                                                    style={{ objectFit: "cover" }}
                                                />
                                            </Link>
                                        </Box>
                                    )}
                                </Grid>
                                <Grid item xl={12}>
                                    <Typography>{comic?.description ?? ""}</Typography>
                                </Grid>
                                <Grid item xl={12} container justifyContent="space-between" alignItems="center">
                                    <ChatBubbleOutlineIcon />
                                    {/* <AutorenewIcon /> */}
                                    <LikeButton
                                        title={comic?.title ?? ""}
                                        userId={user?.userId}
                                        postId={id}
                                        like={comic?.like ?? 0}
                                        addLike={comic?.addLike ?? 0}
                                    />
                                    {/* <IosShareIcon />
                                    <BookmarkBorderIcon /> */}
                                </Grid>
                                <Grid item xl={12}>
                                    <CommentSection params={{
                                        query: mutations.createCDB02,
                                        variables: {
                                            input: {
                                                userId: user?.userId,
                                                postId: id,
                                                dataType: "comment",
                                                content: "",
                                                reply: "",
                                            },
                                        },
                                    }} />
                                    <CommentList
                                        params={{
                                            query: queries.cDB02sByPostIdAndUpdatedAt,
                                            variables: {
                                                postId: id,
                                                filter: {
                                                    dataType: { eq: "comment" }
                                                }
                                            },
                                        }}
                                        setCommentList={setCommentList}
                                    />
                                </Grid>
                            </Grid>
                        </DashboardCard>
                    </Grid>
                    {/* 関連リスト作成予定 */}
                    {/* <Grid item xl={6}>
            <DashboardCard title={comic?.title ?? ""}>
              <Typography>{comic?.description ?? ""}</Typography>
            </DashboardCard>
          </Grid> */}
                </Grid>
            </PageContainer >
        </>
    );
};
6;

export default ComicPage;
