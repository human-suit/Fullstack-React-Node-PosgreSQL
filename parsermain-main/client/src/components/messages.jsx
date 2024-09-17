import React, { useEffect, useState } from "react";
import styles from '../styles/chat.module.css'

import io from 'socket.io-client'
import {Link, useLocation, useNavigate} from 'react-router-dom'

const socket = io.connect('http://localhost:5000')



const Message = ({ value }) =>{
    const dats = []
    const [params, setParams] = useState([]) 
    const [state, setState] = useState([])
    const [asyncData, setAsyncData] = useState(null);
    const [values, setValues] = useState({ });
    const [stage, setStage] = useState(1);
    const [isActive, setActive] = useState(1);
    const [inx, setInx] = useState(1);
    
    useEffect(()=> {
        
        // отправляем данные на сервер
        // socket.emit('join', ({state})=>{
            
        //     console.log(state)
        // })
        // получаем данные от сервера
        socket.on('join', (data) => {  
            setState(data)
            console.log(data)
            socket.emit('confirmation');
         });
         
         setTimeout(() => {
            setAsyncData("something");
        }, 4500);

        
    }, [])

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log("1")
    }
    
    

    const handleUp = (e) =>{
        e.preventDefault()
        
        if(stage<date.length/3){
            
            const num = stage+1
            
            // setActive(!isActive);
            setStage(num)
            if(num>3 && num<(date.length/3)-2){
                const int = inx+1
                
                var allElements = document.getElementsByClassName(`${styles.bu}`);
                for(var i=0; i < allElements.length; i++)
                {
                    
                    var item = allElements[i];
                    var ints =  item.id 
                    if(num==ints){
                        console.log(num)
                        const nax = num-1
                        document.getElementById(nax).classList.add(`${styles.per}`);
                        setInx(int)
                    }
                }
                 var allElements = document.getElementsByClassName(`${styles.per}`);
                for(var i=0; i < allElements.length; i++)
                {
                    var item = allElements[i];
                    var ints =  item.id
                    const nax = num-1 
                    if(nax==ints){
                        
                    } else{
                        document.getElementById(ints).classList.remove(`${styles.per}`);
                    }
                    
                    
                }
            }
            else{
                var allElements = document.getElementsByClassName(`${styles.bu}`);
                for(var i=0; i < allElements.length; i++)
                {
                    console.log(inx)
                    var item = allElements[i];
                    var ints =  item.id 
                    if((num)==ints){
                        document.getElementById(num).classList.add(`${styles.per}`);
                    }
                }
                 var allElements = document.getElementsByClassName(`${styles.per}`);
                for(var i=0; i < allElements.length; i++)
                {
                    var item = allElements[i];
                    var ints =  item.id 
                    console.log(num)
                    if(num==ints){
                        
                    } else{
                        document.getElementById(ints).classList.remove(`${styles.per}`);
                    }
                    
                    
                }
            }
            
            
           
        }
        
        
    }
    const handleDown = (e) =>{
        e.preventDefault()
        if(stage>1){
            const num = stage-1
            document.getElementById(num).classList.add(`${styles.per}`);
            setStage(num)
            
            if(num-2 > 0 && num < (date.length/3) - 3){
                const int = inx-1
                
                var allElements = document.getElementsByClassName(`${styles.bu}`);
                for(var i=0; i < allElements.length; i++)
                {
                    
                    var item = allElements[i];
                    var ints =  item.id 
                    if(num==ints){
                        console.log(num)
                        const nax = num-1
                        document.getElementById(nax).classList.add(`${styles.per}`);
                        setInx(int)
                    }
                }
                 var allElements = document.getElementsByClassName(`${styles.per}`);
                for(var i=0; i < allElements.length; i++)
                {
                    var item = allElements[i];
                    var ints =  item.id
                    const nax = num-1 
                    if(nax==ints){
                        
                    } else{
                        document.getElementById(ints).classList.remove(`${styles.per}`);
                    }
                    
                    
                }
               
            }
            else{
                var allElements = document.getElementsByClassName(`${styles.per}`);
                for(var i=0; i < allElements.length; i++)
                {
                    var item = allElements[i];
                    var int =  item.id 
                    console.log(num) 
                    if(num==int){
                       
                    } else{
                        document.getElementById(int).classList.remove(`${styles.per}`);
                    }
                    
                    
                }
            }
            
        }
        
        
    }
    
    const handleClick = () =>{
        const isDisabled = Object.values(values).some((value) => !value)
       if(isDisabled) e.preventDefault()
    }

    const up = (event) =>{
        alert(myHandler.caller.arguments[0].target.id)
    }
    const date = state.pro
    const count = []

    // console.log(date.length)
    
    
    if(value[0] != ""){
        console.log(value)
        for (let i = 0; i < date.length; i++) {
            const vil = date[i]
            if(value[1]=="1"){
                const str = vil.namestart
                if (str[0].toLowerCase().includes(value[0].toLowerCase()) == true){
                    console.log(str)
                    count.push(vil.id)
                    console.log(count)
                }
            } else if (value[1]=="2"){
                const str = vil.namekomp
                if (str[0].toLowerCase().includes(value[0].toLowerCase()) == true){
                    console.log(str)
                    count.push(vil.id)
                    console.log(count)
                }
            } else if (value[1]=="3"){
                const str = vil.statusdata
                if (str[0].toLowerCase().includes(value[0].toLowerCase()) == true){
                    console.log(str)
                    count.push(vil.id)
                    console.log(count)
                }
            } else if (value[1]=="4"){
                const str = vil.price
                if (str[0].toLowerCase().includes(value[0].toLowerCase()) == true){
                    console.log(str)
                    count.push(vil.id)
                    console.log(count)
                }
            }
            
            
        }
        
    }
    console.log(value)
    if(value[0] != ""){
        if(value[2]=="1"){
            date.sort()
        } else if(value[2]=="2"){
            date.sort(function (a, b) {
                if (a.name < b.name) {
                return -1;
                }
                if (a.name > b.name) {
                return 1;
                }
                return 0;
            });
        }
    }
    


    

    return asyncData ? 
        <div>
        { value[0] == "" &&
        <div className={styles.spis}>
        
        
        {date.map((post, index) => (
            <div key={index}>
                { stage == 1 &&
                <div>
                {index < 3 &&
                    <div className={styles.mes} >
                        <div className={styles.lef} >
                            <h2 className={styles.hus}>{post.namestart}</h2>
                            <p className={styles.pep}>
                                {post.opis}
                            </p>
                            <form className="">
                            <Link 
                                to={`/startap`}
                                state = {{ from: post.id }} 
                                
                            >
                                <button 
                                className={styles.button}
                                >
                                    Подробнее о программе
                                </button>
                            </Link>
                            </form>
                        </div>
                        
                        <div className={styles.rig}>
                            <div className={styles.gree}>
                                <h2>Кто оказывает услуги</h2>
                                <p className={styles.del}>{post.name}</p>
                                <h2>Статус конкурса</h2>
                                <p className={styles.del}>{post.statusdata}</p>
                                <h2>Размер гранта</h2>
                                <p>{post.price}</p>
                            </div>
                        </div>
                    </div>
                } 
                </div>
                }
                { stage > 1 &&
                <div>
                {index > (stage*3-4)  && index < stage*3 &&
                
                    <div className={styles.mes} >
                        <div className={styles.lef} >
                            <h2 className={styles.hus}>{post.namestart}</h2>
                            <p className={styles.pep}>
                                {post.opis}
                            </p>
                            <form className="">
                            <Link 
                                to={`/startap`}
                                state = {{ from: post.id }} 
                                
                            >
                                <button 
                                className={styles.button}
                                >
                                    Подробнее о программе
                                </button>
                            </Link>
                            </form>
                        </div>
                        
                        <div className={styles.rig}>
                            <div className={styles.gree}>
                                <h2>Кто оказывает услуги</h2>
                                <p className={styles.del}>{post.name}</p>
                                <h2>Статус конкурса</h2>
                                <p className={styles.del}>{post.statusdata}</p>
                                <h2>Размер гранта</h2>
                                <p>{post.price}</p>
                            </div>
                        </div>
                    </div>
                } 

                </div>
                }
            
            </div>
        
        ))}
        
            <div className={styles.top}> 
                <div className={styles.flex_D}>
            <form action="" onSubmit={handleDown}>  
                    <input type="submit" onSubmit={handleDown} className={styles.lec} value="<" />   
            </form>
                    {date.map((post, index) => (
                        <div>
                        <div className={styles.wtf} key={index}>
                            {index < (date.length)/3 && index  < 7 &&
                                <div className={styles.pereh}>
                                     
                                    {index > 5 && index < 7 && stage < (Math.ceil(date.length/3-3)) &&
                                    <div className={styles.flex_D}>
                                        <input id={`${styles.toc}`} type="submit" onSubmit={handleUp}  className={`${styles.bu}`} value= {"..."} />   
                                        <input id={(date.length)/3} type="submit" onSubmit={handleUp}  className={`${styles.bu}`} value= {Math.ceil(date.length/3)} />   
                                    </div>
                                    }
                                    
                                    {
                                        
                                    }
                                    { index > -1 && index < 6 &&
                                        <input id={inx+index} type="submit" onSubmit={handleUp}  className={`${styles.bu}`} value= {inx+index} /> 
                                    }
                                </div>
                                
                                
                            }
                            
                        </div>
                        </div>                         
                    ))}
            <form action="" onSubmit={handleUp}>  
                    <input type="submit" onSubmit={handleUp} className={styles.lec} value=">" />   
            </form>
                </div>
            
            </div>
                                  
        </div> 
        } 
        { value[0] != "" &&
           <div className={styles.spis}>
        
        
           {date.map((post, index) => (
               <div key={index}>
                   {count.map(col => (
                    <div>
                   { col == post.id &&
                       <div className={styles.mes} >
                           <div className={styles.lef} >
                               <h2 className={styles.hus}>{post.namestart}</h2>
                               <p className={styles.pep}>
                                   {post.opis}
                               </p>
                               <form className="">
                               <Link 
                                   to={`/startap`}
                                   state = {{ from: post.id }} 
                                   
                               >
                                   <button 
                                   className={styles.button}
                                   >
                                       Подробнее о программе
                                   </button>
                               </Link>
                               </form>
                           </div>
                           
                           <div className={styles.rig}>
                               <div className={styles.gree}>
                                   <h2>Кто оказывает услуги</h2>
                                   <p className={styles.del}>{post.name}</p>
                                   <h2>Статус конкурса</h2>
                                   <p className={styles.del}>{post.statusdata}</p>
                                   <h2>Размер гранта</h2>
                                   <p>{post.price}</p>
                               </div>
                           </div>
                       </div>
                   } 
                
               </div>
               ))}
               <div  className={styles.Kran}>
                    <a href="#wrapper">Вверх ▲</a>
                </div>
            </div>
            
           ))}
           
               
                                     
           </div>  
        }
        </div> : <div>Loading...</div>;
    
}

export default Message