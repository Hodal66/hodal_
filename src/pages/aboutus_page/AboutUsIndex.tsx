import  AddToCartCard  from "../../components/cards/AddToCartCard";
import IntroSection from "./IntroSection";

const  AboutUsIndex:React.FC = () =>  {
  return (
    <div>
      <section>
        <IntroSection />
      </section>
      <section>
        <AddToCartCard />
      </section>
    </div>
  );
}

export default AboutUsIndex;
