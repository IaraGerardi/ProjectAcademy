import React, { useState } from "react";
import news from "./news.json";
import { BannerItem } from "./banner-item";
import "./banner.css"
export function Banner() {
    const [item, setItem] = useState(0);

    const bannerItems = news.map((news, index) => <BannerItem news={news} index={index} />);

    const itemLess = () => { item < 1 ? setItem(news.length - 1) : setItem(item - 1) }
    const itemPlus = () => { item >= news.length - 1 ? setItem(0) : setItem(item + 1) }
    // let a = setInterval(sumarItem, 2000);

    return (
        <div className="banner">
            <div className="buttonsBanner">
                <div onClick={itemLess} className="arrow left">
                    <span className="iconify buttonLeft" data-icon="akar-icons:arrow-left" />
                </div>
                <div onClick={itemPlus} className="arrow right">
                    <span className="iconify buttonRight" data-icon="akar-icons:arrow-right" />
                </div>
            </div>
            <ul className="bannerUL">{bannerItems[item]}</ul>
        </div>
    )
}