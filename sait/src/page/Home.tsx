import React from "react";
import {useLogic} from "../myhooks/logic";
import {Header} from "../components/Header";
import {Search} from "../components/Search";
import {Goods} from "../components/Goods";

export function Home(){
    const {data} = useLogic()

    return (
        <div className="main">

            <Header>
                <Search/>
            </Header>
            {data.map(data => <Goods data={data} key={data.id}/>)}

        </div>
    )
}