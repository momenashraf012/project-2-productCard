import React from 'react'

const ProductCard = () => {
  return (
<>

<div className='border border-black p-2 rounded-md flex flex-col max-w-sm mx-auto md:max-w-lg  md:mx-0  '>
  <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
  <h3>titie</h3>
  <p>description</p>

 

  <div className='flex gap-3 my-2'>
    <span className='w-5 h-5 bg-red-600 rounded-full'></span>
    <span className='w-5 h-5 bg-red-600 rounded-full'></span>
    <span className='w-5 h-5 bg-red-600 rounded-full'></span>
  </div>


  <div className='flex items-center justify-between'>
    <span>price</span>
    <img  className='w-10 h-10 rounded-full object-cover' src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
  </div>
  <div className='flex my-2  gap-3'>
    <button className='bg-red-600 text-white w-full p-2 rounded-md '>Edit</button>
    <button className='bg-green-500 text-white w-full p-2 rounded-md'>Cancel</button>

  </div>

 
  
</div>

</>
 
  )
}

export default ProductCard