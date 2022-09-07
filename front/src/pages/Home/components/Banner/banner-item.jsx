import React from "react";

export function BannerItem({ news , index }) {
  return (
    <li className="bannerItem" key={index.toString()}>
        <div className="contentItemBanner">
          <h2>{news.title}</h2>
        </div>
        <img src={news.bgImage} alt={news.title}/>
    </li>
  )
}