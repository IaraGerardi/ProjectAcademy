import "./slideroficial.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import axios from "axios";

function SliderOfficial() {
  const [notice, setNotice] = useState([]);
 

  useEffect(() => {
    const informationNotice = async () => {
      const url = `${process.env.REACT_APP_BASE_URL}/news`;
      const result = await axios.get(url, { withCredentials: true });

      setNotice(result.data);
    };
    informationNotice();
  }, []);

  //
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
          slidesToShow: 2,
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
    <Slider className="sliderone" {...settings}>
      {notice.map((data) => (
        <div key={data.id} className="card">
          <div className="textonecv text-2xl font-bold">
            <h2>{data.titulo}</h2>
          </div>

          <div className="texttwocv">
            <p>{data.content}</p>
          </div>

          <div className="texttreecv">
            <div className="Butoneffectone">
              <a target="_blank" href={data.link}>
                <u>Ver más</u>
              </a>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default SliderOfficial;
