import Layout from "../../components/layout";
import { getPostData, getAllPostIds } from "../../lib/posts";
import Date from "../../components/date";
import Head from "next/head";

export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <Date dateString={postData.date}/>
            {postData.title}
            <br />
            {postData.id}
            <br />
            {postData.date}
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml}}/>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false
    }
}


export async function getStaticProps({params}){
    const postData = await getPostData(params.id);
    return {
        props: {
            postData
        }
    }
}
