import axios from "axios";
import { useDispatch } from "react-redux";


function GetData()
{
    

    return function(dispatch){


        let coinList=["BTCUSDT","ETHUSDT","DOTUSDT","AVAXUSDT","XRPUSDT","BNBUSDT","NEOUSDT","EGLDUSDT","SOLUSDT","ADAUSDT","MATICUSDT","DOGEUSDT","LTCUSDT","ALGOUSDT","AXSUSDT","NEARUSDT","ONEUSDT"]
        let baseUrl="https://api.binance.com"
        let endpoints=coinList.map((val)=>{
            let query=`/api/v3/klines?symbol=${val}&interval=1d&limit=100`
            let mainUrl=baseUrl+query
            return mainUrl
        })
         axios.all(endpoints.map(val=>axios.get(val))).then(res=>{
            
          let result=res.map((el,index)=>{

                 return {
                     ...el,name:coinList[index],interval:"1d",limit:200
                 }
            })
            dispatch({
                type : "as",
                payload : result
            })
         })
    }
}

export {
    GetData
}