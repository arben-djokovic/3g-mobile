import React from 'react'
import Data from './store/StorePhones'
import { Link } from 'react-router-dom'
import { phonePagePhone } from '../redux/action'
import { useDispatch } from 'react-redux'


export default function Pocetna() {
    var lis
    var dispatch = useDispatch()
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    setTimeout(function () {
        lis = document.querySelectorAll('.PcNavigation li')
        lis[1].style.cssText += 'border-bottom: none'
        lis[0].style.cssText += 'border-bottom: 2px solid rgb(255, 119, 0)'
        lis[2].style.cssText += 'border-bottom: none'
        lis[3].style.cssText += 'border-bottom: none'
        lis[4].style.cssText += 'border-bottom: none'
    }, 100)
    function openTelefoni() {
    }
    function openPhonePage(e) {
        dispatch(phonePagePhone(e.target.id))
        lis = document.querySelectorAll('.PcNavigation li')
        lis[1].style.cssText += 'border-bottom: none'
        lis[0].style.cssText += 'border-bottom: 2px solid rgb(255, 119, 0)'
        lis[2].style.cssText += 'border-bottom: none'
        lis[3].style.cssText += 'border-bottom: none'
        lis[4].style.cssText += 'border-bottom: none'
        lis[5].style.cssText += 'border-bottom: none'
    }
    return (
        <div className='pocetna'>
            <ul className="markePocetna">
                <Link to="/telefoni/samsung">
                    <li onClick={openTelefoni}>Samsung</li>
                </Link>
                <Link to="/telefoni/iphone">
                    <li onClick={openTelefoni}>Apple</li>
                </Link>
                <Link to="/telefoni/xiaomi">
                    <li onClick={openTelefoni}>Xiaomi</li>
                </Link>
                <Link to="/telefoni/huawei">
                    <li onClick={openTelefoni}>Huawei</li>
                </Link>
                <Link to="/telefoni/oneplus">
                    <li onClick={openTelefoni}>One Plus</li>
                </Link>
            </ul>
            <div className="noviModeli">
                <div className="textModel">
                    <h2>Novi modeli</h2>
                    <Link to="/telefoni">
                        <button onClick={openTelefoni}>Vidji sve</button>
                    </Link>
                </div>
                <div className="phones">
                    {Data[1].map(phone => {
                        return (
                            <Link key={phone.id} to={'/telefon/' + phone.id}>
                                <div
                                    onClick={openPhonePage}
                                    id={phone.id}>
                                    <img src={phone.src} alt="" />
                                    <div className="text">
                                        <h4>{phone.name}</h4>
                                        <p className="cijena">{phone.cijena} <p className="valuta">EUR</p></p>
                                    </div>
                                    <div className="r">{'>'}</div>
                                </div></Link>)
                    })}
                </div>
            </div>
            <div className="radnoVrijeme">
                <div className="dostava"><h1>BESPLATNA <br /> DOSTAVA</h1></div>
                <div className="radnoVrijemeDiv">
                    <div className="vrijeme">
                        <div className="radniDan">
                        <h2>Radno vrijeme</h2>
                            <p>PONEDELJAK - SUBOTA</p>
                            <h2>08:00 - 22:00</h2>
                        </div>
                        <div className="vikend">
                            <p>NEDELJA</p>
                            <h2>08:00 - 22:00</h2>
                        </div>
                    </div>
                </div>
                <div className="slika"><img src="../images/servis-slike/servis.png" alt="" /></div>
            </div>
            <div className="noviModeli a2">
                <div className="textModel">
                    <h2>Najprodavaniji modeli</h2>
                    <Link to="/telefoni">
                        <button onClick={openTelefoni}>Vidji sve</button>
                    </Link>
                </div>
                <div className="phones">
                    {Data[2].map(phone => {
                        return (
                            <Link key={phone.id} to={'/telefon/' + phone.id}>
                                <div
                                    onClick={openPhonePage}
                                    id={phone.id}>
                                    <img src={phone.src} alt="" />
                                    <div className="text">
                                        <h4>{phone.name}</h4>
                                        <p className="cijena">{phone.cijena} <p className="valuta">EUR</p></p>
                                    </div>
                                    <div className="r">{'>'}</div>

                                </div></Link>)
                    })}
                </div>
            </div>
        </div>
    )
}
