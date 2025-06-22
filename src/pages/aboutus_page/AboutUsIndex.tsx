import AboutExpandedSection from "./AboutExpandedSection";
import AboutProjects from "./AboutProjects";
import AboutSection from "./AboutSection";

const AboutUsIndex: React.FC = () => {
  return (
    <div>
      <section>
        <AboutSection />
      </section>
      <section>
        <AboutExpandedSection />
      </section>
      <section>
        <AboutProjects />
      </section>
    </div>
  );
};

export default AboutUsIndex;
