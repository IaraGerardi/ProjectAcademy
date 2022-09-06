import React from "react";
import { NavLink } from "react-router-dom";

export function BannerItem({ news , index }) {
  return (
    <li className="carrouselItem" key={index.toString()}>
        <div className="contentItemBanner">
          <h2>{news.title}</h2>
          <p>{news.description}</p>
        </div>
        <img src={news.bgImage} alt={news.title}/>
    </li>
  )
}