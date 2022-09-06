import React from "react";
import { NavLink } from "react-router-dom";

export function CarrouselItem({ news , index }) {
  return (
    <li className="carrouselItem" key={index.toString()}>
      <NavLink to={news.redirect}>
        <div className="contenido">
          <h2>{news.title}</h2>
          <p>{news.description}</p>
        </div>
        <img src={news.bgImage} alt={news.title}/>
      </NavLink>
    </li>
  )
}