import React from 'react'
import { Link } from 'react-router-dom'


export default function Servis() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    var lis
    setTimeout(function () {
        lis = document.querySelectorAll('.PcNavigation li')
        lis[0].style.cssText += 'border-bottom: none'
        lis[3].style.cssText += 'border-bottom: 2px solid rgb(255, 119, 0)'
        lis[1].style.cssText += 'border-bottom: none'
        lis[2].style.cssText += 'border-bottom: none'
        lis[4].style.cssText += 'border-bottom: none'
        lis[5].style.cssText += 'border-bottom: none'
    }, 100)
    function changeMarkaFunction(e) {
    }
    return (
        <div className="servis">
            <h2>Izaberite marku</h2>
            <div className="markeDiv">
            <Link to="/servis-marka/iphone" >
                <div onClick={changeMarkaFunction} id="iphone" className="marka">
                    <div id="iphone" className="img">
                         <img id="iphone" src="../images/logo/Apple-Apple.svg" alt="" />   
                    </div>
                    <h3 id="iphone">Apple</h3>
                </div>
            </Link>
            <Link to="/servis-marka/samsung" >
                <div onClick={changeMarkaFunction} id="samsung" className="marka">
                    <div id="samsung" className="img">
                         <img id="samsung" src="../images/logo/Samsung_Logo.svg" alt="" />   
                    </div>
                    <h3 id="samsung">Samsung</h3>
                </div>
            </Link>
            <Link to="/servis-marka/xiaomi" >
                <div onClick={changeMarkaFunction} id="xiaomi" className="marka">
                    <div className="img" id="xiaomi">
                         <img id="xiaomi" src="../images/logo/Xiaomi_Logo.svg" alt="" />   
                    </div>
                    <h3 id="xiaomi">Xiaomi</h3>
                </div>
            </Link>
            <Link to="/servis-marka/huawei" >
                <div onClick={changeMarkaFunction} id="huawei" className="marka">
                    <div className="img" id="huawei">
                         <img id="huawei" src="../images/logo/Huawei_Logo.png" alt="" />   
                    </div>
                    <h3 id="huawei">Huawei</h3>
                </div>
            </Link>
            <Link to="/servis-marka/oneplus" >
                <div onClick={changeMarkaFunction} id="oneplus" className="marka">
                    <div className="img" id="oneplus">
                         <img id="oneplus" src="../images/logo/oneplus_logo.png" alt="" />   
                    </div>
                    <h3 id="huawei">One Plus</h3>
                </div>
            </Link>
            </div>

        </div>
    )
}
