import React, { useState, useEffect } from "react"
import '../stylesheets/Global.css';

import Menu from "../components/Menu"
function Homepage() {

   

    return (
        <main>
            <div className="home">
                <div className="homepage-picture">

                </div>
                <div className="header">
                    <h1 className="title">
                        Manso Coin
                    </h1>
                </div>
                <div className="sub-header">
                    <h2>A cooler, yet much more elaborate way to handle favours</h2>
                </div>
                <div className="icon">
                    <div className="icon-child"></div>
                </div>
                <div className="sidebar">

                </div>
                <div className="bottom">

                </div>
                <Menu/>
            </div>
        </main>

    )
}

export default Homepage