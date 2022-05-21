import React from 'react'
import Sidebar from "../../../sidebar/Sidebar"
import Footer from '../../../footer/Footer';
import Home from '../Home';
import Topbar from '../../../topbar/Topbar';
import TopCard from '../../../topcard/TopCard';


export default function Index() {
    return (
        <div>     
     <Topbar/>
     
     <div>
     <div className="container ">
       <div className="row">
         <div className="col-md-3 col-xs-5"> 
         <Sidebar/>  </div>
       <div className="col-sm-9 col-xs-7"> <TopCard/><Home/> </div>
     </div>
  </div>
  

</div>
         <Footer/>
         
   </div> 
    
    )
}
