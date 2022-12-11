import React, {useState} from "react";
import {NavLink} from "react-router-dom";

export function Search(){

    const[value, setValue] = useState("")

    const submitReboot = (event: React.FormEvent) => {
        event.preventDefault()
    }

    return(
        <form className="form"
        onSubmit={submitReboot}>
            <input type="text"
                   className="search"
            placeholder="Поиск..."
            value={value}
            onChange={event => setValue(event.target.value)}/>
            <button className="search_button">Найти</button>
        </form>
    )
}
