import { FaTelegram } from 'react-icons/fa';
import { TfiEmail } from 'react-icons/tfi';
import { FaRobot } from 'react-icons/fa';
import { translate } from '../utils/translate';

// eslint-disable-next-line react/prop-types
function Footer({ lang }) {
  return (
    <div className='mx-auto py-10 px-4 flex flex-col bg-white'>
      <div className='mx-auto'>
        <h1 className='md:text-2xl sm:text-xl text-lg font-bold'>
         {translate('block4.title', lang)}
        </h1>
      </div>
      <div className='flex justify-center gap-10 my-8'>
        <a
          href="https://t.me/mxaimngr"
          target='_blank' rel="noreferrer"
        >
          <FaTelegram size={50}/>
        </a>
        <a
          href="mailto: mikgysome@gmail.com"
          target='_blank' rel="noreferrer"
        >
          <TfiEmail size={50}/>
        </a>
        <a
          href="https://t.me/assistantmxai_bot"
          target='_blank' rel="noreferrer"
        >
          <FaRobot size={50}/>
        </a>
      </div>
    </div>
  )
}

export default Footer