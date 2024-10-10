import React from 'react'

export const Navbar = () => {
  return (
    <nav className='flex justify-between bg-emerald-800 text-white'>
        <div className="logo">
            <span className='font-bold text-x1 mx-8'>iTask</span>       
     </div>
     <ul className="flex gap-8 mx-9">
        <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all'>Your Tasks</li>
     </ul>
    </nav>
  )
}
