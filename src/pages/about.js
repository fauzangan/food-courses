import React from 'react'

export default function About() {
  return (
    <section>
  <div class="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 sm:py-10 lg:px-8">
    <div class="max-w-3xl">
      <h2 class="text-3xl font-bold sm:text-4xl">
        Food E-Learning by Kelompok 09
      </h2>
    </div>

    <div class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div class="relative h-64 overflow-hidden sm:h-80 lg:h-full">
        <img
          alt="Party"
          src="https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
          class="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div class="lg:py-16">
        <article class="space-y-4 text-gray-600">
          <p>
            Aplikasi ini dibuat untuk memenuhi tugas akhir praktikum RPLBK 2022, aplikasi ini dibuat oleh:
          </p>
          <p>- Fauzan Zaman</p>
          <p>- Fachrul</p>
          <p>- Erlin Sofia Sitohang</p>
          <p>- Ikhsan Arya W</p>
        </article>
      </div>
    </div>
  </div>
</section>

  )
}
