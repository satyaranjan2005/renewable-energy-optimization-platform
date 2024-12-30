import React from 'react'

const Profile = () => {
  return (
    <div className='h-28 p-5 flex items-center gap-2'>
      <img src="/images/profilePic.jpg" alt="" className='w-20 h-20 border-2 border-green1 rounded-full'/>
      <div>
        <p className='font-medium'>Welcome,</p>
        <h1 className='text-xl text-green2 font-semibold '>Satyaranjan</h1>
      </div>
    </div>
  )
}

export default Profile
