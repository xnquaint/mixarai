import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <div className='flex justify-between items-center h-36 max-w-[1240px] mx-auto px-4 text-white'>
      <div className='bg-indigo-300'>
        <img src="/big_logo.jpg" alt="logo" className='object-cover h-24 w-24'/>
      </div>
      <ul className='hidden md:flex text-xl'>
        <li className='p-4'>Our Capabilities</li>
        <li className='p-4'>Why You Need Our Assistant</li>
        <li className='p-4'>Connect with Us</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#fff] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <ul className='p-4 text-[#000] text-xl'>
          <li className='p-4 border-b border-gray-600'>Our Capabilities</li>
          <li className='p-4 border-b border-gray-600'>Why You Need Our Assistant</li>
          <li className='p-4'>Connect with Us</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar