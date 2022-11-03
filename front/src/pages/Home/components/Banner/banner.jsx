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

    const activeItemStyle = (number) => {
        const buttonStyle = "w-2 h-2 m-1 rounded-md"
        if (number === item) {
            return `${buttonStyle} bg-celesteValtech`
        }

        return `${buttonStyle} bg-zinc-300`
    }

    return (
        <div className="banner">
            <div className="buttonsBanner">
                <div onClick={itemLess} className="arrow cursor-pointer">
                    <Icon classname="w-5 h-5" type="leftArrow" width="24" height="24" />
                </div>
                <div className="flex flex-row relative top-36 z-20">
                    <button className={activeItemStyle(0)} onClick={()=> {setItem(0)}}/>
                    <button className={activeItemStyle(1)} onClick={()=> {setItem(1)}}/>
                    <button className={activeItemStyle(2)} onClick={()=> {setItem(2)}}/>
                </div>
                <div onClick={itemPlus} className="arrow cursor-pointer">
                    <Icon classname="w-5 h-5" type="rightArrow" width="24" height="24" />
                </div>
            </div>
            <ul className="bannerUL">{bannerItems[item]}</ul>
        </div>
    )
}