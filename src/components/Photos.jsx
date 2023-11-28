import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Slide1 from '../assets/1.png';
import Slide2 from '../assets/2.png';
import Slide3 from '../assets/3.png';
import Slide4 from '../assets/4.png';
import Slide5 from '../assets/5.png';
import Slide6 from '../assets/6.png';
import Slide1ua from '../assets/1ua.png';
import Slide2ua from '../assets/2ua.png';
import Slide3ua from '../assets/3ua.png';
import Slide4ua from '../assets/4ua.png';
import Slide5ua from '../assets/5ua.png';
import Slide6ua from '../assets/6ua.png';
import Slide1ru from '../assets/1ru.png';
import Slide2ru from '../assets/2ru.png';
import Slide3ru from '../assets/3ru.png';
import Slide4ru from '../assets/4ru.png';
import Slide5ru from '../assets/5ru.png';
import Slide6ru from '../assets/6ru.png';
import { useLayoutEffect, useState } from 'react';

// eslint-disable-next-line react/prop-types
function Photos({ lang }) {
  const [size, setSize] = useState([0, 0]);

  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // let widthX = size > 720 ? '100%' : '100%%';
  let thumbX = size > 720 ? 80 : 50;

  const slideComponents = {
    1: {
      'en': Slide1,
      'ua': Slide1ua,
      'ru': Slide1ru,
    },
    2: {
      en: Slide2,
      ua: Slide2ua,
      ru: Slide2ru,
    },
    3: {
      en: Slide3,
      ua: Slide3ua,
      ru: Slide3ru,
    },
    4: {
      en: Slide4,
      ua: Slide4ua,
      ru: Slide4ru,
    },
    5: {
      en: Slide5,
      ua: Slide5ua,
      ru: Slide5ru,
    },
    6: {
      en: Slide6,
      ua: Slide6ua,
      ru: Slide6ru,
    },
  };

  function handlePhotos(id) {
    return slideComponents[id] ? slideComponents[id][lang] : null;
  }

  return (
    <Carousel  thumbWidth={thumbX}>
      <div>
        <img src={handlePhotos(1)} />
      </div>
      <div>
        <img src={handlePhotos(2)} />
      </div>
      <div>
        <img src={handlePhotos(3)} />
      </div>
      <div>
        <img src={handlePhotos(4)} />
      </div>
      <div>
        <img src={handlePhotos(5)} />
      </div>
      <div>
        <img src={handlePhotos(6)} />
      </div>
    </Carousel>
  )
}

export default Photos