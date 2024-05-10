import * as React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import HamburguerMenu from './hamburguer-menu'

type LayoutProps = {
  children: React.ReactNode;
  colour?: string;
  onDarkMode?: (s:boolean)=> void;
}

const getCookie = (name: string) => {
  if(typeof document === 'undefined') {
    return "";
  }

  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieParts = decodedCookie.split(';');

  for (let i = 0; i < cookieParts.length; i++) {
    const currentCookie = cookieParts[i].trim().split('=');
    if (currentCookie[0] === name) {
      return currentCookie[1];
    }
  }
  return "";
};

const setCookie = (cookieName: string, cookieValue: string | number, exp: number = 24) => {
  if(typeof document === 'undefined') {
    return;
  }

  const expires = new Date();
  expires.setTime(expires.getTime() + exp * 60 * 60 * 1000); // Set expiry to 1 day
  document.cookie = `${cookieName}=${cookieValue}; expires=${expires.toUTCString()}; path=/`;
};

const Layout = ({ colour = "bg-blue-600", children, onDarkMode = (s:boolean)=> {} }: LayoutProps) => {
  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(getCookie('isDarkMode') !== 'off');
  function toggle() {
    setCookie('isDarkMode', isDarkMode ? 'off' : 'on')
    setIsDarkMode(!isDarkMode);
  }

  function handleClick() {
    toggle();
  }

  React.useEffect(function() {
    onDarkMode(isDarkMode)
  }, [isDarkMode])

  function handleKeyDown({ key }: React.KeyboardEvent<HTMLElement>) {
    if (key === 'Enter') toggle()
  }
  const linkClass = "text-lg text-zinc-700 active:text-[#010177] hover:text-zinc-900 dark:text-zinc-300 dark:active:text-zinc-[#cceeff] dark:hover:text-zinc-100 mx-4"
  return (
    <div className={`container mx-auto px-4 py-12 w-full max-w-full ${isDarkMode ? 'bg-gray-900 dark' : 'bg-white'}`}>
      <div className="flex items-center justify-end mb-8">
        <div
          role="checkbox"
          aria-checked={isDarkMode ? 'true' : 'false'}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onClick={handleClick}
          className={`cursor-pointer w-11 h-5 ${colour} rounded-full relative px-1.5 flex items-center${isDarkMode ? '' : ' justify-end'}`}
        >
          <div className={`w-4 h-4 rounded-full absolute transform duration-200 ease-out bg-white left-0.5 ${isDarkMode ? 'translate-x-6' : 'translate-x-0'}`} />
          {isDarkMode ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
          )}
        </div>
      </div>
      <HamburguerMenu />
      <div className="hidden md:flex items-center justify-center mb-8">
        <Link to="/" className={linkClass}>Home</Link>
        <Link to="/about" className={linkClass}>About</Link>
        <Link to="/linktree" className={linkClass}>Linktree</Link>
        <Link to="/contact" className={linkClass}>Contact</Link>
        <Link to="/portfolio" className={linkClass}>Portfolio</Link>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col items-start justify-start min-h-screen px-5 py-10 gap-14 max-w-2xl">
          {children}
        </div>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

