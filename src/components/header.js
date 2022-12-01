import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <header aria-label="Site Header" class="shadow-sm bg-white">
    <div class="mx-auto max-w-screen-xl p-4">
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

  
        <div class="lg:hidden">
          <button class="rounded-lg bg-gray-100 p-2 text-gray-600" type="button">
            <span class="sr-only">Open menu</span>
            <svg
              aria-hidden="true"
              class="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewbox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>
  
  )
}
