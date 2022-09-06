import React, { useState } from "react";
import news from "./news.json";
import { CarrouselItem } from "./banner-item";

export function Carrousel() {
    const [item, setItem] = useState(0);
    const bannerItems = news.map((news, index) => <CarrouselItem news={news} index={index} />);
    const itemLess = () => { item < 1 ? setItem(news.length - 1) : setItem(item - 1) }
    const itemPlus = () => { item >= news.length - 1 ? setItem(0) : setItem(item + 1) }
    // let a = setInterval(sumarItem, 2000);

    return (
        <div className="carrousel">
            <div className="botonesCarrousel">
                <div onClick={itemLess} className="flecha Izq">
                    <span className="iconify botonSuma" data-icon="akar-icons:arrow-left" />
                </div>
                <div onClick={itemPlus} className="flecha Der">
                    <span className="iconify botonSuma" data-icon="akar-icons:arrow-right" />
                </div>
            </div>
            <ul className="novedades">{bannerItems[item]}</ul>
        </div>
    )
}