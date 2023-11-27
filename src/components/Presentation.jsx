import Photos from './Photos'

// eslint-disable-next-line react/prop-types
function Presentation({ lang }) {
  return (
    <div className='max-w-[400px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px] min-h-[700px] flex justify-center items-center mx-auto'>
      <Photos lang={lang}/>
    </div>
  )
}

export default Presentation