import React from 'react'

const Header = () => {
  return (
    <div className=' bg-[#004767] shadow sticky top-0 z-50'>
          <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost justify-start text-white lg:hidden">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
    </div>
  )
}

export default Header