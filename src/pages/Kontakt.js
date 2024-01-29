import React from 'react'

export default function Kontakt() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    var lis
    setTimeout(function () {
        lis = document.querySelectorAll('.PcNavigation li')
        lis[0].style.cssText += 'border-bottom: none'
        lis[5].style.cssText += 'border-bottom: 2px solid rgb(255, 119, 0)'
        lis[1].style.cssText += 'border-bottom: none'
        lis[3].style.cssText += 'border-bottom: none'
        lis[2].style.cssText += 'border-bottom: none'
        lis[4].style.cssText += 'border-bottom: none'
    }, 100)
    return (
        <div className="kontakt">
            <section className="section1">
                <div className="first">
                    <h1><span>3G</span> Mobile</h1>
                    <div className="info">
                        <div className="kontaktDiv">
                    <div className="kontact">
                        <a target="_blank" rel="noreferrer" href="https://www.google.com/maps/place/1+Vu%C4%8Dedolska,+Podgorica/@42.4413929,19.2612096,3a,75y,203.86h,85.31t/data=!3m6!1e1!3m4!1sg_WjIzuYLbTNEo82GHjUcA!2e0!7i13312!8i6656!4m5!3m4!1s0x134deb4845106dcf:0xcac8cfa3ac8bc9e7!8m2!3d42.4412661!4d19.2612337?hl=en" >
                            <span>
                                <i className="fa fa-map-marker"></i>
                            </span>
                            <p>1 Vučedolska, Podgorica</p>
                        </a>
                    </div>
                    <div className="kontact">
                        <a target="_blank" rel="noreferrer" href="mailto:info@3gmobile.me">  
                            <span>
                                <i className="fa fa-envelope "></i>
                            </span>
                            <p>info@3gmobile.me</p>
                        </a>
                    </div>
                    <div className="kontact">
                        <a  href="tel:+38269288588">
                            <span>
                                <i className="fa fa-phone"></i>
                            </span>
                            <p>069288588</p>
                        </a>
                    </div>
                    <div className="kontact">
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/3g_mobilepg/">   
                            <span>
                                <i className="fa fa-instagram"></i>
                            </span>
                            <p>@3g_mobilepg</p>
                        </a>
                    </div>
                </div>
                </div>
                </div>
                <div className="second">
                    <img src="images/logo/prostorija.jpg" alt="" />
                </div>
            </section>
        </div>
    )
}
