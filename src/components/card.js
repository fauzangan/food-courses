import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Card({data}) {
    
  return (
    <Link to={`/courses/${data.id}`}>
  <article
    class="rounded-lg border border-gray-100 p-4 shadow-sm transition hover:shadow-lg sm:p-6 bg-white">
    <div className='flex flex-row justify-between items-center'>
    <span class="inline-block rounded bg-blue-600 p-2 text-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path
          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
        />
      </svg>
    </span>
    </div>
  
    
      <h3 class="mt-0.5 text-lg font-medium text-gray-900">
        {data.title}
      </h3>
   
  
    <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
      {data.description}
    </p>
  
    <p
      class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
    >
      Find out more
  
      <span
        aria-hidden="true"
        class="block transition group-hover:translate-x-0.5"
      >
        &rarr;
      </span>
    </p>
  </article>
  </Link>
  
  )
}
