import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { phonePagePhone, opremaAction } from '../redux/action'
import DataPhone from './store/StorePhones'
import DataOprema from './store/StorePratecaOprema'
import {  useDispatch } from 'react-redux'
import { samsungAction, iphoneAction, xiaomiAction, huaweiAction } from '../redux/action'
import { oneplusAction } from './../redux/action';


export default function Header() {
    var Data = [...DataPhone[0], ...DataOprema[0]]
    var dispatch = useDispatch()

    function openNav() {
        var nav = document.querySelector('.PhoneNavigation')
        var close = document.querySelector('.closeNav')
        nav.style.cssText += 'display: flex; '
        setTimeout(function () {
            nav.style.cssText += ' left: 0px;'

        }, 10)

        close.style.cssText += 'display: block'
        setTimeout(function () {
            close.style.cssText += 'opacity: 1;'
        }, 10)

    }
    function closeNav(e) {

        var nav = document.querySelector('.PhoneNavigation')
        var close = document.querySelector('.closeNav')
        nav.style.cssText += 'left: -70vw; '
        if (e.target.innerHTML === 'Samsung') {
            dispatch(samsungAction(true))
            dispatch(xiaomiAction(false))
            dispatch(iphoneAction(false))
            dispatch(huaweiAction(false))
            dispatch(oneplusAction(false))
        }
        else if (e.target.innerHTML === 'Iphone') {
            dispatch(samsungAction(false))
            dispatch(xiaomiAction(false))
            dispatch(iphoneAction(true))
            dispatch(huaweiAction(false))
            dispatch(oneplusAction(false))
        }
        else if (e.target.innerHTML === 'Xiaomi') {
            dispatch(samsungAction(false))
            dispatch(xiaomiAction(true))
            dispatch(iphoneAction(false))
            dispatch(huaweiAction(false))
            dispatch(oneplusAction(false))
        }
        else if (e.target.innerHTML === 'Huawei') {
            dispatch(samsungAction(false))
            dispatch(xiaomiAction(false))
            dispatch(iphoneAction(false))
            dispatch(huaweiAction(true))
            dispatch(oneplusAction(false))
        }
        else if (e.target.innerHTML === 'One Plus') {
            dispatch(samsungAction(false))
            dispatch(xiaomiAction(false))
            dispatch(iphoneAction(false))
            dispatch(huaweiAction(false))
            dispatch(oneplusAction(true))
        }
        else if (e.target.innerHTML === 'Mobilni telefoni') {
            dispatch(samsungAction(true))
            dispatch(xiaomiAction(true))
            dispatch(iphoneAction(true))
            dispatch(huaweiAction(true))
            dispatch(oneplusAction(true))
        }

        setTimeout(function () {
            nav.style.cssText += ' display: none'
        }, 300)
        close.style.cssText += ' opacity: 0'
        setTimeout(function () {
            close.style.cssText += 'display: none'
        }, 300)
    }
    function navBorder(e) {

        if (e.target.innerHTML === 'Mobilni telefoni') {
            dispatch(samsungAction(true))
            dispatch(xiaomiAction(true))
            dispatch(iphoneAction(true))
            dispatch(huaweiAction(true))
            dispatch(oneplusAction(true))
        }
        var links = document.querySelectorAll('.PcNavigation li')
        links.forEach(element => {
            element.style.cssText += 'border-bottom: none'
        });
        links[e.target.id].style.cssText += 'border-bottom: 2px solid rgb(255, 119, 0)'
    }
    function closeSearchPhone(e) {
        idPhone = 0;
        setSearchPhoneResult('')
        e.target.parentElement.parentElement.parentElement.style.cssText += 'display: none'
    }
    function openPhoneSearch() {

        if (window.innerWidth < 1100) {
            document.querySelector(".searchphoneveci").style.cssText += 'display: none'
            document.querySelector(".searchOpen").style.cssText += 'display: block'
        }
        else {
        }
    }
    var searchValue
    function search(e) {
        setSearchPhoneResult(e.target.value)
        document.querySelector('.closeSearchInput').style.cssText = 'display: block'
        var searchResults = document.querySelector(".searchResults")
        searchValue = e.target.value.toLowerCase()
        if (searchPhoneResult.length >= 0) {
            searchResults.style.cssText += 'display: block'

        }
        else {
            document.querySelector('.closeSearchInput').style.cssText = 'display: none'
            searchResults.style.cssText += 'display: none'
        }
    }
    var [searchPhoneResult, setSearchPhoneResult] = useState('')

    function searchPhone(e) {
        setSearchPhoneResult(e.target.value)
        var searchResults = document.querySelector(".searchphoneveci")
        searchResults.style.cssText += 'display: none'

        searchValue = e.target.value.toLowerCase()
        if (searchValue.length > 0) {
            searchResults.style.cssText += 'display: block '
        }
        else {
        }
        idPhone = 0;
    }
    var idPhone = 0;
    var idPhonePage = 0;
    function closeSearch() {
        document.querySelector('.closeSearchInput').style.cssText = 'display: none'
        document.querySelector(".searchResults").style.cssText += 'display: none'
    }
    return (
        <header>
            <div className="headerDiv1">
                <i className="fa fa-bars" onClick={openNav}></i>
                <Link to="/">
                    <h1 id="0" onClick={navBorder} className="logo"> <span>3G</span>  Mobile</h1>
                </Link>
                <div className="searchbig">
                    <div className='sb'>
                        <div className="search">
                            <input type="text" value={searchPhoneResult} onChange={search} placeholder='Unesite ime proizvoda' />
                            <button className="fa fa-search" onClick={openPhoneSearch}></button>
                        </div>
                        <div className="searchResults">
                            <i className="fa fa-close" onClick={closeSearch}></i>

                            <div className="phones-search">
                                {
                                    Data.map(phone => {
                                        if (phone.name.toLowerCase().indexOf(searchPhoneResult.toLowerCase()) >= 0) {
                                                if(phone.store === 'phones'){
                                                    return (<Link key={phone.id} to={'/telefon/' + phone.id}>
                                                <div onClick={() => {
                                                    idPhone = 0
                                                    document.querySelector("body").style.cssText += 'overflow-y: auto'
                                                    dispatch(phonePagePhone(phone.id))
                                                    document.querySelector(".closeSearchInput").style.cssText = 'display: none'
                                                    document.querySelector(".searchResults").style.cssText = 'display: none'
                                                    document.querySelector(".searchOpen").style.cssText = 'display: none'
                                                    setSearchPhoneResult('')
                                                  
                                                }} className="phone-search">
                                                    <img src={'../' + phone.src[0]} alt="" />
                                                    <div className="text">
                                                        <h4>{phone.name}</h4>
                                                        <p className="cijena">{phone.cijena}<p className="valuta">EUR</p></p>
                                                    </div>
                                                    <div className="vece">{'>'} </div>
                                                </div>
                                            </Link>)
                                                }
                                                else if(phone.store === 'oprema'){
                                                    return (<Link key={phone.id + 'a'} to={'/oprema/' + phone.id}>
                                                <div onClick={() => {
                                                     document.querySelector("body").style.cssText += 'overflow-y: auto'
                                                    idPhone = 0
                                                    dispatch(opremaAction(phone.id))
                                                    document.querySelector(".closeSearchInput").style.cssText = 'display: none'
                                                    document.querySelector(".searchResults").style.cssText = 'display: none'
                                                    document.querySelector(".searchOpen").style.cssText = 'display: none'
                                                    setSearchPhoneResult('')
                                                }} className="phone-search">
                                                    <img src={'../' + phone.src[0]} alt="" />
                                                    <div className="text">
                                                        <h4>{phone.name}</h4>
                                                        <p className="cijena">{phone.cijena}<p className="valuta">EUR</p></p>
                                                    </div>
                                                    <div className="vece">{'>'} </div>
                                                </div>
                                            </Link>) 
                                                }
                                            
                                        }
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="closeSearchInput" onClick={closeSearch}></div>
                </div>

            </div>

            <div className="headerDiv2">
                <div className="info">
                    <a href="tel:+38269288588">
                        <i className="fa fa-phone" > 069-288-588</i>
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/3g_mobilepg/">
                        <i className="fa fa-instagram"></i>
                    </a>
                    <a href="mailto:info@3gmobile.me">
                        <i className="fa fa-envelope-o" ></i>
                    </a>

                </div>
                <ul className="PcNavigation">
                    <Link to='/'>
                        <li id="0" onClick={navBorder}>Pocetna</li>
                    </Link >
                    <Link to='/telefoni'>
                        <li id="1" onClick={navBorder}>Mobilni telefoni</li>
                    </Link>
                    <Link to='/prateca-oprema'>
                        <li id="2" onClick={navBorder}>Prateca oprema</li>
                    </Link>
                    <Link to='/servis'>
                        <li id="3" onClick={navBorder}>Servis</li>
                    </Link>
                    <Link to='/uporedba'>
                        <li id="4" onClick={navBorder}>Uporedba</li>
                    </Link>
                    <Link to='/kontakt'>
                        <li id="5" className='last' onClick={navBorder}>Kontakt</li>
                    </Link>
                </ul>

            </div>
            <div className="phone">
                <div className="searchOpen">
                    <div className="head">
                        <input type="text" value={searchPhoneResult} onChange={searchPhone} placeholder="Unesite ime proizvoda" />
                        <div className="i">
                            <i className="fa fa-search"></i>
                            <i className="fa fa-close" onClick={closeSearchPhone}></i>
                        </div>
                    </div>
                    <div className="searchphoneveci">
                        <div className="searchResultsPhone">
                            {

                                Data.map(phone => {
                                    if (phone.name.toLowerCase().indexOf(searchPhoneResult.toLowerCase()) >= 0) {
                                        // idPhonePage++;
                                        // if (idPhonePage < 4) {
                                            if(phone.store === 'phones'){
                                                return (<Link key={phone.id} to={'/telefon/' + phone.id}>
                                            <div onClick={() => {
                                                idPhonePage = 0;
                                                 dispatch(phonePagePhone(phone.id))
                                                document.querySelector(".searchOpen").style.cssText = 'display: none'
                                                setSearchPhoneResult('')
                                            }} id={phone.id} className="phone-search">
                                                <img src={'../' + phone.src[0]} alt="" />
                                                <div className="text">
                                                    <h4>{phone.name}</h4>
                                                    <p className="cijena">{phone.cijena}<p className="valuta">EUR</p></p>
                                                </div>
                                                <div className="vece">{'>'} </div>
                                            </div>
                                        </Link>)
                                            }
                                            else if(phone.store === 'oprema'){
                                                return (<Link key={phone.id + 'b'} key={phone.id + 'a'} to={'/oprema/' + phone.id}>
                                            <div onClick={() => {
                                                idPhonePage = 0;
                                                 dispatch(opremaAction(phone.id))
                                                document.querySelector(".searchOpen").style.cssText = 'display: none'
                                                setSearchPhoneResult('')
                                            }} id={phone.id} className="phone-search">
                                                <img src={'../' + phone.src[0]} alt="" />
                                                <div className="text">
                                                    <h4>{phone.name}</h4>
                                                    <p className="cijena">{phone.cijena}<p className="valuta">EUR</p></p>
                                                </div>
                                                <div className="vece">{'>'} </div>
                                            </div>
                                        </Link>)
                                            }
                                        
                                    }

                                    // }
                                })
                            }

                        </div>

                        {/* <div className="vidjiOstale">
                            <h4>Pogledaj ostale</h4>
                        </div> */}
                    </div>
                </div>
                <ul className="PhoneNavigation">
                    <Link to="/">
                        <li onClick={closeNav}>Pocetna</li>
                    </Link>
                    <Link to="/telefoni">
                        <li onClick={closeNav} className='phonesList'>Mobilni telefoni</li>
                    </Link>
                    <ul className="phoneSmallUl">

                        <Link to="/telefoni">
                            <li onClick={closeNav}>Samsung</li>
                        </Link>
                        <Link to="/telefoni">
                            <li onClick={closeNav}>Iphone</li>
                        </Link>

                        <Link to="/telefoni">
                            <li onClick={closeNav}>Xiaomi</li>
                        </Link>

                        <Link to="/telefoni">
                            <li onClick={closeNav}>Huawei</li>
                        </Link>

                        <Link to="/telefoni">
                            <li onClick={closeNav}>One Plus</li>
                        </Link>
                    </ul>
                    <Link to='/prateca-oprema'>
                        <li onClick={closeNav}>Prateca oprema</li>
                    </Link>
                    <Link to="/servis">
                        <li onClick={closeNav}>Servis</li>
                    </Link>
                    <Link to="/uporedba">
                        <li onClick={closeNav}>Uporedba</li>
                    </Link>
                    <Link to="/kontakt">
                        <li onClick={closeNav}>Kontakt</li>
                    </Link>
                </ul>
                <div className="closeNav" onClick={closeNav}></div>
            </div>
        </header>
    )
}
