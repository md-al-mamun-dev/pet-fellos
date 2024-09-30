import Image from "next/image"
import logo from '@/public/logo.png'

export default function Header() {
  return (
    <div className=" max-w-screen-2xl mx-auto px-14 py-6 flex justify-between">
        <Image width={212} height={76} src={logo} alt="logo"/>
        <ul className="flex items-center gap-14">
            <li className="text-gray-900 font-medium text-base">Pet Food</li>
            <li><button className="btn-primary">Adopt out your pet</button></li>
            <li>
                {/*  This will be profile photo */}
                <div className="bg-gray-300 w-16 h-16 rounded-full"> </div>
            </li>
        </ul>
    </div>
  )
}
