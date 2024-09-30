import Title from "./Title"
import BackgroundImage from "./BackgroundImage"
import VisualDecorator from "./VisualDecorator"
import BottomSection from './BottomSection'
export default function Hero() {
  return (
    <div className="w-full overflow-hidden">
      <div className="relative max-w-screen-2xl mx-auto px-14">
        <Title/>
        <div className=" h-[660px] relative ">
          <BackgroundImage/>
          <VisualDecorator/>
        </div>                 
      </div>
      <BottomSection/>
    </div>
  )
}
