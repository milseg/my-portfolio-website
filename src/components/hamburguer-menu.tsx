import * as React from 'react'
import { Link } from 'gatsby'


const HamburguerMenu = () => {
  let [menuOpen, setMenuOpen] = React.useState<boolean>(false)
  const anchorClas = "text-lg text-zinc-700 active:text-[#010177] hover:text-zinc-900 dark:text-zinc-300 dark:active:text-zinc-[#cceeff] dark:hover:text-zinc-100 mx-4"
    const linkClass = `bg-gradient-to-t from-[#bbbbff] to-transparent dark:from-purple-800 dark:to-purple-800 pb-1 text-purple-800 dark:text-zinc-300 text-lg hover:from-black hover:to-black hover:text-yellow-200 text-center rounded-lg border border-grey-600 dark:border-white`

  return (
    <div className="md:hidden">
      <button
        aria-label="Open Menu"
        className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white bg-gradient-to-t from-[#bbbbff] to-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg className="h-6 w-6 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
      <div className={`${menuOpen ? "block" : "hidden"} absolute top-0 inset-x-0 p-2 transition transform origin-top-right z-20`}>
        <div className="rounded-lg shadow-md bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 overflow-hidden z-20 h-[180px]">
          <div className="px-5 pt-4 flex items-center justify-between">
            <div className="h-[50px]">
              {/* Branding or logo */}
              {/* <img src="https://placehold.co/50x50" alt="logo" /> */}
            </div>
            <div className="-mr-2">
              <button
                aria-label="Close menu"
                className="bg-white dark:bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={() => setMenuOpen(false)}
              >
                <span className="sr-only">Close main menu</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div className="px-2 pt-2 pb-3 grid grid-cols-4 gap-4">
            <Link to="/" className={linkClass}>Home</Link>
            <Link to="/about" className={linkClass}>About</Link>
            <Link to="/linktree" className={linkClass}>Linktree</Link>
            <Link to="/contact" className={linkClass}>Contact</Link>
            <Link to="/portfolio" className={linkClass}>Portfolio</Link>
          </div>
        </div>
      </div>
    </div>
  )
}


export default HamburguerMenu




