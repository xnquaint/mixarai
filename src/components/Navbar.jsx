import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { translate } from '../utils/translate';
import Logo from '../assets/big_logo.jpg';

// eslint-disable-next-line react/prop-types
function Navbar({ lang, setLang }) {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <div className='flex justify-around items-center h-36 max-w-[1240px] mx-auto px-4 text-white'>
      <div className='bg-indigo-300'>
        <img src={Logo} alt="logo" className='object-cover h-24 w-24' />
      </div>
      <ul className='hidden md:flex text-xl'>
        <li className='p-4'>{translate('link2.title', lang)}</li>
        <li className='p-4'>{translate('link3.title', lang)}</li>
        <li className='p-4'>{translate('link4.title', lang)}</li>
      </ul>
      <div>
        <label htmlFor="language" className='block text-gray-900 dark:text-white'></label>
        <select id='language' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        onChange={(event) => setLang(event.target.value)}
        >

          <option disabled>Choose a language</option>
          <option value="en">English</option>
          <option value="ua">Українська</option>
          <option value="ru">Русский</option>
        </select>
      </div>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#fff] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <ul className='p-4 text-[#000] text-xl'>
          <li className='p-4 border-b border-gray-600'>{translate('link2.title', lang)}</li>
          <li className='p-4 border-b border-gray-600'>{translate('link3.title', lang)}</li>
          <li className='p-4'>{translate('link4.title', lang)}</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar