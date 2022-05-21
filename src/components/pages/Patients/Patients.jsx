import Ptop from '../../patient_topbar/Ptop'
import Sidebar from '../../sidebar/Sidebar'
import Topbar from '../../topbar/Topbar'
import Footer from '../../footer/Footer';

import './patient.css'

export default function Patients() {
    return (
        <div>
            <Topbar/>
            <div>
     <div className="container ">
       <div className="row">
         <div className="col-md-3 col-xs-5"> 
         <Sidebar/>  </div>
       <div className="col-sm-9 col-xs-7"><Ptop/> </div>
     </div>
     
  </div>
  <Footer/>

</div>
        </div>
    )
}
