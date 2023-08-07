import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <Link href='/'> Acceuil</Link>
        <Link href='/contact'> Contact</Link>
        <Link href='/posts/123'> Single Post</Link>
    </div>
  )
}

export default Navbar