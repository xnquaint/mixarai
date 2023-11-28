import { useEffect, useState } from 'react';
import { translate } from '../utils/translate'
import cn from 'classnames';

// eslint-disable-next-line react/prop-types
function ButtonMenu({ lang }) {
  const [text, setText] = useState(translate('block2.P1.text', lang));
  const [activeButton, setActiveButton] = useState(1);
  const [code, setCode] = useState('block2.P1.text');

  useEffect(() => {
    const generatedText = translate(code, lang);
    setText(generatedText);
  }, [lang, code]);

  const handleClick = (code, id) => {
    setCode(code);
    setActiveButton(id);
    const generatedText = translate(code, lang);
    setText(generatedText);
  }

  return (
    <div className='w-full bg-white py-10 px-4' id='capabilities'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center items-center'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>{translate('link2.title', lang)}</h1>
        <div className='flex py-12 min-h-[500px]'>
          <div className='flex flex-col mr-10 sm:mx-10 gap-4'>
            <button
              className={cn('button', {
                'bg-white text-black border-2 border-black': activeButton === 1,
              }, 'bg-black text-white w-[80px] sm:w-[160px] md:w-[240px] rounded-md h-10 text-xs sm:text-lg md:text-xl ease-in-out duration-100')}
              onClick={() => handleClick('block2.P1.text', 1)}
            >
              {translate('block2.P1.title', lang)}
            </button>

            <button
              className={cn('button', {
                'bg-white text-black border-2 border-black': activeButton === 2,
              }, 'bg-black text-white w-[80px] sm:w-[160px] md:w-[240px] rounded-md h-10 text-xs sm:text-lg md:text-xl ease-in-out duration-100')}
              onClick={() => handleClick('block2.P2.text', 2)}
            >
              {translate('block2.P2.title', lang)}
            </button>

            <button
              className={cn('button', {
                'bg-white text-black border-2 border-black': activeButton === 3,
              }, 'bg-black text-white w-[80px] sm:w-[160px] md:w-[240px] rounded-md h-10 text-xs sm:text-lg md:text-xl ease-in-out duration-100')}
              onClick={() => handleClick('block2.P3.text', 3)}
            >
              {translate('block2.P3.title', lang)}
            </button>

            <button
              className={cn('button', {
                'bg-white text-black border-2 border-black': activeButton === 4,
              }, 'bg-black text-white w-[80px] sm:w-[160px] md:w-[240px] rounded-md h-10 text-xs sm:text-lg md:text-xl ease-in-out duration-100')}
              onClick={() => handleClick('block2.P4.text', 4)}
            >
              {translate('block2.P4.title', lang)}
            </button>
          </div>

          <div className='max-w-[300px] sm:max-w-[480px] md:max-w-[720px] min-h-[510px]'>
            <p className='buttonText text-xl sm:text-2xl md:text-3xl'>{text}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ButtonMenu