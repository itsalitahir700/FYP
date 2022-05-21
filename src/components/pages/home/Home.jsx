import "./home.css"
import Feature from "../../featuredInfo/Feature"
import Chart from "../../charts/Chart"

import React from 'react'
import Widgetsmall from "../../widgetsmall/Widgetsmall"
import Widgetlg from "../../Widgetlg/Widgetlg"
import Footer from "../../footer/Footer"



    
    export default function home() {
        return (
        
            
                <div  className="home">
            <Feature/>   
         <Chart/>
         <div className=" container">

             <div className="row">
                 
                 <div className="col-lg-5">
                 <Widgetsmall/>
                 </div>
                 <div className="col-lg-7">
                 <Widgetlg/>
                     </div>

             </div>

           
           
             

         </div >
        
         
        </div>
                
           
                )
            }