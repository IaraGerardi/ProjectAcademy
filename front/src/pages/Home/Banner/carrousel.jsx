import React, { useState } from "react";
import news from "./news.json";
import { CarrouselItem } from "./carrousel-item";

export function Carrousel() {
    const [item, cambiarItem] = useState(0);
    const novedades = news.map((news, index) => <CarrouselItem news={news} index={index} />);
    const restarItem = () => { item < 1 ? cambiarItem(news.length - 1) : cambiarItem(item - 1) }
    const sumarItem = () => { item >= news.length - 1 ? cambiarItem(0) : cambiarItem(item + 1) }
    // let a = setInterval(sumarItem, 2000);

    return (
        <div className="carrousel">
            <div className="botonesCarrousel">
                <div onClick={restarItem} className="flecha Izq">
                    <span className="iconify botonSuma" data-icon="akar-icons:arrow-left" />
                </div>
                <div onClick={sumarItem} className="flecha Der">
                    <span className="iconify botonSuma" data-icon="akar-icons:arrow-right" />
                </div>
            </div>
            <ul className="novedades">{novedades[item]}</ul>
        </div>
    )
}