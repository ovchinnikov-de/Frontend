import React from "react";
import {Link} from "react-router-dom";


export function Path(){
    return(
        <nav className="path">
            <div>
                <Link className="path1" to="/">Товары</Link>
            </div>
            <div>
                 <Link className="path2" to="/about">О нас</Link>
            </div>
        </nav>
    )
}

