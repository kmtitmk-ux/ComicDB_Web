"use client";
import { Dispatch, SetStateAction } from "react";
import { generateClient } from "aws-amplify/api";
import {
  comicsByStatusAndCreatedAt,
  comicsByStatusAndLike,
  comicsByOfficialTitleAndCreatedAt,
  comicsByOfficialTitleAndLike,
  comicsByAuthorAndCreatedAt,
  comicsByAuthorAndLike,
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
  user,
}: {
  word: string;
  sort: string;
  setWord: Dispatch<SetStateAction<string>>;
  user: any;
}) {
  const [list, setList] = useState<any[]>([]);
  const [nextToken, setNextToken] = useState<string>("");
  const [officialTitleNextToken, setOfficialTitleNextToken] =
    useState<string>("");
  const [authorNextToken, setAuthorNextToken] = useState<string>("");
  const [idFilter, setIdFilter] = useState<{ id: { ne: string } }[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(false);

  const client = generateClient();
  const query =
    sort === "createdAt" ? comicsByStatusAndCreatedAt : comicsByStatusAndLike;
  const queryName =
    sort === "createdAt"
      ? "comicsByStatusAndCreatedAt"
      : "comicsByStatusAndLike";
  const itemLimie = 9;

  /**
   * データ取得
   * @param token
   * @param changeWord
   */
  const fetchData = async (changeWord: boolean) => {
    try {
      let items: any[] = [];
      const newExcludeFilter = changeWord ? [] : [...idFilter];
      const tokens = changeWord
        ? {
            officialTitleNextToken: "",
            authorNextToken: "",
            nextToken: "",
          }
        : {
            officialTitleNextToken: officialTitleNextToken,
            authorNextToken: authorNextToken,
            nextToken: nextToken,
          };

      // GSIで完全一致クエリ
      if (word) {
        if (tokens.officialTitleNextToken || changeWord) {
          // 正式タイトル名
          items = [
            ...(await fetchGsiData("officialTitle", tokens, newExcludeFilter)),
          ];
        }
        if (
          items.length < itemLimie &&
          (tokens.authorNextToken || changeWord)
        ) {
          // 作者名
          items = [
            ...items,
            ...(await fetchGsiData("author", tokens, newExcludeFilter)),
          ];
        }
      }

      // 部分一致クエリ
      if (items.length < itemLimie) {
        const partParam: any = {
          query: query,
          variables: {
            status: 0,
            limit: itemLimie,
            filter: {
              or: [{ title: { contains: word } }, { tags: { contains: word } }],
            },
            sortDirection: "DESC",
          },
        };
        if (tokens.nextToken) partParam.variables.nextToken = tokens.nextToken;
        if (newExcludeFilter.length) {
          partParam.variables.filter.and = newExcludeFilter;
        }
        console.info("partial req", partParam.variables);
        const result: any = await client.graphql(partParam);
        console.info("partial res", result.data[queryName]);
        items = [...items, ...result.data[queryName].items];
        setNextToken(result.data[queryName].nextToken ?? "");
        if (result.data[queryName].nextToken) {
          setHasMore(true);
        } else {
          setHasMore(false);
        }
      }

      // データ格納
      if (changeWord) {
        setList(items);
      } else {
        setList((preItems: any) => [...preItems, ...items]);
      }
    } catch (e) {
      console.error(e);
    }
  };

  /**
   * 完全一致検索
   * @param searchType
   * @param token
   * @param newExcludeFilter
   * @returns
   */
  const fetchGsiData = async (
    searchType = "",
    tokens: {
      officialTitleNextToken: string;
      authorNextToken: string;
      nextToken: string;
    },
    newExcludeFilter: { id: { ne: string } }[]
  ) => {
    let gsiNextToken = "",
      gsiQuery = "",
      gsiQueryName = "",
      outParam: any[] = [];

    // クエリを設定
    switch (true) {
      case searchType === "officialTitle" && sort === "createdAt":
        gsiQuery = comicsByOfficialTitleAndCreatedAt;
        gsiQueryName = "comicsByOfficialTitleAndCreatedAt";
        break;
      case searchType === "officialTitle" && sort === "like":
        gsiQuery = comicsByOfficialTitleAndLike;
        gsiQueryName = "comicsByOfficialTitleAndLike";
        break;
      case searchType === "author" && sort === "createdAt":
        gsiQuery = comicsByAuthorAndCreatedAt;
        gsiQueryName = "comicsByAuthorAndCreatedAt";
        break;
      case searchType === "author" && sort === "like":
        gsiQuery = comicsByAuthorAndLike;
        gsiQueryName = "comicsByAuthorAndLike";
        break;
      default:
    }
    const gsiParam: any = {
      query: gsiQuery,
      variables: {
        limit: itemLimie,
        sortDirection: "DESC",
      },
    };
    gsiParam.variables[searchType] = word;

    // トークン変更
    if (searchType === "officialTitl" && tokens.officialTitleNextToken) {
      gsiParam.variables.nextToken = tokens.officialTitleNextToken;
    }
    if (searchType === "author" && tokens.authorNextToken) {
      gsiParam.variables.nextToken = tokens.authorNextToken;
    }
    if (newExcludeFilter.length) {
      gsiParam.variables.filter = { and: newExcludeFilter };
    }
    do {
      console.info(`${searchType} req`, gsiParam.variables);
      const result: any = await client.graphql(gsiParam);
      console.info(`${searchType} res`, result.data[gsiQueryName]);
      outParam = [...outParam, ...result.data[gsiQueryName].items];

      // 除外フィルターのステイトを追加
      if (result.data[gsiQueryName].items.length) {
        setIdFilter((preData) => {
          let newData = [...preData];

          // 重複削除
          const uniqueItems = result.data[gsiQueryName].items.filter(
            (item: any) => !newData.some((preItem) => preItem.id.ne === item.id)
          );
          for (let v of uniqueItems) {
            newData.push({ id: { ne: v.id } });
          }

          // 同期的に利用するフィルター
          for (let i in newData) {
            newExcludeFilter[i] = newData[i];
          }
          return newData;
        });
      }

      // トークン入れ替え
      gsiNextToken = result?.data[gsiQueryName]?.nextToken;
      if (gsiNextToken) gsiParam.variables.nextToken = gsiNextToken;
      if (!gsiNextToken || outParam.length >= itemLimie) break;
    } while (true);

    if (searchType === "officialTitle") {
      setOfficialTitleNextToken(gsiNextToken);
      tokens.officialTitleNextToken = gsiNextToken;
    }
    if (searchType === "author") {
      setAuthorNextToken(gsiNextToken);
      tokens.authorNextToken = gsiNextToken;
    }
    return outParam;
  };

  useEffect(
    () => {
      (async () => {
        await fetchData(true);
      })();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [word, sort]
  );

  const loadMore = async () => {
    await fetchData(false);
  };

  //各スクロール要素
  const items = (
    <Grid container spacing={3}>
      {list.map((v: Comic, i: number) => (
        <Grid key={i} item xs={12} sm={6} md={4}>
          <Grid item xs={12}>
            <ComicList data={v} setWord={setWord} user={user} />
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
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore} loader={loader}>
        {items}
      </InfiniteScroll>
    </>
  );
}
