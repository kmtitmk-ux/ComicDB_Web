'use client';
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import { Box, Link, List, ListItem, Typography } from "@mui/material";

const Privacy = () => {
    return (
        <>
            <PageContainer
                title={"プライバシーポリシー"}
                description={"このアプリで収集する情報の種類とその取扱い、保護方法について説明します。"}
            >
                <Box p={2}>
                    <Typography variant="h5" gutterBottom>
                        プライバシーポリシー
                    </Typography>
                    <Typography paragraph>
                        CmicDB（以下「本アプリ」）は、ユーザーの個人情報を保護することを非常に重視しています。このプライバシーポリシーは、本アプリが収集する情報の種類、利用方法、及びその情報をどのように保護するかについて説明しています。以下に記載された内容をよくお読みください。
                    </Typography>

                    <Typography variant="h6" gutterBottom>
                        1. 収集する情報
                    </Typography>
                    <Typography paragraph>
                        本アプリでは、以下の情報を収集することがあります：
                    </Typography>
                    <List>
                        <ListItem>・個人情報: ユーザーがアカウントを作成する際に提供する名前、メールアドレス、電話番号など。</ListItem>
                        <ListItem>・デバイス情報: 使用しているデバイスの種類、OSのバージョン、IPアドレスなどの情報。</ListItem>
                        <ListItem>・アプリの使用状況: 本アプリの使用頻度や操作履歴、エラー報告などの情報。</ListItem>
                    </List>

                    <Typography variant="h6" gutterBottom>
                        2. 情報の利用目的
                    </Typography>
                    <List>
                        <ListItem>・ユーザーサポートやアプリの改善。</ListItem>
                        <ListItem>・ユーザーとの連絡（例えば、アップデート情報の通知）。</ListItem>
                        <ListItem>・本アプリの使用分析を通じて、サービスの品質向上を図るため。</ListItem>
                    </List>

                    <Typography variant="h6" gutterBottom>
                        3. 情報の共有
                    </Typography>
                    <Typography paragraph>
                        本アプリは、ユーザーの個人情報を第三者と共有することはありません。ただし、以下の場合には情報が共有されることがあります：
                    </Typography>
                    <List>
                        <ListItem>・法律による要求があった場合。</ListItem>
                        <ListItem>・ユーザーの同意があった場合。</ListItem>
                    </List>

                    <Typography variant="h6" gutterBottom>
                        4. データの保護
                    </Typography>
                    <Typography paragraph>
                        収集した情報は、適切な技術的および組織的な手段で保護されます。データは暗号化され、安全なサーバーに保存されます。
                    </Typography>

                    <Typography variant="h6" gutterBottom>
                        5. クッキーの使用
                    </Typography>
                    <Typography paragraph>
                        本アプリは、ユーザーの利便性を向上させるために、クッキーを使用することがあります。クッキーを無効にする設定は、使用しているデバイスやブラウザの設定から変更できますが、その場合、一部機能が正常に動作しない可能性があります。
                    </Typography>

                    <Typography variant="h6" gutterBottom>
                        6. 他のWebサイトへのリンク
                    </Typography>
                    <Typography paragraph>
                        本アプリには、他のWebサイトへのリンクが含まれている場合があります。リンク先のWebサイトのプライバシーポリシーについては、当社は責任を負いません。リンク先のサイトのプライバシーポリシーを確認することをお勧めします。
                    </Typography>

                    <Typography variant="h6" gutterBottom>
                        7. プライバシーポリシーの変更
                    </Typography>
                    <Typography paragraph>
                        本ポリシーは、予告なく変更されることがあります。変更があった場合は、本アプリ内で通知するか、Webサイトで公表いたします。
                    </Typography>

                    <Typography variant="h6" gutterBottom>
                        8. お問い合わせ
                    </Typography>
                    <Typography paragraph>
                        プライバシーポリシーに関する質問やご不明点がある場合は、以下の方法でお問い合わせください。
                    </Typography>
                    <Typography>
                        X : <Link
                            href="https://x.com/comicdb_V1"
                            target="_blank"
                            rel="noopener noreferrer"
                            underline="hover"
                        >
                            @comicdb_V1
                        </Link>
                    </Typography>
                </Box>
            </PageContainer >
        </>
    );
};

export default Privacy;
