import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Chartv from '../Chart'
import "./fullchart.css"
import Test from '../Test'

const FullChart = () => {
    const [coin,Setcoin]=useState({data:null})
    const {name}=useParams()
    let state=useSelector(state=>state)

    state= state.data.filter((e)=>e.name==name)
    
   

    return (
        <div className='full_chart_container'>
           {
              <Chartv value={state["0"] }  candleCount={50}  />
           }
        </div>
    )
}

export default FullChart
