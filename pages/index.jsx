import { getHomePage } from "@/src/app/lib/sanity";
import Image from "next/image";



function Home(props) {
  
  return (
    <div className="h-screen h-svh">
      <div>
              <Image className="object-cover w-full h-full" width={1200} height={600} src={"https://st.hzcdn.com/simgs/pictures/exteriors/contemporary-spec-home-gibson-gimpel-interior-design-img~78c168410785572b_14-4832-1-25ab33a.jpg"} />
<p>GWERBGWBGOIGO</p>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const homepage = await getHomePage();
  return {
    props: {
      homepage,
    },
  };
}

export default Home;
