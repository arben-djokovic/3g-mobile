import React, { useState, useEffect } from 'react'
import { phonePagePhone } from '../redux/action'
import Data from './store/StorePhones'
import { useSelector, useDispatch } from 'react-redux'


export default function Phone() {

    var phone = useSelector(store => store.phone)

    var dispatch = useDispatch()
    useEffect(() => {
        dispatch(phonePagePhone(window.location.href.split('/').splice(-1)))
     },[]);

    var selectBoja = 0
    var selectRam 
    var selectMemory 
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
    
    function FirstSelected() {
        selectBoja = 0

        boje = document.querySelectorAll('.b')
        ramovi = document.querySelectorAll('.r')
        memorije = document.querySelectorAll('.m')
    
        boje.forEach(boja => {
            boja.classList.remove('selected')
            boja.classList.remove('active')
            boja.classList.add('inactive')
        })
        memorije.forEach(memorija => {
            memorija.classList.remove('selected')
            memorija.classList.remove('active')
            memorija.classList.add('inactive')
        })
        ramovi.forEach(ram => {
            ram.classList.remove('selected')
            ram.classList.remove('active')
            ram.classList.add('inactive')
        })  
        boje[selectBoja].classList.remove('inactive')
        boje[selectBoja].classList.add('active')
        boje[selectBoja].classList.add('selected')
    
        Data[0][phone].choseBoja[selectBoja][0].forEach(ram => {
            ramovi[ram].classList.remove('inactive')
            ramovi[ram].classList.remove('selected')
            ramovi[ram].classList.add('active')
        })
        Data[0][phone].choseBoja[selectBoja][1].forEach(memorija => {
            memorije[memorija].classList.remove('inactive')
            memorije[memorija].classList.remove('selected')
            memorije[memorija].classList.add('active')
        })
        if(Data[0][phone].choseBoja[selectBoja][0].includes(selectRam)){
            ramovi[selectRam].classList.remove('inactive')
            ramovi[selectRam].classList.add('active')
            ramovi[selectRam].classList.add('selected')
        }
        else{
            ramovi[Data[0][phone].choseBoja[selectBoja][0][0]].classList.remove('inactive')
            ramovi[Data[0][phone].choseBoja[selectBoja][0][0]].classList.add('active')
            ramovi[Data[0][phone].choseBoja[selectBoja][0][0]].classList.add('selected')
            selectRam = Data[0][phone].choseBoja[selectBoja][0][0]
        }
        if(Data[0][phone].choseBoja[selectBoja][1].includes(selectMemory)){
            memorije[selectMemory].classList.remove('inactive')
            memorije[selectMemory].classList.add('active')
            memorije[selectMemory].classList.add('selected')
        }
        else{
            memorije[Data[0][phone].choseBoja[selectBoja][1][0]].classList.remove('inactive')
            memorije[Data[0][phone].choseBoja[selectBoja][1][0]].classList.add('active')
            memorije[Data[0][phone].choseBoja[selectBoja][1][0]].classList.add('selected')
            selectMemory = Data[0][phone].choseBoja[selectBoja][1][0]
        }
    
    
        document.querySelector('.bigImg img').src = ('../' + Data[0][phone].src[selectBoja])
        document.querySelector('.buyCijena').innerHTML = Data[0][phone].konacnaCijena[selectRam][selectMemory] + ' €'
        document.querySelector('.cijena h2').innerHTML = Data[0][phone].konacnaCijena[selectRam][selectMemory] + ' €'      
    }

    var lis
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

    var boje,ramovi, memorije
function changeColor(e){
    selectBoja = e.target.id - 1

    boje = document.querySelectorAll('.b')
    ramovi = document.querySelectorAll('.r')
    memorije = document.querySelectorAll('.m')

    boje.forEach(boja => {
        boja.classList.remove('selected')
        boja.classList.remove('active')
        boja.classList.add('inactive')
    })
    memorije.forEach(memorija => {
        memorija.classList.remove('selected')
        memorija.classList.remove('active')
        memorija.classList.add('inactive')
    })
    ramovi.forEach(ram => {
        ram.classList.remove('selected')
        ram.classList.remove('active')
        ram.classList.add('inactive')
    })  
    boje[selectBoja].classList.remove('inactive')
    boje[selectBoja].classList.add('active')
    boje[selectBoja].classList.add('selected')

    Data[0][phone].choseBoja[selectBoja][0].forEach(ram => {
        ramovi[ram].classList.remove('inactive')
        ramovi[ram].classList.remove('selected')
        ramovi[ram].classList.add('active')
    })
    Data[0][phone].choseBoja[selectBoja][1].forEach(memorija => {
        memorije[memorija].classList.remove('inactive')
        memorije[memorija].classList.remove('selected')
        memorije[memorija].classList.add('active')
    })
    if(Data[0][phone].choseBoja[selectBoja][0].includes(selectRam)){
        ramovi[selectRam].classList.remove('inactive')
        ramovi[selectRam].classList.add('active')
        ramovi[selectRam].classList.add('selected')
    }
    else{
        ramovi[Data[0][phone].choseBoja[selectBoja][0][0]].classList.remove('inactive')
        ramovi[Data[0][phone].choseBoja[selectBoja][0][0]].classList.add('active')
        ramovi[Data[0][phone].choseBoja[selectBoja][0][0]].classList.add('selected')
        selectRam = Data[0][phone].choseBoja[selectBoja][0][0]
    }
    if(Data[0][phone].choseBoja[selectBoja][1].includes(selectMemory)){
        memorije[selectMemory].classList.remove('inactive')
        memorije[selectMemory].classList.add('active')
        memorije[selectMemory].classList.add('selected')
    }
    else{
        memorije[Data[0][phone].choseBoja[selectBoja][1][0]].classList.remove('inactive')
        memorije[Data[0][phone].choseBoja[selectBoja][1][0]].classList.add('active')
        memorije[Data[0][phone].choseBoja[selectBoja][1][0]].classList.add('selected')
        selectMemory = Data[0][phone].choseBoja[selectBoja][1][0]
    }


    document.querySelector('.bigImg img').src = ('../' + Data[0][phone].src[e.target.id - 1])
    document.querySelector('.buyCijena').innerHTML = Data[0][phone].konacnaCijena[selectRam][selectMemory] + ' €'
    document.querySelector('.cijena h2').innerHTML = Data[0][phone].konacnaCijena[selectRam][selectMemory] + ' €'
  
}
function changeRam(e){
    selectRam = e.target.id - 1

    boje = document.querySelectorAll('.b')
    ramovi = document.querySelectorAll('.r')
    memorije = document.querySelectorAll('.m')

    boje.forEach(boja => {
        boja.classList.remove('selected')
        boja.classList.remove('active')
        boja.classList.add('inactive')
    })
    memorije.forEach(memorija => {
        memorija.classList.remove('selected')
        memorija.classList.remove('active')
        memorija.classList.add('inactive')
    })
    ramovi.forEach(ram => {
        ram.classList.remove('selected')
        ram.classList.remove('active')
        ram.classList.add('inactive')
    })  
    ramovi[selectRam].classList.remove('inactive')
    ramovi[selectRam].classList.add('active')
    ramovi[selectRam].classList.add('selected')

    Data[0][phone].choseRam[selectRam][0].forEach(boja => {
        boje[boja].classList.remove('inactive')
        boje[boja].classList.remove('selected')
        boje[boja].classList.add('active')
    })
    Data[0][phone].choseRam[selectRam][1].forEach(memorija => {
        memorije[memorija].classList.remove('inactive')
        memorije[memorija].classList.remove('selected')
        memorije[memorija].classList.add('active')
    })
    if(Data[0][phone].choseRam[selectRam][0].includes(selectBoja)){
        boje[selectBoja].classList.remove('inactive')
        boje[selectBoja].classList.add('active')
        boje[selectBoja].classList.add('selected')
    }
    else{
        boje[Data[0][phone].choseRam[selectRam][0][0]].classList.remove('inactive')
        boje[Data[0][phone].choseRam[selectRam][0][0]].classList.add('active')
        boje[Data[0][phone].choseRam[selectRam][0][0]].classList.add('selected')
        selectBoja = Data[0][phone].choseRam[selectRam][0][0]
        
    }
    if(Data[0][phone].choseRam[selectRam][1].includes(selectMemory)){
        memorije[selectMemory].classList.remove('inactive')
        memorije[selectMemory].classList.add('active')
        memorije[selectMemory].classList.add('selected')
    }
    else{
        memorije[Data[0][phone].choseRam[selectRam][1][0]].classList.remove('inactive')
        memorije[Data[0][phone].choseRam[selectRam][1][0]].classList.add('active')
        memorije[Data[0][phone].choseRam[selectRam][1][0]].classList.add('selected')
        selectMemory = Data[0][phone].choseRam[selectRam][1][0]
    }
    document.querySelector('.bigImg img').src = ('../' + Data[0][phone].src[e.target.id - 1])
    document.querySelector('.buyCijena').innerHTML = Data[0][phone].konacnaCijena[selectRam][selectMemory] + ' €'
    document.querySelector('.cijena h2').innerHTML = Data[0][phone].konacnaCijena[selectRam][selectMemory] + ' €'
  
}
function changeMemory(e){
    selectMemory = e.target.id - 1

    boje = document.querySelectorAll('.b')
    ramovi = document.querySelectorAll('.r')
    memorije = document.querySelectorAll('.m')

    boje.forEach(boja => {
        boja.classList.remove('selected')
        boja.classList.remove('active')
        boja.classList.add('inactive')
    })
    memorije.forEach(memorija => {
        memorija.classList.remove('selected')
        memorija.classList.remove('active')
        memorija.classList.add('inactive')
    })
    ramovi.forEach(ram => {
        ram.classList.remove('selected')
        ram.classList.remove('active')
        ram.classList.add('inactive')
    })  
    memorije[selectMemory].classList.remove('inactive')
    memorije[selectMemory].classList.add('active')
    memorije[selectMemory].classList.add('selected')

    Data[0][phone].choseMemory[selectMemory][0].forEach(boja => {
        boje[boja].classList.remove('inactive')
        boje[boja].classList.remove('selected')
        boje[boja].classList.add('active')
    })
    Data[0][phone].choseMemory[selectMemory][1].forEach(ram => {
        ramovi[ram].classList.remove('inactive')
        ramovi[ram].classList.remove('selected')
        ramovi[ram].classList.add('active')
    })
    if(Data[0][phone].choseMemory[selectMemory][0].includes(selectBoja)){
        boje[selectBoja].classList.remove('inactive')
        boje[selectBoja].classList.add('active')
        boje[selectBoja].classList.add('selected')
    }
    else{
        boje[Data[0][phone].choseMemory[selectMemory][0][0]].classList.remove('inactive')
        boje[Data[0][phone].choseMemory[selectMemory][0][0]].classList.add('active')
        boje[Data[0][phone].choseMemory[selectMemory][0][0]].classList.add('selected')
        selectBoja = Data[0][phone].choseMemory[selectMemory][0][0]
    }
    if(Data[0][phone].choseMemory[selectMemory][1].includes(selectRam)){
        ramovi[selectRam].classList.remove('inactive')
        ramovi[selectRam].classList.add('active')
        ramovi[selectRam].classList.add('selected')
    }
    else{
        ramovi[Data[0][phone].choseMemory[selectMemory][1][0]].classList.remove('inactive')
        ramovi[Data[0][phone].choseMemory[selectMemory][1][0]].classList.add('active')
        ramovi[Data[0][phone].choseMemory[selectMemory][1][0]].classList.add('selected')
        selectRam = Data[0][phone].choseMemory[selectMemory][1][0]
    }
    document.querySelector('.bigImg img').src = ('../' + Data[0][phone].src[e.target.id - 1])
    document.querySelector('.buyCijena').innerHTML = Data[0][phone].konacnaCijena[selectRam][selectMemory] + ' €'
    document.querySelector('.cijena h2').innerHTML = Data[0][phone].konacnaCijena[selectRam][selectMemory] + ' €'
  
}
function naruciOpen(){
    document.body.style.cssText += "overflow-y: hidden"
    document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  document.querySelector('.colorSelected').style.cssText +=  'background-color:' + Data[0][phone].color[selectBoja]
  document.querySelector('.ramSelected').innerHTML = Data[0][phone].ram[selectRam ] + ' GB'
  document.querySelector('.memorySelected   ').innerHTML = Data[0][phone].memorija[selectMemory] + ' GB'
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
                                <div className="specsUpp">
                                    <div className="1">
                                        <h4>Ekran i rezolucija</h4>
                                        <p>{Data[0][phone].ekran + '"'}</p>
                                        <span>1080x2400</span>
                                    </div>
                                    <div className="2">
                                        <h4>Ram i cipset</h4>
                                      <p>{Data[0][phone].ram.map(ramEl => {
                                          return <p key={ramEl}>{ramEl + ', '}</p>
                                      })}</p>
                                        <span>Dimensity 700 5G</span>
                                    </div>
                                </div>
                                <div className="specsDown">
                                    <div className="1">
                                        <h4>Кamera i video</h4>
                                        <p> 48mp</p>
                                        <span>1152p Video Recording</span>
                                    </div>
                                    <div className="2">
                                        <h4>Baterija i tehnologija</h4>
                                        <p>{Data[0][phone].baterija}</p>
                                        <span>Li-Ion</span>
                                    </div>
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
                            <div>
                                <h4>Ram</h4>
                                <div className="chose ram">
                                {
                                      Data[0][phone].ram.map(boja => {
                                          if(counter != 0){
                                              counter = 0;
                                      }})
                                }
                                      {
                                  Data[0][phone].ram.map(rame => {
                                      counter++;
                                      return( <div key={counter} onClick={changeRam} id={counter} className={'option r ' + 'r' + counter}>{rame + 'GB'}</div>)
                                  })}
                         
                                </div>
                            </div>
                            <div>
                                <h4>Memorija</h4>
                                <div className="chose memory">
                                {
                                      Data[0][phone].ram.map(boja => {
                                          if(counter != 0){
                                              counter = 0;
                                      }})
                                }
                                      {
                                  Data[0][phone].memorija.map(memory => {
                                      counter++;
                                      return(<div key={counter} onClick={changeMemory} id={counter} className={'option m ' + 'm' + counter }>{memory + 'GB'}</div>)
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
                                <div>
                                    <h4>RAM:</h4>
                                    <div className="ramSelected"></div>
                                </div>
                                <div>
                                    <h4>MEMORIJA:</h4>
                                    <div className="memorySelected"></div>
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

