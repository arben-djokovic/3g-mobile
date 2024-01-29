import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Data from './store/StorePhones'
import { samsungAction, iphoneAction, xiaomiAction, huaweiAction, oneplusAction, phonePagePhone } from '../redux/action'
import { Link, useHistory } from 'react-router-dom'


export default function Telefoni() {
    var history = useHistory()
    var dispatch = useDispatch()
    var [minCijena, setMinCijena] = useState(0);
    var [maxCijena, setMaxCijena] = useState(21210);
    var [telefoni, setTelefoni] = useState(Data[0])
    var samsung = useSelector(store => store.samsung)
    var iphone = useSelector(store => store.iphone)
    var xiaomi = useSelector(store => store.xiaomi)
    var huawei = useSelector(store => store.huawei)
    var oneplus = useSelector(store => store.oneplus)
    var lis
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    
    if(!window.location.href.includes('xiaomi') && !window.location.href.includes('huawei') && !window.location.href.includes('samsung') && !window.location.href.includes('iphone') && !window.location.href.includes('oneplus')){
        dispatch(samsungAction(true))
        dispatch(huaweiAction(true))
        dispatch(iphoneAction(true))
        dispatch(oneplusAction(true))
        dispatch(xiaomiAction(true))
    }
    else{
        dispatch(samsungAction(window.location.href.includes('samsung')))
        dispatch(huaweiAction(window.location.href.includes('huawei')))
        dispatch(iphoneAction(window.location.href.includes('iphone')))
        dispatch(oneplusAction(window.location.href.includes('oneplus')))
        dispatch(xiaomiAction(window.location.href.includes('xiaomi')))
    }

    setTimeout(function () {
        lis = document.querySelectorAll('.PcNavigation li')
        lis[0].style.cssText += 'border-bottom: none'
        lis[1].style.cssText += 'border-bottom: 2px solid rgb(255, 119, 0)'
        lis[2].style.cssText += 'border-bottom: none'
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
            if (inputs[0].checked === true && inputs[1].checked === true && inputs[2].checked === true && inputs[3].checked === true && inputs[4].checked === true) {
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
            history.push('/telefoni')
            dispatch(samsungAction(true))
            dispatch(huaweiAction(true))
            dispatch(iphoneAction(true))
            dispatch(oneplusAction(true))
            dispatch(xiaomiAction(true))
        }
        else {
            if (inputsSelected[1].checked == false && inputsSelected[2].checked == false && inputsSelected[3].checked == false && inputsSelected[1].checked == false && inputsSelected[4].checked == false && inputsSelected[5].checked == false) {
                history.push('/telefoni')
                dispatch(samsungAction(true))
                dispatch(huaweiAction(true))
                dispatch(iphoneAction(true))
                dispatch(oneplusAction(true))
                dispatch(xiaomiAction(true))
            }
            else {
                if (inputsSelected[1].checked && !window.location.href.includes('samsung')) {
                    dispatch(samsungAction(true))
                    history.push('/telefoni/' +  window.location.href.split('/').slice(-1)[0] +'samsung')
                }
                else if(!inputsSelected[1].checked){
                    dispatch(samsungAction(false))
                    history.push('/telefoni/' + window.location.href.split('/').slice(-1)[0].replaceAll('samsung', ''))
                }
                if (inputsSelected[2].checked && !window.location.href.includes('iphone')) {
                    dispatch(iphoneAction(true))
                    history.push('/telefoni/' +  window.location.href.split('/').slice(-1)[0] +'iphone')
                }
                else if(!inputsSelected[2].checked){
                    dispatch(iphoneAction(false))
                    history.push('/telefoni/' + window.location.href.split('/').slice(-1)[0].replaceAll('iphone', ''))
                }
                if (inputsSelected[3].checked && !window.location.href.includes('xiaomi')) {
                    dispatch(xiaomiAction(true))
                    history.push('/telefoni/' +  window.location.href.split('/').slice(-1)[0] +'xiaomi')
                }
                else if(!inputsSelected[3].checked){
                    dispatch(xiaomiAction(false))
                    history.push('/telefoni/' + window.location.href.split('/').slice(-1)[0].replaceAll('xiaomi', ''))
                }
                if (inputsSelected[4].checked && !window.location.href.includes('huawei')) {
                    dispatch(huaweiAction(true))
                    history.push('/telefoni/' +  window.location.href.split('/').slice(-1)[0] +'huawei')
                }
                else if(!inputsSelected[4].checked){
                    dispatch(huaweiAction(false))
                    history.push('/telefoni/' + window.location.href.split('/').slice(-1)[0].replaceAll('huawei', ''))
                }
                if (inputsSelected[5].checked && !window.location.href.includes('oneplus')) {
                    dispatch(oneplusAction(true))
                    history.push('/telefoni/' + window.location.href.split('/').slice(-1)[0] + 'oneplus')
                }
                else if(!inputsSelected[5].checked){
                    dispatch(oneplusAction(false))
                    history.push('/telefoni/' + window.location.href.split('/').slice(-1)[0].replaceAll('oneplus', ''))
                }
            }
        }
    }
    function openPhone(e) {
        dispatch(phonePagePhone(e.target.id))
    }

    return (
        <div className='telefoni'>
            <div className="right">
                <div className="filters">
                    <i className='fa fa-filter' onClick={openFilter}><p> Filter</p></i>

                </div>
                <div className="phones">
                    <div className="svi" >
                        {
                            telefoni.map(phone => {
                                if (telefoni.length > 0) {
                                    if (phone.cijena >= minCijena && phone.cijena <= maxCijena) {
                                        if (samsung && phone.marka.toLowerCase().indexOf('samsung') >= 0) {
                                            return (<Link key={phone.id} to={'/telefon/' + phone.id}>
                                                <div onClick={openPhone} id={phone.id}>
                                                    <img src={phone.src[0]} alt="" />
                                                    <div className="text">
                                                        <h4>{phone.name}</h4>
                                                        <p className="cijena">{phone.cijena} <p className="valuta">EUR</p></p>
                                                    </div>
                                                    <div className="r">{'>'}</div>
                                                </div></Link>)
                                        }
                                        else if (iphone && phone.marka.toLowerCase().indexOf('iphone') >= 0) {
                                            return (<Link key={phone.id + 'a'} to={'/telefon/' + phone.id}>
                                                <div onClick={openPhone} id={phone.id}>
                                                    <img src={phone.src[0]} alt="" />
                                                    <div className="text">
                                                        <h4>{phone.name}</h4>
                                                        <p className="cijena">{phone.cijena} <p className="valuta">EUR</p></p>
                                                    </div>
                                                    <div className="r">{'>'}</div>
                                                </div></Link>)
                                        }
                                        else if (xiaomi && phone.marka.toLowerCase().indexOf('xiaomi') >= 0) {
                                            return (<Link key={phone.id + 'b'} to={'/telefon/' + phone.id}>
                                                <div onClick={openPhone} id={phone.id}>
                                                    <img src={phone.src[0]} alt="" />
                                                    <div className="text">
                                                        <h4>{phone.name}</h4>
                                                        <p className="cijena">{phone.cijena} <p className="valuta">EUR</p></p>
                                                    </div>
                                                    <div className="r">{'>'}</div>
                                                </div></Link>)
                                        }
                                        else if (huawei && phone.marka.toLowerCase().indexOf('huawei') >= 0) {
                                            return (<Link key={phone.id + 'c'} to={'/telefon/' + phone.id}>
                                                <div onClick={openPhone} id={phone.id}>
                                                    <img src={phone.src[0]} alt="" />
                                                    <div className="text">
                                                        <h4>{phone.name}</h4>
                                                        <p className="cijena">{phone.cijena} <p className="valuta">EUR</p></p>
                                                    </div>
                                                    <div className="r">{'>'}</div>
                                                </div></Link>)
                                        }
                                        else if (oneplus && phone.marka.toLowerCase().indexOf('oneplus') >= 0) {
                                            return (<Link key={phone.id + 'd'} to={'/telefon/' + phone.id}>
                                                <div onClick={openPhone} id={phone.id}>
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
                        <input onChange={changeFilter} type="checkbox" name='check' id='121' /><label htmlFor="121">Samsung</label>  <br />
                        <input onChange={changeFilter} type="checkbox" name='check' id='12' /><label htmlFor="12"> Apple</label> <br />
                        <input onChange={changeFilter} type="checkbox" name='check' id='13' /><label htmlFor="13"> Xiaomi</label> <br />
                        <input onChange={changeFilter} type="checkbox" name='check' id='14' /><label htmlFor="14"> Huawei</label> <br />
                        <input onChange={changeFilter} type="checkbox" name='check' id='15' /><label htmlFor="15"> One Plus</label> <br />
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
