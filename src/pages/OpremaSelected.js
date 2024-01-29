import React, { useState, useEffect } from 'react'
import { opremaAction } from '../redux/action'
import Data from './store/StorePratecaOprema'
import { useSelector, useDispatch } from 'react-redux'

export default function OpremaSelected() {
    var selectBoja = 0
    var phone = useSelector(store => store.oprema)
    var dispatch = useDispatch()

    useEffect(() => {
        dispatch(opremaAction(window.location.href.split('/').splice(-1)))
     },[]);



    var [konacnaCijena, setKonacnaCijena] = useState(Data[0][phone].cijena)
    setTimeout(function () {
        lis = document.querySelectorAll('.PcNavigation li')
        lis[0].style.cssText += 'border-bottom: none'
        lis[2].style.cssText += 'border-bottom: none'
        lis[1].style.cssText += 'border-bottom: none'
        lis[3].style.cssText += 'border-bottom: none'
        lis[4].style.cssText += 'border-bottom: none'
        lis[5].style.cssText += 'border-bottom: none'
    }, 100)


    setTimeout(() => {
        FirstSelected()
    }, 200);
    var boje
    function FirstSelected() {
        selectBoja = 0

        boje = document.querySelectorAll('.b')
       
        boje.forEach(boja => {
            boja.classList.remove('selected')
        })
      
        boje[selectBoja].classList.add('selected')
        document.querySelector('.bigImg img').src = ('../' + Data[0][phone].src[selectBoja])   
    }

    var lis
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
 
function changeColor(e){
    selectBoja = e.target.id - 1

    boje = document.querySelectorAll('.b')

    boje.forEach(boja => {
        boja.classList.remove('selected')
    })
   
    boje[selectBoja].classList.add('selected')

    document.querySelector('.bigImg img').src = ('../' + Data[0][phone].src[e.target.id - 1])
  
}
function naruciOpen(){
    document.body.style.cssText += "overflow-y: hidden"
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    document.querySelector('.colorSelected').style.cssText +=  'background-color:' + Data[0][phone].color[selectBoja]
    document.querySelector('.naruciBigDiv').style.cssText += 'display: block'
}
function zatvoriNaruci(){
    document.querySelector('.naruciBigDiv').style.cssText += 'display: none'
    document.body.style.cssText += "overflow-y: auto"
}
function naruci(){
    
    document.querySelectorAll('.naruci2 input').forEach(input => {
        if(input.value.length < 3){
            input.style.cssText += 'border: 2px solid red'
            input.alt = 'ne'
        }
        else{
            input.style.cssText += 'border: 1px solid gray'
            input.alt = 'da'
        }
    })
    setTimeout(() => {
        if(document.querySelectorAll('.naruci2 input')[0].alt === 'da' && document.querySelectorAll('.naruci2 input')[1].alt === 'da' && document.querySelectorAll('.naruci2 input')[2].alt === 'da' && document.querySelectorAll('.naruci2 input')[3].alt === 'da' ){
        document.querySelector('.naruciBigDiv').style.cssText += 'display: none'
        document.body.style.cssText += "overflow-y: auto"
        alert('HVALA NA PORUDBINI """' + Data[0][phone].name + '""" TELEFONA')
        }
    }, 100);
}
var counter = 0;

    return (
        <div className="phonePage">
            
            <div className="phonePageDiv">
                <div className="div1">
                    <div className="bigImg">
                        <img src={'../' + Data[0][phone].src[0]} alt="" />
                    </div>
                    <div className="smallImgs">
                        {Data[0][phone].src.map(slika => {
                            return( <div key={slika}>
                                <img onClick={(e) => {
                                  e.target.parentElement.parentElement.parentElement.querySelector('.bigImg img').src = '../' + slika
                                }} src={'../' + slika} alt="" />
                            </div>)
                        })}
                       
                    </div>
                </div>
                <div className="div2">
                      <h1>{Data[0][phone].name}</h1>
                    <div className="first">
                            <div className="specs"> 
                               <h2>Specifikacije</h2>
                               <div style={{color: 'black'}}>
                                   {Data[0][phone].opis.map(opis => {
                                       return <p key={opis}>{opis} <br /> </p> 
                                   })}
                               </div>
                            </div>
                    </div>
                    <div className="second">
                        <h2>Konfiguracija</h2>
                        <div className="kongif-price">
                            <div className="konfig">
                              <div>
                                <h4>Boja</h4>
                                <div className="chose boje">
                                  {
                                      Data[0][phone].color.map(boja => {
                                          if(counter != 0){
                                              counter = 0;
                                      }})}
                                      {
                                  Data[0][phone].color.map(boja => {
                                      counter++;
                                      return(<div key={counter} style={{backgroundColor: boja}} onClick={changeColor} id={counter} className={'option b ' + 'b' + counter}></div>)
                                  })}
                         
                                </div>
                            </div>
                            <div className="cijena">
                                <h4>Cijena:</h4>
                                <h2>{konacnaCijena} €</h2>
                            </div>
                            </div>
                        </div>
                        <button onClick={naruciOpen} className="naruci">Naruci</button>
                    </div>
                </div>
                <div className="naruciBigDiv">
                <div className="naruciDivClose"> 
                    <div className="naruciDivSmall">
                        <div className="naruci1">
                            <h3>Naruci</h3>
                            <p onClick={zatvoriNaruci}>x</p>
                        </div>
                        <div className="naruci2">
                            <div className="nar-div1">
                                <p className='text'>Ime</p>
                                <input alt='ne' type="text" placeholder='Ime'/>
                            </div>
                            <div className="nar-div2">
                                <p className='text'>Telefonski broj</p>
                                <input alt='ne' type="number" placeholder='Telefonski broj' />
                            </div>
                            <div className="nar-div3">
                                <p className='text'>Adresa</p>
                                <input alt='ne' type="text" placeholder='Adresa' />
                            </div>
                            <div className="nar-div4">
                                <p className='text'>Grad</p>
                                <input alt='ne' type="text" placeholder='Grad' />
                            </div>
                            <div className="nar-div5">
                                <p className='text'>Komentar</p>
                                <textarea type="text" placeholder='Komentar' />
                            </div>
                        </div>
                        <div className="naruci3">   
                            <h2>{Data[0][phone].name}</h2>
                            <div className="buyPodaci">
                                <div>
                                    <h4>BOJA:</h4>
                                    <div className="colorSelected"  style={{ padding: 15}} ></div>
                                </div>
                                <div className="cijena">
                                <h4>Cijena:</h4>
                                <h1 className="buyCijena">{konacnaCijena} €</h1>
                            </div>
                            </div>
                        </div>
                        <div className="naruci4">
                            <div onClick={zatvoriNaruci} className="zatvori">Zatvori</div>
                            <div onClick={naruci} className="naruci">Naruci</div>
                        </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

