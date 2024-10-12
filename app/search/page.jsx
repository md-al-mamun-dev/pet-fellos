import search_icon from '@/public/icons/search.svg'
import Image from 'next/image'
import PetCard from '@/components/PetCard'
import Sidebar from './Sidebar'

export default function page() {
  return (
    <div className="w-full">
        <div className="max-w-screen-2xl mx-auto px-14 relative bg-white">
                <h2 className="section-title-2">Find out your pet</h2>
                <ul className="mt-6 w-max flex gap-x-2 text-slate-500  font-medium text-lg z-30">
                    <li className="cursor-pointer py-2 px-6 rounded-lg filter-active">All</li>
                    <li className="cursor-pointer py-2 px-6 rounded-lg">Cat</li>
                    <li className="cursor-pointer py-2 px-6 rounded-lg">Dog</li>
                    <li className="cursor-pointer py-2 px-6 rounded-lg">Bird</li>
                    <li className="cursor-pointer py-2 px-6 rounded-lg">Others</li>
                </ul>
                <div className="absolute right-14 bottom-0 w-full max-w-[623px]">
                    <input placeholder="Search" className="w-full rounded-lg px-10 py-4 border border-state-400" />
                    <Image className='absolute-y-center right-10 ' src={search_icon} />
                </div>
        </div>

        <div className="mx-auto px-14  justify-between my-8 ">

            <div className='flex gap-10  '>
                <Sidebar/>
                <div className='flex h-max flex-wrap gap-8'>
                    <PetCard/>
                    <PetCard/>
                    {/* <PetCard/>
                    <PetCard/> */}
                    {/* <PetCard/>
                    <PetCard/>
                    <PetCard/> */}
              
                </div>
            </div>
            
        </div>
    </div>
  )
}
