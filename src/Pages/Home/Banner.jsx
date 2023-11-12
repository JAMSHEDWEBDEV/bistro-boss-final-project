
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../assets/images/01.jpg';
import img2 from '../../assets/images/02.jpg';
import img3 from '../../assets/images/03.png';
import img4 from '../../assets/images/04.jpg';
import img5 from '../../assets/images/05.png';
import img6 from '../../assets/images/06.png';

const Banner = () => {
    return (
        <div className="text-center">
            <Carousel>
                <div>
                    <img src={img1} />
                </div>
                <div>
                    <img src={img2} />
                </div>
                <div>
                    <img src={img3} />
                </div>
                <div>
                    <img src={img4} />
                </div>
                <div>
                    <img src={img5} />
                </div>
                <div>
                    <img src={img6} />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;