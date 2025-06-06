import React from "react";
import Link from "next/link";
import { Card, CardContent, Typography, Stack, Box } from "@mui/material";

type Props = {
    title?: string;
    subtitle?: string;
    action?: JSX.Element | any;
    footer?: JSX.Element;
    cardheading?: string | JSX.Element;
    headtitle?: string | JSX.Element;
    headsubtitle?: string | JSX.Element;
    children?: JSX.Element;
    middlecontent?: string | JSX.Element;
    url?: string | undefined;
};

const DashboardCard = ({
    title,
    subtitle,
    children,
    action,
    footer,
    cardheading,
    headtitle,
    headsubtitle,
    middlecontent,
    url,
}: Props) => {
    return (
        <Card sx={{ padding: 0 }} elevation={9} variant={undefined}>
            {cardheading ? (
                <CardContent>
                    <Typography variant="h5">{headtitle}</Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                        {headsubtitle}
                    </Typography>
                </CardContent>
            ) : (
                <CardContent sx={{ p: "30px" }}>
                    {title ? (
                        <Link
                            href={url ?? "#"}
                            style={{ position: "relative", zIndex: "1" }}
                            target={url && url.indexOf("http") !== -1 ? "_blank" : "_top"}
                        >
                            <Stack
                                direction="row"
                                spacing={2}
                                justifyContent="space-between"
                                alignItems={"center"}
                            >
                                <Box>
                                    {title ? <Typography variant="h5">{title}</Typography> : ""}
                                    {subtitle ? (
                                        <Typography variant="subtitle2" color="textSecondary">
                                            {subtitle}
                                        </Typography>
                                    ) : (
                                        ""
                                    )}
                                </Box>
                                {action}
                            </Stack>
                        </Link>
                    ) : null}
                    {children}
                </CardContent>
            )}
            {middlecontent}
            {footer}
        </Card>
    );
};

export default DashboardCard;
