import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { BsFillArrowUpCircleFill ,BsFillArrowDownCircleFill } from "react-icons/bs";
import { GetData } from '../../redux/action'
import { Link, useHistory } from 'react-router-dom';
import Chartv from '../Chart'
import Test from '../Test'
import "./coin.css"
const Coin = () => {
    let history=useHistory()
    const state=useSelector(state=>state)
    const dispatch=useDispatch()
    
    useEffect(()=>{
        dispatch(GetData())
    /*     setInterval(()=>{
            dispatch(GetData())
        },[5000]) */
        
       
    },[])

    const pushbrow=(event,el)=>{
        
        
        history.push(`/coin/${el.name}`)
    }


    return (
        <div className='container'>

              {
                 state.data.map((el)=>{
                     return (
                         <div className='coinData'  >
                             <Link to={"/coin/"+el.name} className='coinHeader'  >
                                <h4 className='coin-name'>
                                {
                                    el.name
                                }
                               
                                </h4>
                                {
                                    parseFloat(el.data[el.data.length-1][4]) > parseFloat(el.data[el.data.length-2][4]) ? <h4 className='coin-price' style={{color:"green"}}>
                                    {
                                       parseFloat(el.data[el.data.length-1][4]).toFixed(3)
                                   }$ <BsFillArrowUpCircleFill  className='arrow-icon' />
                                    </h4> : <h4 className='coin-price' style={{color:"red"}}>
                                    {
                                       parseFloat(el.data[el.data.length-1][4]).toFixed(3)
                                   }$ <BsFillArrowDownCircleFill  className='arrow-icon'  />
                                    {
                                       (( (parseFloat(el.data[el.data.length-1][4]) / parseFloat(el.data[el.data.length-2][4])) -1 ) * 100).toFixed(2)
                                    }%
                                    </h4>
                                }
                                 
                                
                                
                             </Link>
                             <div className='chart'>
                             <Chartv value={el} candleCount={10} />
                             </div>
                             
                         </div>
                     )
                 }) 
             } 
           
        </div>
    )
}

export default Coin
