import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
        <div className="md:flex justify-between py-20 px-10 bg-red-500">
            <div className="md:w-1/2 mb-10 md: mb-0 items-center">
                <h2 className="text-4xl lg:text-6xl text-white mb-6">
                  Daystagram is on you way!
                </h2>
                <p className="text-2xl lg:text-4xl mb-6">
                  let's <span className="text-red-600">♥</span> on the fly ..
                </p>
                <div className="inline-block py-3 px-6 text-lg bg-white text-black rounded mr-2 mb-6">
                  <Link href="/signin">Sign in</Link>
                </div>
                <div className="inline-block py-3 px-6 text-lg bg-yellow-400 text-yellow-800 hover:bg-yellow-300 rounded mb-6">
                  <Link href="/signup">Sign Up</Link>
                </div>
            </div>
            <div className="hidden sm:block md:w-1/2">
                <img
                  alt="Inspiration start here!"
                  className="w-full rounded shadow-2xl"
                  src="/images/ian-schneider.jpg"
                />
            </div>
        </div>
        <div className="md:flex justify-end py-20 px-10 bg-red-600 text-white items-center">
            Copyright &copy; Daystagram 2021 - Infinity
        </div>
    </div>
  );
}