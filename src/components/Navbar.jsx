import { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { translate } from '../utils/translate';
import Logo from '../assets/big_logo.jpg';

// eslint-disable-next-line react/prop-types
function Navbar({ lang, setLang }) {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  useEffect(() => {
    if (nav) {
      document.body.style.overflow = 'hidden';
      return () => document.body.style.overflow = 'unset';
    }

  }, [nav]);

  return (
    <div className='flex justify-between items-center h-36 max-w-[1240px] mx-auto px-4 text-white'>
      <div className='bg-indigo-300'>
        <img src={Logo} alt="logo" className='object-cover h-24 w-24 sm:h-36 sm:w-36' />
      </div>
      <ul className='hidden md:flex text-xl'>
        <li className='p-4'>
          <a href="#capabilities">
            {translate('link2.title', lang)}
          </a>
        </li>
        <li className='p-4'>
          <a href="#presentation">
            {translate('link3.title', lang)}
          </a>
        </li>
        <li className='p-4'>
          <a href="#contact">
            {translate('link4.title', lang)}
          </a>
        </li>
      </ul>
      <div className='hidden md:flex'>
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
      <div onClick={handleNav} className='block px-4 md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#fff] ease-in-out duration-500' : 'fixed left-[-100%]'}>
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
        <ul className='p-4 text-[#000] text-xl'>
          <li className='p-4 border-b border-gray-600' onClick={handleNav}>
            <a href="#capabilities">
              {translate('link2.title', lang)}
            </a>
          </li>
          <li className='p-4 border-b border-gray-600' onClick={handleNav}>
            <a href="#presentation">
              {translate('link3.title', lang)}
            </a>
          </li>
          <li className='p-4' onClick={handleNav}>
            <a href="#contact">
              {translate('link4.title', lang)}
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar