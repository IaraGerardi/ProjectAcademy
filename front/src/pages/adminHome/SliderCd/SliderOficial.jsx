import "./slideroficial.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import axios from "axios";

import nextimg from "../SliderCd/assets/nextimg.png";

function SliderOfficial() {
  const [notice, setNotice] = useState([]);

  useEffect(() => {
    const informationNotice = async () => {
      const url = `${process.env.REACT_APP_BASE_URL}/news`;
      const result = await axios.get(url, { withCredentials: true });

      setNotice(result.data.info);
    };
    informationNotice();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider className="slider-one" {...settings}>
      {notice.map((data) => (
        <div key={data.id} className="card">
          <div className="content-card-cd">

            <div className="title-content">{data.titulo}</div>

            <div className="data-content">
              <div>{data.content}</div>

              <div className="flex">

                <div>
                  <div className="mt-3 box-plus-oriented-cd">
                    <a target="_blank" rel="noreferrer" href={data.link}>
                      <u>Ver más</u>
                    </a>
                  </div>
                  <div className="box-line-oriented-two-cd"></div>
                </div>

                <div>
                  <img className="img-next" src={nextimg} alt="imagen next" />
                </div>
                
              </div>
            </div>
          
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default SliderOfficial;