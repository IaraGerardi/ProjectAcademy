import React, { useState } from "react";
import news from "./news.json";
import { BannerItem } from "./banner-item";
import Icon from "../../../global-components/Svg-icon";
import "./banner.css"
export function Banner() {
    const [item, setItem] = useState(0);

    const bannerItems = news.map((news, index) => <BannerItem news={news} index={index} />);

    const itemLess = () => { item < 1 ? setItem(news.length - 1) : setItem(item - 1) }
    const itemPlus = () => { item >= news.length - 1 ? setItem(0) : setItem(item + 1) }
    // let timer = setInterval(sumarItem, 2000);

    return (
        <div className="banner">
            <div className="buttonsBanner">
                <div onClick={itemLess} className="arrow left">
                    <Icon type="leftArrow"
                        width="20"
                        height="20" />
                </div>
                <div onClick={itemPlus} className="arrow right">
                    <Icon type="rightArrow"
                        width="20"
                        height="20" />
                </div>
            </div>
            <ul className="bannerUL">{bannerItems[item]}</ul>
        </div>
    )
}