import { FaTelegram } from 'react-icons/fa';
import { TfiEmail } from 'react-icons/tfi';
import { FaRobot } from 'react-icons/fa';
import { translate } from '../utils/translate';

// eslint-disable-next-line react/prop-types
function Footer({ lang }) {
  return (
    <div id='contact' className='mx-auto py-10 px-4 flex flex-col bg-white'>
      <div className='mx-auto flex justify-center flex-col items-center max-w-[300px] sm:max-w-[1200px] mb-5'>
        <h1 className='md:text-2xl sm:text-xl text-lg font-bold mb-5 text-justify'>
         {translate('block4.title', lang)}
        </h1>
        <h1 className='md:text-2xl sm:text-xl text-lg font-bold  text-justify'>
         {translate('block4.title2', lang)}
        </h1>
      </div>
      <div className='flex justify-center gap-10 my-8'>
        <a
          href="https://t.me/mxaimngr"
          target='_blank' rel="noreferrer"
        >
          <FaTelegram size={60}/>
        </a>
        <a
          href="mailto: info.mxai@gmail.com"
          target='_blank' rel="noreferrer"
        >
          <TfiEmail size={60}/>
        </a>
        <a
          href="https://t.me/assistantmxai_bot"
          target='_blank' rel="noreferrer"
        >
          <FaRobot size={60}/>
        </a>
      </div>
    </div>
  )
}

export default Footer