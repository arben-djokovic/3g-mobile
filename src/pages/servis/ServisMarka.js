import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Data from '../store/StorePhones'

export default function ServisMarka() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
   

    var markaTest = window.location.href.split('/')[window.location.href.split('/').length - 1]
    var [marka, setMarka] = useState(markaTest)

    return (
        <div className="servisMarka">

            {
                Data[0].map(phone => {
                    if(phone.marka === marka){
                        return <Link key={phone.id} to={'servis-phone/' + phone.id}>
                         <div  className="servisPhone" id={phone.id}>
                            <img src={'../' + phone.src[0]} alt="" />
                            <div className="text">
                                <h4>{phone.name}</h4>
                                <p className="cijena">{phone.cijena} <p className="valuta">EUR</p></p>
                                </div>
                                <div className="r">{'>'}</div>
                            </div>
                         </Link>
                    }
                })
            }
        </div>
    )
}
