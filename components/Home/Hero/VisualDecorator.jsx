import Image from 'next/image'

import decorationItem_circle_yellow from '@/public/decoration_assets/circle_yellow.svg'
import decorationItem_rectangle_teal from '@/public/decoration_assets/decoration_rectangle_teal.svg'
import decorationItem_heart_0 from '@/public/decoration_assets/decorative_heart_0.svg'
import decorationItem_line_0 from '@/public/decoration_assets/decorative-line-0.svg'
import decorationItem_heart_1 from '@/public/decoration_assets/decorative_heart_1.svg'
import decorationItem_heart_outline_2 from '@/public/decoration_assets/decorative_heart_outline_2.svg'
import decorationItem_heart_ray_3 from '@/public/decoration_assets/decorative_heart_ray_3.svg'
import decorationItem_circle_1 from '@/public/decoration_assets/decorative_circle_1.svg'
import decorationItem_circle_2 from '@/public/decoration_assets/decorative_circle_2.svg'
import decorationItem_circle_3 from '@/public/decoration_assets/decorative_circle_3.svg'
import decorationItem_circle_4 from '@/public/decoration_assets/decorative_circle_4.svg'
import decorationItem_triangle from '@/public/decoration_assets/decorative_triangle.svg'









export default function VisualDecorator() {

    // const assetLocation = '@public/decoration_assets'
  return (
    <>
        <Image
            className="absolute left-[587px] top-[362px] "             
            src={decorationItem_circle_yellow} alt="hero section decorative cirlcle yello"/>
        <Image 
            className="absolute right-[85px] top-[203px]" 
            src={decorationItem_rectangle_teal} alt="hero section decorative cirlcle yello"/>
        <Image 
            className="absolute right-[200px] top-[100px]" 
            src={decorationItem_heart_0} alt="hero section decorative cirlcle yello"/>
        <Image 
            className="absolute right-[163px] bottom-[14px] " 
            src={decorationItem_line_0} alt="hero section decorative cirlcle yello"/>
        <Image 
            className="absolute z-10 right-[130px] -bottom-[64px]" 
            src={decorationItem_heart_1} alt="hero section decorative cirlcle yello"/>
        <Image 
            className="absolute z-10 right-[132px] -bottom-[60px]" 
            src={decorationItem_heart_outline_2} alt="hero section decorative cirlcle yello"/>
        <Image 
            className="absolute z-10 left-[703px] top-[10px]" 
            src={decorationItem_heart_ray_3} alt="hero section decorative cirlcle yello"/>
        <Image 
            className="absolute z-10 left-[703px] top-[230px]" 
            src={decorationItem_circle_1} alt="hero section decorative cirlcle yello"/>
        <Image 
            className="absolute z-10 left-[581px] -bottom-[140px]" 
            src={decorationItem_circle_2} alt="hero section decorative cirlcle yello"/>
        <Image 
            className="absolute z-10 left-0 -bottom-[330px]" 
            src={decorationItem_circle_3} alt="hero section decorative cirlcle yello"/>
        <Image 
            className="absolute z-10 right-0" 
            src={decorationItem_circle_4} alt="hero section decorative cirlcle yello"/>
        <Image 
            className="absolute z-10  left-[587px] bottom-[362px]" 
            src={decorationItem_triangle} alt="hero section decorative cirlcle yello"/>
    </>
  )
}
