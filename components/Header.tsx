import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='flex p-5 justify-between sticky top-0 bg-white z-50 shadow-md'>
      {/* LEFT */}
      <div className='flex space-x-2 items-center'>
        <Image
          src='https://cdn.iconscout.com/icon/free/png-256/logo-3446031-2882300.png'
          alt='logo'
          height={30}
          width={30}
        />
        <div>
          <h1 className='font-bold'>
            The <span className='text-violet-500 '>AI</span> Image Generator
          </h1>
          <h2 className='text-xs'>
            Powered by DALL·E 2, Chat GPT & Microsoft Azure!
          </h2>
        </div>
      </div>
      {/* RIGHT */}
      <div className='flex text-xs md:text-base divide-x items-center text-gray-500'>
        <Link
          className='px-2 font-light text-right'
          href='https://www.linkedin.com/in/nicolas-limonoff-204773102/'
          target='_blank'
        >
          Linkedin
        </Link>
        <Link
          className='px-2 font-light text-right'
          href='https://www.linkedin.com/in/nicolas-limonoff-204773102/'
          target='_blank'
        >
          Github
        </Link>
      </div>
    </header>
  )
}

export default Header
