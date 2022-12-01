import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { RiSunFill, RiMoonFill } from "react-icons/ri";
import { ThemeContext } from "../context/themeprovider";

export default function Header() {
    const theme = useContext(ThemeContext);
  return (
    <header aria-label="Site Header">
    <div class="mx-auto max-w-screen-xl p-6">
      <div class="flex items-center justify-between gap-4 lg:gap-10">
        <div class="flex lg:w-0 lg:flex-1">
          <a href="#">
            <span class="sr-only">Logo</span>
            <span class="h-10 w-20 rounded-lg bg-gray-200"></span>
          </a>
        </div>
  
        <nav
          aria-label="Site Nav"
          class="hidden gap-8 text-sm font-medium md:flex"
        >
          <Link class="text-gray-500" to="/home" >Home</Link>
          <Link class="text-gray-500" to="/courses">Courses</Link>
          <Link class="text-gray-500" to="/about">About</Link>
        </nav>
        <div>
              {theme.theme === "light" ? (
                <RiMoonFill
                  className="hover:cursor-pointer"
                  onClick={() => theme.setTheme("dark")}
                />
              ) : (
                <RiSunFill
                  className="hover:cursor-pointer text-white"
                  onClick={() => theme.setTheme("light")}
                />
              )}
            </div>
      </div>
    </div>
  </header>
  
  )
}
