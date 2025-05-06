"use client";
import { useState, useEffect } from "react";
import type { Dispatch, FormEvent, SetStateAction } from "react";
import { useRouter } from "next/navigation";
import { generateClient } from "aws-amplify/api";
import { Box, Button, Chip, Grid, Stack, Typography, TextField, Avatar } from "@mui/material";

import * as queries from "@/graphql/queries";
import * as mutations from "@/graphql/mutations";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const client = generateClient();

export const LikeButton = ({
    title,
    userId,
    postId,
    like: initialLike,
    addLike: initialAddLike,
}: {
    title: string;
    userId: string;
    postId: string;
    like: number;
    addLike: number;
}) => {
    const [engagementId, setEngagementId] = useState("");
    const [like, setLike] = useState(initialLike);
    const [addLike, setAddLike] = useState(initialAddLike);
    const [liked, setLiked] = useState(false);
    const [isLiking, setIsLiking] = useState(true);
    const router = useRouter();

    useEffect(() => {
        if (!userId || !postId) return;
        fetchData(postId, userId);
    }, [userId, postId]);

    const fetchData = async (postId: string, userId: string) => {
        try {
            const query = queries.cDB02sByPostIdAndUserId;
            const { data } = await client.graphql({
                query,
                variables: {
                    postId,
                    userId: { eq: userId },
                },
            });
            if (data.cDB02sByPostIdAndUserId.items[0]) {
                setEngagementId(data.cDB02sByPostIdAndUserId.items[0].id);
                setLiked(true);
            }
        } catch (e) {
            console.error("GraphQL query failed:", e);
        }
        setIsLiking(false);
    };

    const handleClick = async () => {
        const previousLike = like;
        try {
            if (isLiking) return;
            setIsLiking(true);
            if (userId && liked && engagementId) {
                await Promise.all([
                    client.graphql({
                        query: mutations.deleteCDB02,
                        variables: {
                            input: { id: engagementId },
                        },
                    }),
                    client.graphql({
                        query: mutations.updateComic,
                        variables: {
                            input: {
                                id: postId,
                                addLike: addLike - 1,
                                like: like - 1,
                            },
                        },
                    }),
                ]);
                setLike((prev) => prev - 1);
                setAddLike((prev) => prev - 1);
                setLiked(false);
            } else if (userId && !liked) {
                const [engagementRes] = await Promise.all([
                    client.graphql({
                        query: mutations.createCDB02,
                        variables: {
                            input: {
                                userId,
                                postId,
                                dataType: "like",
                                content: "",
                                reply: "",
                            },
                        },
                    }),
                    client.graphql({
                        query: mutations.updateComic,
                        variables: {
                            input: {
                                id: postId,
                                addLike: addLike + 1,
                                like: like + 1,
                            },
                        },
                    }),
                ]);
                setEngagementId(engagementRes.data.createCDB02.id);
                setLike((prev) => prev + 1);
                setAddLike((prev) => prev + 1);
                setLiked(true);
            } else {
                router.push("/authentication/register");
            }
        } catch (e) {
            console.error("Error handling like:", e);
            setLike(previousLike);
        } finally {
            setIsLiking(false);
        }
    };

    return (
        <>
            <Stack
                onClick={handleClick}
                alignItems="center"
                direction="row"
                spacing={1}
            >
                <FavoriteBorderIcon
                    style={liked ? { color: "#F00" } : { color: "#000" }}
                />
                <Typography variant="subtitle2" color="textSecondary">
                    {like}
                </Typography>
            </Stack>
        </>
    );
};

export const CommentSection = ({
    userId,
    params,
    setCommentList
}: {
    userId: string;
    params: any;
    setCommentList: any;
}
) => {
    const [comment, setComment] = useState("");
    const router = useRouter();

    const handlePostComment = async () => {
        if (userId) {
            params.variables.input.content = comment;
            const res = await client.graphql(params);
            setCommentList(res, "create");
            setComment("");
        } else {
            router.push("/authentication/register");
        }
    };

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        label="コメントを書く"
                        multiline
                        rows={4}
                        fullWidth
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} container justifyContent="flex-end">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handlePostComment}
                        disabled={!comment.trim()}
                    >
                        投稿
                    </Button>
                </Grid >
            </Grid>
        </>
    );
};