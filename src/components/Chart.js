import React from 'react'
import Chart from "react-apexcharts";
const Chartv = ({value,candleCount}) => {
  console.log("valueChart =>",value)
    let prices
    prices=value.data.map(el=>{
      return  el[4]
   })
 
    
    prices=prices.slice(prices.length-candleCount,prices.length) 
    let date=value.data.map(el=>{
      let dateVal=new Date(el[0])
      console.log("dateval =>",dateVal.toISOString())
      let day= dateVal.toISOString().split("-")[2].charAt(0)+dateVal.toISOString().split("-")[2].charAt(1)
      let month=dateVal.getMonth()
      let result= (parseInt(day)).toString() +"-"+(parseInt(month)+1).toString()
      return result
    })
    date=date.slice(date.length-candleCount,date.length)
    console.log("date => ",date)
   
    let state = {
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: date
          }
        },
        series: [
          {
            name: "price",
            size : 45,
            data: prices
          }
        ]
      };
    

    return (
    
            <Chart
              options={state.options}
              series={state.series}
              type="line"
             
            />
        
    )
}

export default Chartv
