import React from 'react'

export default function BottomSection() {
  return (
    <div className="bg-blue-100 h-56  relative  z-0 ">
        <ul className="absolute  max-w-screen-2xl mx-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-x-56 w-max mx-auto ">
            <li className="text-gray-800">
                <h2 className="text-5xl font-bold">234</h2>
                <p className="text-2xl font-medium">Waiting for home</p>
            </li>

            <li className="text-gray-800">
                <h2 className="text-5xl font-bold">234</h2>
                <p className="text-2xl font-medium">Adopted Total</p>
            </li>

            <li className="text-gray-800">
                <h2 className="text-5xl font-bold">234</h2>
                <p className="text-2xl font-medium">Vaccinated</p>
            </li>
        </ul>
    </div>
  )
}
