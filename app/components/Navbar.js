import React from 'react'

function Navbar() {
  return (
    <div className='border-b border-[#000]'>
      <div className='w-3/4 flex items-center justify-between m-auto py-5'>
        <div className=''>
          <a href="/" className='text-3xl font-semibold'> <span className='text-red-600'>N!</span>OLX</a>
        </div>
        <div className='flex items-center space-x-5'>
          <a className='text-xl font-semibold border-2 border-red-600 py-2 px-3 rounded-full' href='/'>Home</a>
          <a href="/products" className='text-xl font-semibold border-2 border-[#000] text-red-600 px-3 py-2 rounded-full'>Products</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar