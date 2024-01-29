import React from 'react'
import Data from '../store/StorePhones'


export default function ServisPhone() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    var phone = Data[0][window.location.href.split('/').slice(-1)]
    var lis
    setTimeout(function () {
        lis = document.querySelectorAll('.PcNavigation li')
        lis[1].style.cssText += 'border-bottom: none'
        lis[2].style.cssText += 'border-bottom: 2px solid rgb(255, 119, 0)'
        lis[0].style.cssText += 'border-bottom: none'
        lis[3].style.cssText += 'border-bottom: none'
        lis[4].style.cssText += 'border-bottom: none'
    }, 100)
    return (<div className='servis1'>
        <div className="name">{phone.name}</div>
             <div className="servisDiv">
                <div className="content">
                    <img src="../../images/servis-slike/promjena-ekrana.png" alt="" />
                    <div className="text">
                        <h3>Prednje staklo</h3>
                        <p className="price">{phone.servis[0]}€</p>
                    </div>
                </div>
                <div className="content">
                    <img src="../../images/servis-slike/promjena-displeja.png" alt="" />
                    <div className="text">
                        <h3>Staklo i display</h3>
                        <p className="price">{phone.servis[1]}€</p>
                    </div>
                </div>
                <div className="content">
                    <img src="../../images/servis-slike/zadnje-staklo.png" alt="" />
                    <div className="text">
                        <h3>Zadnje staklo</h3>
                        <p className="price">{phone.servis[2]}€</p>
                    </div>
                </div>
                <div className="content">
                    <img src="../../images/servis-slike/zamjena-baterije.png" alt="" />
                    <div className="text">
                        <h3>Promjena baterije</h3>
                        <p className="price">{phone.servis[3]}€</p>
                    </div>
                </div>
            </div> </div>
    )
}
