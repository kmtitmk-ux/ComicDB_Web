"use client";
import { useState, FormEvent } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import CustomTextField from "@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField";
// components
import InfiniteScroller from "@/myComponents/InfiniteScroller";
import UserAuth from "@/myComponents/UserAuth";
import "@/style.scss";

const Dashboard = () => {
  const [word, setWord] = useState<string>("");
  const [sort, setSort] = useState<string>("createdAt");
  const user = UserAuth();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    if (formData.get("word") !== word) setWord(formData.get("word") as string);
  };

  return (
    <PageContainer
      title="Web漫画のデータベースでお気に入りを見つけよう"
      description="ComicDBは、あなたの好きなWeb漫画を簡単に検索・管理できるデータベース型アプリです。ジャンル別に漫画を探し、お気に入りの作品をブックマークして、いつでもアクセスできます。新しい漫画の発見やお気に入りの整理に最適！"
    >
      <Box>
        <form id="searchForm" onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <Stack>
                <Box>
                  <CustomTextField
                    id="word"
                    word={word}
                    variant="outlined"
                    fullWidth
                  />
                </Box>
                <Stack
                  justifyContent="space-between"
                  direction="row"
                  alignItems="center"
                  my={2}
                ></Stack>
              </Stack>
            </Grid>
            <Grid id="searchBtn" item xs={12} sm={2}>
              <Box>
                <Button
                  color="primary"
                  variant="contained"
                  size="large"
                  fullWidth
                  type="submit"
                >
                  検索
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
        <ButtonGroup id="sortBtn" aria-label="Basic button group">
          <Button
            variant={sort === "createdAt" ? "contained" : "outlined"}
            onClick={() => setSort("createdAt")}
          >
            日付順
          </Button>
          <Button
            variant={sort === "createdAt" ? "outlined" : "contained"}
            onClick={() => setSort("like")}
          >
            人気順
          </Button>
        </ButtonGroup>
        <InfiniteScroller
          word={word}
          sort={sort}
          setWord={setWord}
          user={user}
        />
      </Box>
    </PageContainer>
  );
};

export default Dashboard;
