"use client";
import { Dispatch, SetStateAction } from "react";
import { generateClient } from "aws-amplify/api";
import {
  comicsByStatusAndCreatedAt,
  comicsByStatusAndLike,
} from "@/graphql/queries";
import { Comic } from "@/API";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
// components
import ComicList from "@/app/(DashboardLayout)/components/dashboard/ComicList";

export default function InfiniteScroller({
  word,
  sort,
  setWord,
}: {
  word: string;
  sort: string;
  setWord: Dispatch<SetStateAction<string>>;
}) {
  const [list, setList] = useState<any>();
  const [nextToken, setNextToken] = useState<string | null>(null);
  const client = generateClient();
  const query =
    sort === "createdAt" ? comicsByStatusAndCreatedAt : comicsByStatusAndLike;
  const queryName =
    sort === "createdAt"
      ? "comicsByStatusAndCreatedAt"
      : "comicsByStatusAndLike";
  // データ取得
  const fetchData = async (token: string | null, changeWord: boolean) => {
    try {
      const param: any = {
        query: query,
        variables: {
          status: 0,
          limit: 9,
          filter: {
            or: [{ title: { contains: word } }, { tags: { contains: word } }],
          },
          sortDirection: "DESC",
          nextToken: token,
        },
      };
      const result: any = await client.graphql(param);
      const outParam: any = { ...list };
      if (result.data[queryName]) {
        setNextToken(result.data[queryName].nextToken ?? null);
        if (changeWord) {
          setList(result.data);
        } else if (outParam[queryName]) {
          outParam[queryName].items = [
            ...outParam[queryName].items,
            ...result.data[queryName].items,
          ];
          setList(outParam);
        }
      }
    } catch (_) {}
  };

  useEffect(
    () => {
      fetchData(null, true);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [word, sort]
  );

  const loadMore = () => {
    if (nextToken) fetchData(nextToken, false);
  };

  //各スクロール要素
  const items = (
    <Grid container spacing={3}>
      {list &&
        list[queryName]?.items.map((v: Comic, i: number) => (
          <Grid key={i} item xs={12} sm={6} md={4}>
            <Grid item xs={12}>
              <ComicList data={v} setWord={setWord} />
            </Grid>
          </Grid>
        ))}
    </Grid>
  );

  //ロード中に表示する項目
  const loader = (
    <div className="loader" key={0}>
      Loading ...
    </div>
  );

  return (
    <>
      <InfiniteScroll loadMore={loadMore} hasMore={true} loader={loader}>
        {items}
      </InfiniteScroll>
    </>
  );
}
