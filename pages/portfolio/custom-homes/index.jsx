import PortfolioPage from "@/components/portfolio/PortfolioPage";
import { getAllCustomHomeBuilds, getCustomHomeBuildsPage } from "@/src/app/lib/sanity";

export default function CustomHomesPortfolio(props) {
    const { projects, customHomesPage } = props;

    return (
        <>
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
        revalidate: process.env.SANITY_WEBHOOK_SECRET ? undefined : 60,
    }
}