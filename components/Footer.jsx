import Image from "next/image"
import social_fb from '@/public/icons/social_fb.svg'
import social_twitter from '@/public/icons/social_twitter.svg'
import social_youtube from '@/public/icons/social_youtube.svg'



export default function Footer() {
  return (
    <footer className="text-gray-900 bg-gray-100 py-16 px-14">
        <form className="flex items-center gap-x-9 w-max mx-auto mb-20">
            <h2 className="font-medium text-base">
                Newsletter
            </h2> 
            <input className="border border-gray-400 py-6 px-7 placeholder:text-opacity-50 w-96 rounded-full" placeholder="Your email"/>
        </form>
       
        <div >
            <ul className="text-gray-900 font-normal text-sm flex flex-wrap gap-x-14 w-max mx-auto">
                <li>Home</li>
                <li>Experience</li>
                <li>News</li>
                <li>About us</li>
                <li>Jobs</li>
                <li>Contact</li>
            </ul>
    
            <ul className="flex gap-x-7 w-max mx-auto mt-7">
                <li>
                    <button className="">
                        <Image src={social_fb} height={24} width={24}/>
                     </button>
                </li>
                
                <li>
                    <button  className="">
                        <Image src={social_twitter} height={24} width={24}/>
                     </button>
                </li>
    
                <li>
                    <button  className="">
                        <Image src={social_youtube} height={24} width={24}/>
                     </button>
                </li>
            </ul>
    
            <p className="text-gray-900 text-opacity-60 w-max mx-auto mt-7">&copy;  Copyright 2019 - Lift Media</p>
        </div>
    </footer>
  )
}
