import React from "react";


interface HeaderProps{
  children: React.ReactNode
}

export function Header({children}: HeaderProps){
    return (
    <div className="header">
        <header>
            <div>

                {children}
            </div>

        </header>

    </div>
    )
}