import React from 'react'
import { useState } from 'react';
import { iphone } from '../redux/reducers/reducer-phone';
import Data from './store/StorePhones'

export default function Uporedba() {

    var lis
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    setTimeout(function () {
        lis = document.querySelectorAll('.PcNavigation li')
        lis[0].style.cssText += 'border-bottom: none'
        lis[4].style.cssText += 'border-bottom: 2px solid rgb(255, 119, 0)'
        lis[1].style.cssText += 'border-bottom: none'
        lis[3].style.cssText += 'border-bottom: none'
        lis[2].style.cssText += 'border-bottom: none'
        lis[5].style.cssText += 'border-bottom: none'
    }, 100)

    function trazi(e) {
        setSearchPhoneResult(e.target.value)
        if (e.target.value.length > 0) {

            document.querySelector(".searchResultUporedba").style.cssText = 'display: block'
        }
        else if (e.target.value.length === 0) {
            document.querySelector(".searchResultUporedba").style.cssText = 'display: none'
        }

    }
    function trazi2(e) {
        setSearchPhoneResult2(e.target.value)
        if (e.target.value.length > 0) {
            document.querySelector(".searchResultUporedba2").style.cssText = 'display: block'
        }
        else if (e.target.value.length === 0) {
            document.querySelector(".searchResultUporedba2").style.cssText = 'display: none'
        }
    }
    function focusirano(e) {
        idPhonePage = 0;
    }
    function unFocus(e) {
        // setSearchPhoneResult('')
        // setSearchPhoneResult2('')
        idPhonePage = 0;
        setTimeout(function () {
            document.querySelector(".searchResultUporedba").style.cssText = 'display: none'
            document.querySelector(".searchResultUporedba2").style.cssText = 'display: none'
        }, 100)

    }
    var [searchPhoneResult, setSearchPhoneResult] = useState('')
    var [searchPhoneResult2, setSearchPhoneResult2] = useState('')
    var [phone1, setPhone1] = useState({src: ['fds']})
    var [phone2, setPhone2] = useState({src: ['fds']})
    var idPhonePage = 0;
    if (phone2.src[0] !== 'fds'  || phone1.src[0] !== 'fds') {
        document.querySelector('.tabela').style.cssText = 'display: block'
    }
    return (
        <div className="uporedba">
            <div className="uporedbaDiv">
                <div className="traziDiv">
                    <div className="trazi">
                        <div className="header">
                            <i className="fa fa-mobile" ></i>
                            <p>Uporedi</p>
                        </div>
                        <input onFocus={focusirano} onBlur={unFocus} className="inputPhone1" value={searchPhoneResult} type="text" onChange={trazi} placeholder="unesite ime telefona" />
                        <div className="searchResultUporedba">

                            {

                                Data[0].map(phone => {
                                    if (phone.name.toLowerCase().indexOf(searchPhoneResult.toLowerCase()) >= 0 && searchPhoneResult.length > 0) {
                                        idPhonePage++;
                                        // if (idPhonePage < 4) {
                                        return (<div key={phone.id} onClick={() => {
                                            setSearchPhoneResult("")
                                            idPhonePage = 0;
                                            setPhone1(Data[0][phone.id])
                                            document.querySelector(".searchResultUporedba").style.cssText = 'display: none'
                                            // document.querySelector(".searchResultUporedba2").style.cssText = 'display: none'
                                            // setSearchPhoneResult('')
                                        }} id={phone.id} className="phone-search">
                                            <img src={'../' + phone.src[0]} alt="" />
                                            <div className="text">
                                                <h4>{phone.name}</h4>
                                                <p className="cijena">{phone.cijena}<p className="valuta">EUR</p></p>
                                            </div>
                                            <div className="vece">{'>'} </div>
                                        </div>)
                                        // }

                                    }
                                })
                            }
                        </div>
                    </div>
                    <div className="trazi">
                        <div className="header">
                            <i className="fa fa-mobile" ></i>
                            <p>Uporedi</p>
                        </div>
                        <input onFocus={focusirano} onBlur={unFocus} type="text" onChange={trazi2} value={searchPhoneResult2} placeholder="unesite ime telefona" />
                        <div className="searchResultUporedba2">
                            {

                                Data[0].map(phone => {
                                    if (phone.name.toLowerCase().indexOf(searchPhoneResult2.toLowerCase()) >= 0 && searchPhoneResult2.length > 0) {
                                        idPhonePage++;
                                        // if (idPhonePage < 4) {
                                        return (<div key={phone.id} onClick={() => {
                                            setSearchPhoneResult2("")
                                            idPhonePage = 0;
                                            setPhone2(Data[0][phone.id])
                                            // document.querySelector(".searchResultUporedba").style.cssText = 'display: none'
                                            document.querySelector(".searchResultUporedba2").style.cssText = 'display: none'
                                            // setSearchPhoneResult2('')
                                        }} id={phone.id} className="phone-search">
                                            <img src={'../' + phone.src[0]} alt="" />
                                            <div className="text">
                                                <h4>{phone.name}</h4>
                                                <p className="cijena">{phone.cijena}<p className="valuta">EUR</p></p>
                                            </div>
                                            <div className="vece">{'>'} </div>
                                        </div>)
                                        // }

                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="uporediDva">
                    <div className="images">
                        <div className="first">
                            <img src={ phone1.src[0]} alt="" />
                            <h4>{phone1.name}</h4>

                        </div>
                        <div className="second">
                            <img src={phone2.src[0]} alt="" />
                            <h4>{phone2.name}</h4>
                        </div>
                    </div>
                    <div className="tabela">
                        <h2>Specifikacije</h2>
                        <table >
                            <tr>
                                <th>Ekran:</th>
                                <td>{phone1.ekran + "'"}</td>
                                <td>{phone2.ekran + "'"}</td>
                            </tr>
                            <tr>
                                <th>Memorija:</th>
                                <td>{phone1.memorija + ' GB'}</td>
                                <td>{phone2.memorija + ' GB'}</td>
                            </tr>
                            <tr>
                                <th>Ram:</th>
                                <td>{phone1.ram + ' GB'}</td>
                                <td>{phone2.ram + ' GB'}</td>
                            </tr>
                            <tr>
                                <th>Cijena:</th>
                                <td>{phone1.cijena + ' €'}</td>
                                <td>{phone2.cijena + ' €'}</td>
                            </tr>
                            <tr>
                                <th>Baterija:</th>
                                <td>{phone1.baterija}</td>
                                <td>{phone2.baterija}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div >
    )
}
