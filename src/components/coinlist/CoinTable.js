import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import "./cointable.css"
import { BsStar ,BsSearch} from "react-icons/bs";
const CoinTable = () => {
    let state  =useSelector(state=>state)
    const [veri,Setveri]=useState()
    const[test,setTest]=useState([])
    let coinList=["BTCUSDT","ETHUSDT","DOTUSDT","AVAXUSDT","XRPUSDT","BNBUSDT","NEOUSDT","EGLDUSDT","SOLUSDT","ADAUSDT","MATICUSDT","DOGEUSDT","LTCUSDT","ALGOUSDT","AXSUSDT","NEARUSDT"]
   
    useEffect(()=>{
        setTest(coinList)
        Setveri(state)
        console.log("state =>",state)
    },[state]) 
    
    const ChangeCoin=(e)=>{
        let data=   state.data.filter((val)=>{
           if(val.name.search(e.target.value)!=-1)
           {
               return val
           }
       })
      Setveri({
          data : data
      })
       
       console.log("veri => ",data) 
    }

    return (
        <div className='table-container'>
            <div className='table-header'>
                <h4 className='header-name'>
                    Coins
                </h4>
                
                <div className='search-container'>
                
                    <input type="text" onChange={(e)=>ChangeCoin(e)}  className='search-input' id='as1'  />
                  
                    <BsSearch  className='search-icon'  />
                
                   
                </div>
                
                    
                    
            
               
            </div>
            <div className='content'>
                {
                
                 veri?.data.map((val,index)=>{

                    return (
                        <div className='table-coin'>
                            <div className='left-side'>
                            <BsStar color='blue' />
                            <span>
                                {
                                    val.name
                                }
                            </span>
                            </div>
                             <div className='coin_price'>
                                <span>
                                    {
                                        val.data[9][4]
                                    }
                                </span>
                             </div>
                        </div>
                    )
                })   

                /* test.map((val)=><p>{val}</p>)  */
                }
            </div>
            <div>
                {
                  
                }
            </div>
        </div>
    )
}

export default CoinTable
