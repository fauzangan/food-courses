import React, {useContext} from 'react'
import { ThemeContext } from "../context/themeprovider"
import { Link } from 'react-router-dom'

export default function Home() {
    const theme = useContext(ThemeContext);
  return (
    <section
  class="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center py-8 h-[509px] bg-transparent">
  <div class="p-8 md:p-12 lg:px-16 lg:py-24">
    <div class="mx-auto max-w-xl text-center sm:text-left">
      <h2 className={theme.theme === "light" ? "text-2xl font-bold text-gray-900 md:text-3xl" : "text-2xl font-bold text-white md:text-3xl"}>
        Food E-Learning
      </h2>

      <p class="hidden text-gray-500 md:mt-4 md:block">
        Pembelajaran online untuk mahasiswa yang tidak bisa memasak di-kost, untuk itu kami hadir untuk membantu mahasiswa
        dalam memenuhi kebutuhan gizi mahasiswa sehari-hari, demi menjaga kesehatan mahasiswa agar tidak sakit, lalu IPK jelek,
        depresi dan bunuh diri.
      </p>

      <div class="mt-4 md:mt-8">
        <Link
          to="/courses"
          class="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400">
          Find Your Courses!
        </Link>
      </div>
    </div>
  </div>

  <img
    alt="Food"
    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    class="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-tl-[30px] md:h-[calc(100%_-_4rem)] md:rounded-tl-[60px]"
  />
</section>

  )
}
