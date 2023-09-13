import PortfolioPage from "@/components/portfolio/PortfolioPage";
import { getAllRemodels, getRemodelsPage } from "@/src/app/lib/sanity";

export default function CustomHomesPortfolio(props) {
    const {projects, remodelsPage} = props;

    return (
        <>
            <PortfolioPage
             projects={projects}
             header={remodelsPage.remodelsHeader} 
             subheader={remodelsPage.remodelsSubHeader}
             paragraph={remodelsPage.remodelsParagraph}
            />
        </>
    )
}

export async function getStaticProps() {
    const projects = await getAllRemodels();
    const remodelsPage = await getRemodelsPage();

    return {
        props: {
            projects, remodelsPage
        },
    }
}