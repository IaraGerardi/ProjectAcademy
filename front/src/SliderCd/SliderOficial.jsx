import "./slideroficial.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import axios from "axios";

function SliderOficial() {
  const [notice, setNotice] = useState([]);
  console.log(notice);

  // este es un pedido asincronico
  useEffect(() => {
    const ObtenerNotice = async () => {
    const url = "http://localhost:8000/admin/novedades";
    const result = await axios.get(url);
      // console.log(result.data);

      setNotice(result.data);
    };
    ObtenerNotice();
  }, []);

  //
  const settings = {
    dots: true,
    infinite: false,
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
        <div className="card">
          {/* <div className='card-top'> */}

          <div className="textouno">
            <h2>{data.titulo}</h2>
          </div>

          <div className="textodos">
            <p>{data.content}</p>
          

          </div>

          <div className="textotres">
           <button><a href={data.link}></a></button>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default SliderOficial;
