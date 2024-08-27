import React from 'react'

const Footer = () => {
  return (
    <div className="w-full bg-gray-100  py-4   "> 
    <div className='mx-6 my-3'>
<p className='text-sm'>India</p>
    </div>
<hr></hr>
<div className='w-full flex items-center justify-between flex-warp'>

<div className='flex space-x-4 text-sm mx-6'>
  <p>Advertising</p>
<p>Business</p>
<p>How Search works</p>
</div>

<div className='flex space-x-4 text-sm mx-6'>
  <p>Privacy</p>
<p>Terms</p>
<p>Settings</p>
</div>

</div>
    </div>
  )
}

export default Footer