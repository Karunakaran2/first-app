import React from "react";
import classes from './Topbar.module.css'

const Topbar = (props) => {
    return (
        <header>
            <nav className={classes.Topbar}>
                <img src="https://kran.co.in/resources/images/Kran-Logo-2024.svg" alt="Logo"></img>
            </nav>
        </header>
    );
}

export default Topbar;