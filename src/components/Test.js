import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
const Test = ({value}) => {
    let {name}=useParams()
    const state=useSelector(state=>state)
     console.log("val >=",value["0"].name  )
    useEffect(()=>{
       let mainCoin= state.data.filter((el)=>el.name==name)
       console.log(mainCoin)
    },[])
    return (
        <div>
            {
                value.map((el)=><h2>{el.name}</h2>)
            }
        </div>
    )
}

export default Test
