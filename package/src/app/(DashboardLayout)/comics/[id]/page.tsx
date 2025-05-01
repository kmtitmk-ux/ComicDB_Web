"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { generateClient, GraphQLResult } from "aws-amplify/api";
import * as mutations from "@/graphql/mutations";
import * as queries from "@/graphql/queries";
import { getComic } from "@/graphql/queries";
import { CDB02, CDB02sByPostIdAndUpdatedAtQuery, CreateCDB02Mutation, Comic } from "@/API";
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
    const [comments, setComments] = useState<CDB02[]>([]);
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

    const setCommentList = async (
        res: GraphQLResult<CDB02sByPostIdAndUpdatedAtQuery> | GraphQLResult<CreateCDB02Mutation>,
        type: string
    ) => {
        let nextToken: string = "";
        switch (type) {
            case "list":
                const listCommentData = (res.data as CDB02sByPostIdAndUpdatedAtQuery).cDB02sByPostIdAndUpdatedAt;
                if (!listCommentData) {
                    console.warn("コメントデータが取得できませんでした");
                    return;
                }
                setComments((pre) => [
                    ...pre,
                    ...listCommentData.items.filter((item): item is CDB02 => item !== null)
                ]);
                nextToken = listCommentData.nextToken ?? "";
                break;
            case "create":
                const createCommentData = (res.data as CreateCDB02Mutation).createCDB02;
                if (!createCommentData) {
                    console.warn("コメントデータが取得できませんでした");
                    return;
                }
                setComments((pre) => [...[createCommentData], ...pre]);
                break;
            default:
        }
        return nextToken;
    };

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

    if (!comic) return;

    return (
        <>
            <PageContainer
                comic={comic}
                title={`${comic?.title ? comic.title : ""}`}
                description={comic?.description ?? ""}
                url={pathname}
            >
                <Grid container>
                    <Grid item xl={6}>
                        <DashboardCard title={comic?.title ?? ""} url={comic?.url ?? "#"}>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
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
                                <Grid item xs={12}>
                                    <Typography>{comic?.description ?? ""}</Typography>
                                </Grid>
                                <Grid item xs={12} container justifyContent="space-between" alignItems="center">
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
                                <Grid item xs={12} sx={{ pb: 3, borderBottom: "1px solid #DDD" }}>
                                    <CommentSection
                                        userId={user.userId}
                                        params={{
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
                                        }}
                                        setCommentList={setCommentList}
                                    />
                                </Grid>
                                <Grid item xs={12} >
                                    <CommentList
                                        params={{
                                            query: queries.cDB02sByPostIdAndUpdatedAt,
                                            variables: {
                                                postId: id,
                                                sortDirection: "DESC",
                                                filter: {
                                                    dataType: { eq: "comment" }
                                                },
                                            }
                                        }}
                                        comments={comments}
                                        setCommentList={setCommentList}
                                    />
                                </Grid>
                            </Grid>
                        </DashboardCard>
                    </Grid>
                </Grid >
                {/* 関連リスト作成予定 */}
                {/* <Grid item xl={6}>
                    <DashboardCard title={comic?.title ?? ""}>
                        <Typography>{comic?.description ?? ""}</Typography>
                    </DashboardCard>
                </Grid> */}
            </PageContainer >
        </>
    );
};

export default ComicPage;
