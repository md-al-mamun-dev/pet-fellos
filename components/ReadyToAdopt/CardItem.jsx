import Image from "next/image"
import styles from './index.module.css'

export default function CardItem() {
  return (
    <div className="py-10 rounded-lg px-8 bg-sky-100 min-w-[923px] flex gap-x-10 text-base font-normal">
        <Image 
          src="/images/c368a1db33579eba63620b0ca5a2f827.jpeg"
          className="object-cover rounded-lg w-[532px] h-[352px]" 
          height={352} width={532}/>
        <div className=" grid grid-rows-[1fr_auto] gap-y-12">
            <ul className={`${styles.pet_property_list} relative w-[287px] grid content-between `}>
                <li className="relative">{'Name:'}
                  &nbsp;<span className="text-slate-600 font-medium"></span>
                </li>
                <li className="relative">{'Age:'}
                  &nbsp;<span className="text-slate-600 font-medium"></span>
                </li>
                <li className="relative">{'Gender:'}
                  &nbsp; <span className="text-slate-600 font-medium">Male</span>
                </li>
                <li className="relative">{'Health Status:'}
                  &nbsp;<span className="text-slate-600 font-medium">Perfect</span>
                </li>
                <li className="relative">{'Dietary:'}
                  &nbsp;<span className="text-slate-600 font-medium">Meat, Dog food, Rice</span> 
                </li>
            </ul>
            <button className="btn-primary w-full">Adopt Now</button>
        </div>
    </div>
  )
}
