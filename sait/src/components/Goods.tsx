import React, {useState} from "react";
import {IGoods} from "../inventory";

interface GoodsProps {
    data: IGoods
}

export function Goods({data}: GoodsProps){
    const [show,setShow] = useState(false)


    return (
        <div className="goods">
            <img src={data.image} className="img" alt={data.title}/>
            <p>{data.title}</p>
            <p className="price">{data.price}</p>
            <button className="button"
            onClick= {() => setShow(e => !e)}
            >
                {show ? "Свернуть описание": "Показать описание"}
            </button>

            {show && <p>
                {data.description}
            </p>}
        </div>
    )
}

