import React from 'react';

const projectCard = () => {
  return (
    <div className='border-2 w-[500px] bg-white shadow-md border-white border-opacity-20 p-8 rounded-md'>
        <h2 className='text-center text-teal-200 text-2xl'>Title</h2>
        <p>Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident qui ea tenetur numquam assumenda saepe, amet expedita adipisci commodi quia dolore officiis dolor debitis, deleniti illo voluptas, unde sequi eum!</p>
        <a href="/github" className='text-teal-200 hover:text-teal-600'>more</a>
    </div>
  )
}

export default projectCard