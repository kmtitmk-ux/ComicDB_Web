import { Dispatch, MouseEvent, SetStateAction } from "react";
import dynamic from "next/dynamic";
import { useTheme } from "@mui/material/styles";
import { Box, Chip, Grid, Stack, Typography, Avatar } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconArrowUpLeft } from "@tabler/icons-react";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import { LikeButton } from "@/myComponents/EngagementContainer";

import dayjs from "dayjs";
import { Comic } from "@/API";
import config from "@/aws-exports.js";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ComicList = ({
    data,
    setWord,
    user,
}: {
    data: Comic;
    setWord: Dispatch<SetStateAction<string>>;
    user: any;
}) => {
    const { addLike, createdAt, id, img, like, tags, title, url } = data;
    const tagCloud: string[] = tags ? JSON.parse(tags) : [];
    const imgPath = `https://${config.aws_user_files_s3_bucket}.s3.ap-northeast-1.amazonaws.com/${img}`;
    const theme = useTheme();
    const primary = theme.palette.primary.main;
    const primarylight = "#ecf2ff";
    const successlight = theme.palette.success.light;

    // chart
    const optionscolumnchart: any = {
        chart: {
            type: "donut",
            fontFamily: "'Plus Jakarta Sans', sans-serif;",
            foreColor: "#adb0bb",
            toolbar: {
                show: false,
            },
            height: 155,
        },
        colors: [primary, primarylight, "#F9F9FD"],
        plotOptions: {
            pie: {
                startAngle: 0,
                endAngle: 360,
                donut: {
                    size: "75%",
                    background: "transparent",
                },
            },
        },
        tooltip: {
            theme: theme.palette.mode === "dark" ? "dark" : "light",
            fillSeriesColor: false,
        },
        stroke: {
            show: false,
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        responsive: [
            {
                breakpoint: 991,
                options: {
                    chart: {
                        width: 120,
                    },
                },
            },
        ],
    };
    const seriescolumnchart: any = [38, 40, 25];

    return (
        <DashboardCard title={title ?? ""} url={id && "/comics/" + id}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <a href={url ?? "#"} target="_blank" rel="noopener noreferrer">
                        <img height={"auto"} width={"100%"} src={imgPath} alt="" />
                    </a>
                </Grid>
                <Grid item xs={12}>
                    {tagCloud.map((v, i) => (
                        <Chip
                            key={i}
                            label={v}
                            variant="outlined"
                            component="button"
                            style={{ margin: "0.1rem" }}
                            onClick={(e: MouseEvent<HTMLButtonElement>) => {
                                const target = e.target as HTMLElement;
                                setWord(target.textContent ?? "");
                            }}
                        />
                    ))}
                </Grid>
                <Grid item xs={12}>
                    <Box
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "end",
                        }}
                    >
                        <Stack>
                            <Typography variant="subtitle2" color="textSecondary">
                                {dayjs(createdAt).format("YYYY/MM/DD")}
                            </Typography>
                        </Stack>
                        <LikeButton
                            title={title ?? ""}
                            userId={user.userId}
                            postId={id}
                            like={like ?? 0}
                            addLike={addLike ?? 0}
                        />
                    </Box>
                </Grid>
                {/* column */}
            </Grid>
        </DashboardCard>
    );
};

export default ComicList;
