import React from "react";

export function CarrouselItem({ news , index }) {
  return (
    <li className="carrouselItem" key={index.toString()}>
        <div className="contenido">
          <h2>{news.title}</h2>
          <p>{news.description}</p>
        </div>
        <img src={news.bgImage} alt={news.title}/>
    </li>
  )
}