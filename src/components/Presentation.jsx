import Photos from './Photos'

// eslint-disable-next-line react/prop-types
function Presentation({ lang }) {
  return (
    <div id='presentation' className='max-w-[400px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[900px] min-h-[700px] flex  items-center mx-auto'>
      <Photos lang={lang}/>
    </div>
  )
}

export default Presentation