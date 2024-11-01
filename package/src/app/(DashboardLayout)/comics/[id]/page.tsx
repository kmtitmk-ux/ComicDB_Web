"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Grid, Typography, Box } from "@mui/material";
import { usePathname } from "next/navigation";
import { generateClient } from "aws-amplify/api";
import { getComic } from "@/graphql/queries";
import { GetComicQueryVariables, Comic } from "@/API";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import config from "@/aws-exports.js";

const ComicPage = () => {
  const [comic, setComic] = useState<Comic>();
  const pathname = usePathname();
  const id = pathname.replace("/comics/", "");
  const client = generateClient();
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
  return (
    <>
      <PageContainer
        title={comic?.title ?? ""}
        description={comic?.description ?? ""}
      >
        <Grid container spacing={3}>
          <Grid item xl={6}>
            <DashboardCard title={comic?.title ?? ""} url={comic?.url ?? "#"}>
              <>
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
                <Typography>{comic?.description ?? ""}</Typography>
              </>
            </DashboardCard>
          </Grid>

          {/* 関連リスト作成予定 */}
          {/* <Grid item xl={6}>
            <DashboardCard title={comic?.title ?? ""}>
              <Typography>{comic?.description ?? ""}</Typography>
            </DashboardCard>
          </Grid> */}
        </Grid>
      </PageContainer>
    </>
  );
};
6;

export default ComicPage;
