import { Helmet, HelmetProvider } from "react-helmet-async";
import { Comic } from "@/API";
import config from "@/aws-exports.js";

type Props = {
    title?: string;
    description?: string;
    children: JSX.Element | JSX.Element[];
    url?: string;
    comic?: Comic;
};
const PageContainer = ({ comic, title, description, children }: Props) => {
    const setImg = `https://${config.aws_user_files_s3_bucket}.s3.ap-northeast-1.amazonaws.com/${comic?.img}`;
    const setTitle = `${title} | ComicDB`;
    return (
        <HelmetProvider>
            <div>
                <Helmet>
                    <title>{setTitle}</title>
                    <meta name="description" content={description} />
                    <meta property="og:title" content={setTitle} />
                    <meta property="og:description" content={description} />
                    <meta property="og:image" content={setImg} />
                </Helmet>
                {children}
            </div>
        </HelmetProvider>
    );
};

export default PageContainer;
