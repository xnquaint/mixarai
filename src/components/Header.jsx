import { translate } from '../utils/translate'

// eslint-disable-next-line react/prop-types
function Header({ lang }) {
  return (
    <div className='text-white'>
      <div className='max-w-[1000px] mt-[-140px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <h1 className='font-bold p-4 md:text-5xl sm:text-4xl text-3xl mb-10'>
          {translate('logo.text', lang)}
        </h1>
        <div>
          <p className='md:text-2xl sm:text-xl text-lg md:py-6  text-justify p-4'>
           {translate('block1.P1', lang)}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Header