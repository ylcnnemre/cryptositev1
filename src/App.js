import React, { useEffect } from 'react'
import axios from "axios"
import Chartv from './components/Chart'
import Coin from './components/coins/Coin'
import "./app.css"
import { useDispatch, useSelector } from 'react-redux'
import { GetData } from './redux/action'
import CoinTable from './components/coinlist/CoinTable'
import {Route,BrowserRouter  ,Switch,  Link} from "react-router-dom"
import Test from './components/Test'
import FullChart from './components/fullChart/FullChart'
const App = () => {
    const state=useSelector(state=>state)
   const dispatch=useDispatch()
    
    return (
        <>
            <BrowserRouter>
                <Switch>     
                    <Route exact path="/"  >
                            <Coin/>
                    </Route>
                    <Route path="/coin/:name">
                       <FullChart />
                    </Route>
                    <Route  path="/test">
                        <h5>
                            test
                        </h5>
                    </Route>
                 </Switch>
            </BrowserRouter>
        
        </>
       /*  <div className='app-container'>
            <div className='app_coin'>
                <Coin/>
            </div>
            <div className='app_content'>
                <CoinTable/>
            </div>
        </div> */
    )
}

export default App
