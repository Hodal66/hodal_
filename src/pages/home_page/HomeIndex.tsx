import { SuccessToast } from "../../components/toast/SuccessToast"
import IntroSection from "../aboutus_page/IntroSection"

import HelloArea from "./HelloArea"

const HomeIndex: React.FC = () => {
  return (
    <div>
      <HelloArea />
      <IntroSection />
      <SuccessToast />
    </div>
  )
}

export default HomeIndex
