import {useEffect, useState} from "react";
import {IGoods} from "../inventory";
import axios from "axios";


export function useLogic(){
    const [data, setData]= useState<IGoods[]>([])

    async function server(){
        const reaction = await axios.get<IGoods[]>('https://fakestoreapi.com/products')
        setData(reaction.data)
    }

    useEffect(() =>{server()},[])

    return {data}
}