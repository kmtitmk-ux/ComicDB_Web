import PropTypes from 'prop-types';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ClockIcon from '@heroicons/react/24/solid/ClockIcon';
import { Avatar, Box, Card, Chip, CardContent, Divider, Link, Stack, SvgIcon, Typography } from '@mui/material';
import dayjs from 'dayjs';

export const CompanyCard = (props) => {
    const { company, changeGraphqlParam } = props;
    const bucketUrl = 'https://pf014740a4bdfae54b9f9dfe9f39d0b14b2b163425-dev.s3.ap-northeast-1.amazonaws.com/';
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
                    href={company.url}
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
                            src={encodeURI(bucketUrl + company.img)}
                            variant="square"
                            sx={{ width: "100%", height: "auto", maxHeight: 170 }}
                        />
                    </Box>
                    <Typography
                        align="center"
                        gutterBottom
                        variant="h5"
                    >
                        {company.title}
                    </Typography>
                </Link>
                <Stack
                    direction="row"
                    spacing={1}
                    sx={{
                        // justifyContent: 'center',
                        flexWrap: 'wrap',
                        mb: 1,
                    }}
                >
                    {(() => {
                        let tags = [];
                        if (company.tags) tags = JSON.parse(company.tags);
                        let outParam = [];
                        for (let v of tags) {
                            outParam.push(<Chip
                                label={v}
                                variant="outlined"
                                onClick={((e) => changeGraphqlParam(e.target.innerText))}
                                style={{
                                    marginTop: 8,
                                    marginRight: 10,
                                    marginLeft: 0,
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
                    {company.description}
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
                    {/* <SvgIcon
                        color="action"
                        fontSize="small"
                    >
                        <ClockIcon />
                    </SvgIcon> */}
                    <Typography
                        color="text.secondary"
                        display="inline"
                        variant="body2"
                    >
                        {dayjs(company.createdAt).format('YYYY/MM/DD')}
                    </Typography>
                </Stack>
                <Stack
                    alignItems="center"
                    direction="row"
                    spacing={1}
                >
                    <SvgIcon
                        color="action"
                        fontSize="small"
                    >
                        <FavoriteBorderIcon />
                    </SvgIcon>
                    <Typography
                        color="text.secondary"
                        display="inline"
                        variant="body2"
                    >
                        {company.like}
                    </Typography>
                </Stack>
            </Stack>
        </Card>
        // </Link>
    );
};

CompanyCard.propTypes = {
    company: PropTypes.object.isRequired
};
