import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-yellow-500 px-20 py-10'>
        <Link href='/'> Acceuil</Link>
        <Link href='/contact'> Contact</Link>
        <Link href='/posts/123'> Single Post</Link>
        <Link href='/apropos'> Apropos</Link>
    </div>
  )
}

export default Navbar