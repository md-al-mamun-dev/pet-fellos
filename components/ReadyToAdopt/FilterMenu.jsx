import React from 'react'

export default function FilterMenu() {
  return (
    <ul className="max-w-screen-2xl px-14 mx-auto flex gap-x-2 text-slate-500 font-medium text-lg mt-12 z-30">
        <li className="cursor-pointer py-2 px-6 rounded-3xl filter-active">All</li>
        <li className="cursor-pointer py-2 px-6 rounded-3xl">Cat</li>
        <li className="cursor-pointer py-2 px-6 rounded-3xl">Dog</li>
        <li className="cursor-pointer py-2 px-6 rounded-3xl">Bird</li>
        <li className="cursor-pointer py-2 px-6 rounded-3xl">Others</li>
    </ul>
  )
}
