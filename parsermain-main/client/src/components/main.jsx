import React, { useEffect, useState } from "react";
import styles from '../styles/main.module.css'
import { useLocation, useNavigate } from "react-router-dom";
import io from 'socket.io-client'
import {Link} from 'react-router-dom'

const socket = io.connect('http://localhost:5000')

import Messages from './messages'






const FIELDS = {
    Username: "username",
    Room: "room"
}

const Main = () =>{

    const [state, setState] = useState([])
    const { name } = FIELDS
    const { search } = useLocation()
    const [values, setValues] = useState("");
    const [params, setParams] = useState({ room: "", user: ""})
    const [val, setVal] = useState("")
    const [parSertch, setParSertch] = useState("1")
    const [parSer, setParSer] = useState("1")
    
    useEffect(()=> {
        
        socket.on('join', (data) => {  
            setState(data)
            console.log(data)
            socket.emit('confirmation');
         });
        

        const searchParams = Object.fromEntries(new URLSearchParams(search))
        setParams(searchParams)
        
    }, [search])


    const handleChange = ({target: {value}})=>{
        setValues(value)
    }
   
    const handleClick = (e) =>{
        const isDisabled = Object.values(values).some((value) => !value)
       if(isDisabled) e.preventDefault()
    }
    const handleSubmit = (e) =>{
        setVal(values)
    }
    const handleSbros = (e) =>{
        window.location.reload(true);
    }


    const setSertchA_Z = (e) =>{
        setParSer("1")
    }
    const setSertchZ_A = (v) =>{
        setParSer("2")
    }
    const setSertchA = (e) =>{
        setParSer("3")
    }
    const setSertchZ = (v) =>{
        setParSer("4")
    }



    const setSertchName = (e) =>{
        setParSertch("1")
    }
    const setSertchWho = (v) =>{
        setParSertch("2")
    }
    const setSertchState = (e) =>{
        setParSertch("3")
    }
    const setSertchPrice = (e) =>{
        setParSertch("4")
    }
    let prov = []
    const spis = []
    let age_list = []
    const dats = state.pro
    if(state.length != 0){
        for (let i = 0; i < dats.length; i++) {
            let pri = dats[i]
            if(i==0){
                spis.push(pri.age)
            }
            // else{
            //     for (let j = 0; j < spis.length; j++) {
            //         if(spis[j]==pri){
            //             break
            //         }
            //         else if(j == spis.length-1){
            //             spis.push(pri.age)
            //         }
            //     }
            // }
            // console.log(pri.age)
            
        }
    }
    console.log(spis)
    
    
   
    // console.log(date.length)
    return (
        <div id="wrapper">
            <div className={styles.container}>
                <div className={styles.head}>
                     <h1 className={styles.bub}>
                    Подбери программу для реализации своего проекта
                    </h1>
                    <div className={styles.comp_img}></div>
                </div>
            
                <div className={styles.flex_r}>
                    <div className={styles.left}>
                        <div className={styles.flex}>
                            <h2 className={styles.filt}>Фильтр</h2>
                            <div className={styles.butWite}>
                                <button 
                                className={styles.but}
                                type="submit"
                                onClick={handleSbros}
                                >Сбросить</button>
                            </div>
                        </div>
                        <div className={styles.raz}>
                            <div>
                                <h2>
                                    Сортировка
                                </h2>
                                { parSer == '1' && 
                                <div className={styles.grid}>
                                    <div className={styles.flex}>
                                        <input type="checkbox" name="" id="" onClick={setSertchA_Z} checked/>
                                        <label htmlFor="">от А-Я</label>
                                    </div>
                                    <div className={styles.flex}>
                                        <input type="checkbox" name="" id="" onClick={setSertchZ_A}/>
                                        <label htmlFor="">от Я-А</label>
                                    </div>
                                    <div className={styles.flex}>
                                        <input type="checkbox" name="" id="" onClick={setSertchA} />
                                        <label htmlFor="">....</label>
                                    </div>
                                    <div className={styles.flex}>
                                        <input type="checkbox" name="" id="" onClick={setSertchZ} />
                                        <label htmlFor="">.....</label>
                                    </div>
                                </div>
                                }
                                { parSer == '2' && 
                                <div className={styles.grid}>
                                    <div className={styles.flex}>
                                        <input type="checkbox" name="" id="" onClick={setSertchA_Z}/>
                                        <label htmlFor="">от А-Я</label>
                                    </div>
                                    <div className={styles.flex}>
                                        <input type="checkbox" name="" id="" onClick={setSertchZ_A} checked/>
                                        <label htmlFor="">от Я-А</label>
                                    </div>
                                    <div className={styles.flex}>
                                        <input type="checkbox" name="" id="" onClick={setSertchA} />
                                        <label htmlFor="">....</label>
                                    </div>
                                    <div className={styles.flex}>
                                        <input type="checkbox" name="" id="" onClick={setSertchZ} />
                                        <label htmlFor="">.....</label>
                                    </div>
                                </div>
                                }
                                { parSer == '3' && 
                                <div className={styles.grid}>
                                    <div className={styles.flex}>
                                        <input type="checkbox" name="" id="" onClick={setSertchA_Z}/>
                                        <label htmlFor="">от А-Я</label>
                                    </div>
                                    <div className={styles.flex}>
                                        <input type="checkbox" name="" id="" onClick={setSertchZ_A}/>
                                        <label htmlFor="">от Я-А</label>
                                    </div>
                                    <div className={styles.flex}>
                                        <input type="checkbox" name="" id="" onClick={setSertchA} checked/>
                                        <label htmlFor="">....</label>
                                    </div>
                                    <div className={styles.flex}>
                                        <input type="checkbox" name="" id="" onClick={setSertchZ} />
                                        <label htmlFor="">.....</label>
                                    </div>
                                </div>
                                }
                                { parSer == '4' && 
                                <div className={styles.grid}>
                                    <div className={styles.flex}>
                                        <input type="checkbox" name="" id="" onClick={setSertchA_Z} />
                                        <label htmlFor="">от А-Я</label>
                                    </div>
                                    <div className={styles.flex}>
                                        <input type="checkbox" name="" id="" onClick={setSertchZ_A}/>
                                        <label htmlFor="">от Я-А</label>
                                    </div>
                                    <div className={styles.flex}>
                                        <input type="checkbox" name="" id="" onClick={setSertchA} />
                                        <label htmlFor="">....</label>
                                    </div>
                                    <div className={styles.flex}>
                                        <input type="checkbox" name="" id="" onClick={setSertchZ} checked/>
                                        <label htmlFor="">.....</label>
                                    </div>
                                </div>
                                }      
                            </div>
                            <div>
                                <h2>
                                    Поиск по критериям
                                </h2>
                                
                                { parSertch == '1' && 
                                            <div className={styles.grid2}>
                                            <div className={styles.flex}>
                                                <input type="radio" 
                                                onClick={setSertchName} 
                                                required 
                                                checked="checked"
                                                name="radAnswer" id="" />    
                                                <label htmlFor="">Наименование стартапа</label>
                                            </div>
                                            <div className={styles.flex}>
                                                <input type="radio" 
                                                onClick={setSertchWho} 
                                                required
                                                name="radAnswer" id="" />    
                                                <label htmlFor="">Кто оказывает услуги</label>
                                            </div>
                                            <div className={styles.flex}>
                                                <input type="radio" 
                                                onClick={setSertchState} 
                                                required
                                                name="radAnswer" id="" />    
                                                <label htmlFor="">Статус конкурса</label>
                                            </div>
                                            <div className={styles.flex}>
                                                <input type="radio" 
                                                onClick={setSertchPrice} 
                                                required
                                                name="radAnswer" id="" />    
                                                <label htmlFor="">Размер гранта</label>
                                            </div>
                                            </div>
                                }  
                                { parSertch == '2' && 
                                            <div className={styles.grid2}>
                                            <div className={styles.flex}>
                                                <input type="radio" 
                                                onClick={setSertchName} 
                                                required 
                                                name="radAnswer" id="" />    
                                                <label htmlFor="">Наименование стартапа</label>
                                            </div>
                                            <div className={styles.flex}>
                                                <input type="radio" 
                                                onClick={setSertchWho} 
                                                required
                                                checked="checked"
                                                name="radAnswer" id="" />    
                                                <label htmlFor="">Кто оказывает услуги</label>
                                            </div>
                                            <div className={styles.flex}>
                                                <input type="radio" 
                                                onClick={setSertchState} 
                                                required
                                                name="radAnswer" id="" />    
                                                <label htmlFor="">Статус конкурса</label>
                                            </div>
                                            <div className={styles.flex}>
                                                <input type="radio" 
                                                onClick={setSertchPrice} 
                                                required
                                                name="radAnswer" id="" />    
                                                <label htmlFor="">Размер гранта</label>
                                            </div>
                                            </div>
                                }  
                                { parSertch == '3' && 
                                            <div className={styles.grid2}>
                                            <div className={styles.flex}>
                                                <input type="radio" 
                                                onClick={setSertchName} 
                                                required 
                                                name="radAnswer" id="" />    
                                                <label htmlFor="">Наименование стартапа</label>
                                            </div>
                                            <div className={styles.flex}>
                                                <input type="radio" 
                                                onClick={setSertchWho} 
                                                required
                                                name="radAnswer" id="" />    
                                                <label htmlFor="">Кто оказывает услуги</label>
                                            </div>
                                            <div className={styles.flex}>
                                                <input type="radio" 
                                                onClick={setSertchState} 
                                                required
                                                checked="checked"
                                                name="radAnswer" id="" />    
                                                <label htmlFor="">Статус конкурса</label>
                                            </div>
                                            <div className={styles.flex}>
                                                <input type="radio" 
                                                onClick={setSertchPrice} 
                                                required
                                                name="radAnswer" id="" />    
                                                <label htmlFor="">Размер гранта</label>
                                            </div>
                                            </div>
                                }  
                                { parSertch == '4' && 
                                            <div className={styles.grid2}>
                                            <div className={styles.flex}>
                                                <input type="radio" 
                                                onClick={setSertchName} 
                                                required 
                                                name="radAnswer" id="" />    
                                                <label htmlFor="">Наименование стартапа</label>
                                            </div>
                                            <div className={styles.flex}>
                                                <input type="radio" 
                                                onClick={setSertchWho} 
                                                required
                                                name="radAnswer" id="" />    
                                                <label htmlFor="">Кто оказывает услуги</label>
                                            </div>
                                            <div className={styles.flex}>
                                                <input type="radio" 
                                                onClick={setSertchState} 
                                                required
                                                name="radAnswer" id="" />    
                                                <label htmlFor="">Статус конкурса</label>
                                            </div>
                                            <div className={styles.flex}>
                                                <input type="radio" 
                                                onClick={setSertchPrice} 
                                                required
                                                checked="checked"
                                                name="radAnswer" id="" />    
                                                <label htmlFor="">Размер гранта</label>
                                            </div>
                                            </div>
                                }  
                                    
                            </div>
                            <div>
                                <h2>
                                    Сортировка
                                </h2>
                                <div className={styles.dateTim}>
                                    <div className={styles.flex}>
                                        <label className={styles.dater}  htmlFor="">Только по</label>
                                    </div>
                                    <div>
                                        <select className={styles.list} name="age">
                                        
                                            <optgroup label="Возрост">
                                            <option value="wqe">Для всех</option>
                                                    {spis.map((post, index) => (
                                                        <option value="wqe">{post}</option>
                                                    ))}
                                            </optgroup>
                                        </select>
                                    </div>                                                 
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div >
                            <div className={styles.flex}>
                                <div>
                                    <input 
                                    type="text" 
                                    name="find" 
                                    value={values}
                                    className={styles.find} 
                                    placeholder="Введите название программы"
                                    onChange={handleChange}
                                    autoComplete="off"
                                    required
                                    />
                                </div>
                                <div className={styles.button}>
                                    <input 
                                    type="submit"
                                    onClick={handleSubmit}
                                    className={styles.buttonSub} 
                                    value="Искать" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <Messages value={[val, parSertch,parSer]}  >
                            </Messages>
                        </div>
                        <div>
                            <form action="submit"></form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     )
    }
  

export default Main