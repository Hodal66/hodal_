import AboutProjects from "../aboutus_page/AboutProjects"
import HelloArea_2 from "./HelloArea_2"

const HomeIndex: React.FC = () => {
  return (
    <main>
    <section>
        <HelloArea_2 />
    </section>
    <section>
      <AboutProjects />
    </section>
    </main>
  )
}

export default HomeIndex
