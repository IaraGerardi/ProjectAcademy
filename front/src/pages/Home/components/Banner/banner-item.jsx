import React from "react";
import 'animate.css';

export function BannerItem({ news , index }) {
  return (
    <li className="animate__animated animate__fadeIn bannerItem" key={index.toString()}>
        <div className="contentItemBanner">
          <h2 className="text-5xl font-semibold">{news.title}</h2>
        </div>
        <img src={news.bgImage} alt={news.title}/>
    </li>
  )
}