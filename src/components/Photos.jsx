import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Photos() {
  return (
    <Carousel>
      <div>
        <img src="img/1.png" />
      </div>
      <div>
        <img src="img/2.png" />
      </div>
      <div>
        <img src="img/3.png" />
      </div>
      <div>
        <img src="img/4.png" />
      </div>
      <div>
        <img src="img/5.png" />
      </div>
      <div>
        <img src="img/6.png" />
      </div>
    </Carousel>
  )
}

export default Photos