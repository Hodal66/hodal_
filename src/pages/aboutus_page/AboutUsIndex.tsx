// import  AddToCartCard  from "../../components/cards/AddToCartCard";
import AboutProjects from "./AboutProjects";
import AboutUsContents from "./AboutUsContents";
// import IntroSection from "./IntroSection";

const  AboutUsIndex:React.FC = () =>  {
  return (
    <div>
      <section>
        {/* <IntroSection />
         */}
         <AboutUsContents />
      </section>
      <section>
      <AboutProjects />
      </section>
    </div>
  );
}

export default AboutUsIndex;
