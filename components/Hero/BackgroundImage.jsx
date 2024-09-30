import Image from "next/image"

export default function BackgroundImage() {
  return (
    <div className="absolute left-[580px] h-[936px] w-[1403px] -bottom-16 z-10">
      <Image 
        fill
        className="relative" 
        src='/images/cf7fd6a860a2e2c165b31287448fad5f.png' 
        alt="hero section background image"/>
    </div>
  )
}
