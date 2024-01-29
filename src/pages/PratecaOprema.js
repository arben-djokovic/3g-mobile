import React, { useState } from 'react'
import DataOprema from './store/StorePratecaOprema'
import { opremaAction } from '../redux/action'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'


export default function PratecaOprema() {
    var dispatch = useDispatch();
    var [minCijena, setMinCijena] = useState(0);
    var [maxCijena, setMaxCijena] = useState(21210);
    var [oprema, setOprema] = useState(DataOprema[0])
    var [maske, setMaske] = useState(true)
    var [folije, setFolije] = useState(true)
    var [slusalice, setSlusalice] = useState(true)
    var [punjaci, setPunjaci] = useState(true)
    var [zvucnici, setZvucnici] = useState(true)
    var [powerbank, setPowerbank] = useState(true)
    var [fleshke, setFleshke] = useState(true)
    var [ostalo, setOstalo] = useState(true)
    var lis
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera


    setTimeout(function () {
        lis = document.querySelectorAll('.PcNavigation li')
        lis[0].style.cssText += 'border-bottom: none'
        lis[2].style.cssText += 'border-bottom: 2px solid rgb(255, 119, 0)'
        lis[1].style.cssText += 'border-bottom: none'
        lis[3].style.cssText += 'border-bottom: none'
        lis[4].style.cssText += 'border-bottom: none'
        lis[5].style.cssText += 'border-bottom: none'
    }, 100)
    function closeFilter() {
        document.querySelector('.filterDiv').style.cssText = 'display: none'
        document.querySelector('.closeFilterDiv').style.cssText = 'display: none'
    }
    function openFilter() {

        document.querySelector('.filterDiv').style.cssText = 'display: block'
        document.querySelector('.closeFilterDiv').style.cssText = 'display: block'
    }
    function filterPrikaziSve(e) {
        if (e.target.checked === true) {
            var inputs = e.target.parentElement.parentElement.parentElement.querySelectorAll('.proizvodi > input')
            inputs.forEach(element => {
                element.checked = true
            });
        }
        else if (e.target.checked === false) {
            e.target.checked = true
        }
    }
    function changeFilter(e) {
        if (e.target.checked === false) {
            var input = e.target.parentElement.parentElement.parentElement.querySelector('.proizvodi > div > input')
            input.checked = false
        }
        if (e.target.checked === true) {
            var inputs = e.target.parentElement.parentElement.querySelectorAll('.proizvodi > input')
            if (inputs[0].checked === true && inputs[1].checked === true && inputs[2].checked === true && inputs[3].checked === true && inputs[4].checked === true && inputs[5].checked === true && inputs[6].checked === true && inputs[7].checked === true) {
                var input = e.target.parentElement.parentElement.parentElement.querySelector('.proizvodi > div > input')
                input.checked = true
            }
        }
    }
    function filtriraj(e) {
        var minbroj = document.querySelector('.minbroj').value
        var maxbroj = document.querySelector('.maxbroj').value
        if (minbroj != '') {
            setMinCijena(minbroj)
        }
        if (maxbroj != '') {
            setMaxCijena(maxbroj)
        }


        var inputsSelected = e.target.parentElement.parentElement.querySelectorAll('.proizvodi input')
        document.querySelector('.closeFilterDiv').style.cssText = 'display: none'
        document.querySelector('.filterDiv').style.cssText = 'display: none'

        if (inputsSelected[0].checked == true) {
            setMaske(true)
            setFleshke(true)
            setFolije(true)
            setOstalo(true)
            setPowerbank(true)
            setPunjaci(true)
            setSlusalice(true)
            setZvucnici(true)
        }
        else {
            if (inputsSelected[1].checked == false && inputsSelected[2].checked == false && inputsSelected[3].checked == false && inputsSelected[4].checked == false && inputsSelected[5].checked == false && inputsSelected[6].checked == false && inputsSelected[7].checked === false  && inputsSelected[8].checked === false) {
                setMaske(true)
                setFleshke(true)
                setFolije(true)
                setOstalo(true)
                setPowerbank(true)
                setPunjaci(true)
                setSlusalice(true)
                setZvucnici(true)
            }
            else {
                if (inputsSelected[1].checked == true) {
                    setMaske(true)
                }
                else {
                    setMaske(false)
                }
                if (inputsSelected[2].checked == true) {
                    setFolije(true)
                }
                else {
                    setFolije(false)
                }
                if (inputsSelected[3].checked == true) {
                    setSlusalice(true)
                }
                else {
                    setSlusalice(false)
                }
                if (inputsSelected[4].checked == true) {
                    setPunjaci(true)
                }
                else {
                    setPunjaci(false)
                }
                if (inputsSelected[5].checked == true) {
                    setZvucnici(true)
                }
                else {
                    setZvucnici(false)
                }
                if (inputsSelected[6].checked == true) {
                    setPowerbank(true)
                }
                else {
                    setPowerbank(false)
                }
                if (inputsSelected[7].checked == true) {
                    setFleshke(true)
                }
                else {
                    setFleshke(false)
                }
                if (inputsSelected[8].checked == true) {
                    setOstalo(true)
                }
                else {
                    setOstalo(false)
                }
            }
        }
    }
function openOprema(e) {
    dispatch(opremaAction(e.target.id))
}
    return (
        <div className='telefoni'>
            <div className="right">
                <div className="filters">
                    <i className='fa fa-filter' onClick={openFilter}><p> Filter</p></i>
                    <div className="sortiraj">
                    </div>  

                </div>
                <div className="phones">
                    <div className="svi" >
                        {
                            oprema.map(phone => {
                                if (oprema.length > 0) {
                                    if (phone.cijena >= minCijena && phone.cijena <= maxCijena) {
                                        if (maske && phone.marka.toLowerCase().indexOf('maske') >= 0) {
                                            return (<Link key={phone.id} to={'/oprema/' + phone.id}>
                                                <div onClick={openOprema} id={phone.id}>
                                                    <img src={phone.src[0]} alt="" />
                                                    <div className="text">
                                                        <h4>{phone.name}</h4>
                                                        <p className="cijena">{phone.cijena} <p className="valuta">EUR</p></p>
                                                    </div>
                                                    <div className="r">{'>'}</div>
                                                </div></Link>)
                                        }
                                        else if (folije && phone.marka.toLowerCase().indexOf('folije') >= 0) {
                                            return (<Link key={phone.id} to={'/oprema/' + phone.id}>
                                                <div onClick={openOprema} id={phone.id}>
                                                    <img src={phone.src[0]} alt="" />
                                                    <div className="text">
                                                        <h4>{phone.name}</h4>
                                                        <p className="cijena">{phone.cijena} <p className="valuta">EUR</p></p>
                                                    </div>
                                                    <div className="r">{'>'}</div>
                                                </div></Link>)
                                        }
                                        else if (slusalice && phone.marka.toLowerCase().indexOf('slusalice') >= 0) {
                                            return (<Link key={phone.id} to={'/oprema/' + phone.id}>
                                                <div onClick={openOprema} id={phone.id}>
                                                    <img src={phone.src[0]} alt="" />
                                                    <div className="text">
                                                        <h4>{phone.name}</h4>
                                                        <p className="cijena">{phone.cijena} <p className="valuta">EUR</p></p>
                                                    </div>
                                                    <div className="r">{'>'}</div>
                                                </div></Link>)
                                        }
                                        else if (punjaci && phone.marka.toLowerCase().indexOf('punjaci') >= 0) {
                                            return (<Link key={phone.id} to={'/oprema/' + phone.id}>
                                                <div onClick={openOprema} id={phone.id}>
                                                    <img src={phone.src[0]} alt="" />
                                                    <div className="text">
                                                        <h4>{phone.name}</h4>
                                                        <p className="cijena">{phone.cijena} <p className="valuta">EUR</p></p>
                                                    </div>
                                                    <div className="r">{'>'}</div>
                                                </div></Link>)
                                        }
                                        else if (zvucnici && phone.marka.toLowerCase().indexOf('zvucnici') >= 0) {
                                            return (<Link key={phone.id} to={'/oprema/' + phone.id}>
                                                <div onClick={openOprema} id={phone.id}>
                                                    <img src={phone.src[0]} alt="" />
                                                    <div className="text">
                                                        <h4>{phone.name}</h4>
                                                        <p className="cijena">{phone.cijena} <p className="valuta">EUR</p></p>
                                                    </div>
                                                    <div className="r">{'>'}</div>
                                                </div></Link>)
                                        }
                                        else if (powerbank && phone.marka.toLowerCase().indexOf('powerbank') >= 0) {
                                            return (<Link key={phone.id} to={'/oprema/' + phone.id}>
                                                <div onClick={openOprema} id={phone.id}>
                                                    <img src={phone.src[0]} alt="" />
                                                    <div className="text">
                                                        <h4>{phone.name}</h4>
                                                        <p className="cijena">{phone.cijena} <p className="valuta">EUR</p></p>
                                                    </div>
                                                    <div className="r">{'>'}</div>
                                                </div></Link>)
                                        }
                                        else if (fleshke && phone.marka.toLowerCase().indexOf('fleshke') >= 0) {
                                            return (<Link key={phone.id} to={'/oprema/' + phone.id}>
                                                <div onClick={openOprema} id={phone.id}>
                                                    <img src={phone.src[0]} alt="" />
                                                    <div className="text">
                                                        <h4>{phone.name}</h4>
                                                        <p className="cijena">{phone.cijena} <p className="valuta">EUR</p></p>
                                                    </div>
                                                    <div className="r">{'>'}</div>
                                                </div></Link>)
                                        }
                                        else if (ostalo && phone.marka.toLowerCase().indexOf('ostalo') >= 0) {
                                            return (<Link key={phone.id} to={'/oprema/' + phone.id}>
                                                <div onClick={openOprema} id={phone.id}>
                                                    <img src={phone.src[0]} alt="" />
                                                    <div className="text">
                                                        <h4>{phone.name}</h4>
                                                        <p className="cijena">{phone.cijena} <p className="valuta">EUR</p></p>
                                                    </div>
                                                    <div className="r">{'>'}</div>
                                                </div></Link>)
                                        }
                                    }
                                }
                            })}
                    </div>

                </div>


                <div className="filterDiv">

                    <div className="headerFilter">
                        <h3>Filter</h3>
                        <i className="fa fa-close" onClick={closeFilter}></i>
                    </div>
                    <hr />
                    <div className="proizvodi">
                        <h3>Proizvodi</h3>
                        <div>
                            <input type="checkbox" onChange={filterPrikaziSve} name='check' id='01' /> <label htmlFor="01"> Prikazi sve</label> <br />
                        </div>
                        <input onChange={changeFilter} type="checkbox" name='check' id='121' /><label htmlFor="121">maske</label>  <br />
                        <input onChange={changeFilter} type="checkbox" name='check' id='12' /><label htmlFor="12">staklene folije</label> <br />
                        <input onChange={changeFilter} type="checkbox" name='check' id='13' /><label htmlFor="13">slusalice </label> <br />
                        <input onChange={changeFilter} type="checkbox" name='check' id='14' /><label htmlFor="14">punjaci i usb</label> <br />
                        <input onChange={changeFilter} type="checkbox" name='check' id='15' /><label htmlFor="15">zvucnici</label> <br />
                        <input onChange={changeFilter} type="checkbox" name='check' id='16' /><label htmlFor="16">powerbank</label> <br />
                        <input onChange={changeFilter} type="checkbox" name='check' id='17' /><label htmlFor="17">fleshe i memorijske kartice</label> <br />
                        <input onChange={changeFilter} type="checkbox" name='check' id='18' /><label htmlFor="18">ostalo...</label> <br />
                    </div>
                    <div className="cijenaFilter">
                        <h3>Cijena</h3>
                        <div className="cijenainput">
                            <input type="number" className="minbroj" placeholder="min" />
                            <i>-</i>
                            <input type="number" className="maxbroj" placeholder="max" />
                            <p >EUR</p>
                        </div>
                    </div>
                    <hr />
                    <div className="filtriraj">
                        <button onClick={filtriraj}>Trazi</button>
                    </div>
                </div>
            </div>


            <div className="closeFilterDiv" onClick={closeFilter}></div>
        </div >
    )
}
