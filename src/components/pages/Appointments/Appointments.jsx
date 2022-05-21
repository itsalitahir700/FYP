import Sidebar from '../../sidebar/Sidebar'
import Topbar from '../../topbar/Topbar'
import Footer from '../../footer/Footer';

import './appointments.css'
import AppointTop from '../../AppointmentTop/AppointTop';

export default function Appointments() {
    return (
        <div>
        <Topbar/>
        <div>
 <div className="container ">
   <div className="row">
     <div className="col-md-3 col-xs-5"> 
     <Sidebar/>  </div>
   <div className="col-sm-9 col-xs-7"><AppointTop/> </div>
 </div>
 
</div>
<Footer/>

</div>
    </div>
    )
}
