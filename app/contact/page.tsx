
import React from 'react'

interface userType  {
    name: string,
    age : number,
    id : number
}
const  ContactPage = async () => {
const res = await fetch('https://64d0d90fff953154bb79910c.mockapi.io/userInfos' , {
    next : {
        revalidate : 15,
    }
})
const userInfos = await res.json()
 
  return (
    <div className='bg-white'>
        <h1>bienvenue ContactPage</h1>
        {
            userInfos.map((user : userType)=> (
                <div className='bg-gray-100 shadow-md py-1 my-2 px-20'>
                    <h1 className='text-2xl font-bold'>{user.id}</h1>
                    <h1>{user.name}</h1>
                    <h1>{user.age}</h1>
                </div>
            ))
        }
    </div>

  )
}

export default ContactPage