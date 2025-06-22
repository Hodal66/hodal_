import AboutUsContents from "../aboutus_page/AboutUsContents";
import PricingSection from "./PricingSection";

const MyPricingIndex: React.FC = () => {
  return (
    <div>
      <section>
        <AboutUsContents />
      </section>
      <section>
        <PricingSection />
      </section>
    </div>
  );
};

export default MyPricingIndex;
