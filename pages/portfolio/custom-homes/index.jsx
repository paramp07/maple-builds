import PortfolioPage from "@/components/portfolio/PortfolioPage";
import { getAllCustomHomeBuilds, getCustomHomeBuildsPage } from "@/src/app/lib/sanity";
import { NextSeo } from "next-seo";

export default function CustomHomesPortfolio(props) {
    const SEO = {
        title: 'Custom Homes',
        description: 'Custom Homes built by Maple Builds',
    }
    const { projects, customHomesPage } = props;

    return (
        <>
            <NextSeo {...SEO} />
            <PortfolioPage
             isRemodels={false} 
             projects={projects} 
             header={customHomesPage.customHomeBuildsHeader}
             subheader={customHomesPage.customHomeBuildsSubHeader}
             paragraph={customHomesPage.customHomeBuildsParagraph}
             />
        </>
    )
}

export async function getStaticProps() {
    const projects = await getAllCustomHomeBuilds();
    const customHomesPage = await getCustomHomeBuildsPage();
    return {
        props: {
            projects, customHomesPage
        },
    }
}