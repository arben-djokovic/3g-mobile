import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {

    function navBorder(e) {
        var links = document.querySelectorAll('.PcNavigation li')
        links.forEach(element => {
            element.style.cssText += 'border-bottom: none'
        });
        links[e.target.id].style.cssText += 'border-bottom: 2px solid rgb(255, 119, 0)'
    }
    return (
        <div className="footer">
            <div className="div 1">
                <Link to="/">
                    <h1 onClick={navBorder} id="0" className="logo"><span>3G</span> Mobile</h1>
                </Link>

                <p>Copyright © 2021 3G Mobile Store. All Rights Reserved.</p>
            </div>
            <div className="div 2">
                <h4>Stranice</h4>
                <ul>
                    <Link to="/">
                        <li id="0" onClick={navBorder}>Pocetna</li>
                    </Link>
                    <Link to="/telefoni">
                        <li id="1" onClick={navBorder}>Mobilni telefoni</li>
                    </Link>
                    <Link to="/servis">
                        <li id="2" onClick={navBorder}>Servis</li>
                    </Link>
                    <Link to="/uporedba">
                        <li id="3" onClick={navBorder}>Uporedba</li>
                    </Link>
                    <Link to="/kontakt">
                        <li id="4" onClick={navBorder}>Kontakt</li>
                    </Link>
                </ul>
            </div>
            <div className="div 3">
                <h4>Kontakt</h4>
                <ul>
                    <li> <a href="tel:+38269288588">
                        <i className="fa fa-phone" > 069-288-588</i>
                    </a></li>
                    <li> <a href="mailto:info@3gmobile.me">
                        <i className="fa fa-envelope-o" > info@3gmobile.me</i>
                    </a></li>
                    <li> <a target="_blank" rel="noreferrer" href="https://www.instagram.com/3g_mobilepg/">
                        <i className="fa fa-instagram"> 3g_mobilepg</i>
                    </a></li>
                </ul>
            </div>
        </div>
    )
}
