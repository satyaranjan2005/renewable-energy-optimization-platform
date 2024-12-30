import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-green1 h-screen w-60'>
        <div className='p-10 flex justify-center items-center flex-col'>
            <h1 className='text-green4 text-4xl font-bold'>Energy</h1>
            <h1 className='text-green4 font-bold'>Optimization</h1>
        </div>
        <div className='p-5'>
            <h2 className='py-5 text-green4 font-bold'>MENU</h2>
            <div>
                <ul className='flex flex-col gap-4'>
                    <li>
                        <Link className='flex gap-2' to={'/'}>
                        <img src="/images/dashboard.svg" alt="" />
                        <p className='text-green4'>Overview</p>
                        </Link>
                    </li>
                    <li>
                        <Link className='flex gap-2' to={'/statistics'}>
                        <img src="/images/statistics.svg" alt="" />
                        <p className='text-green4'>Statistics</p>
                        </Link>
                    </li>
                    <li>
                        <Link className='flex gap-2' to={'/consumption'}><img src="/images/consumption.svg" alt="" />
                        <p className='text-green4'>Consumption</p></Link>
                    </li>
                    <li>
                        <Link className='flex gap-2' to={'/earning'}><img src="/images/earning.svg" alt="" />
                        <p className='text-green4'>Earning</p></Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar
