import "./feature.css"
import {AiOutlineArrowUp,AiTwotoneAlert} from "react-icons/ai"
import{GoTasklist} from "react-icons/go"




export default function feature() {
    return (


        <div className="featured">




<div className="container"><div className="row">
    <div className="col-lg-4 ">
    <div className="card ">
<div className="card-body">
<span className="card-title mb-2"> Patients</span>
<div className="card-subtitle mt-auto "><span className="featuredPatients">24 <AiOutlineArrowUp className="ficon"/></span></div>
<p class="card-text mt-auto">New Patients</p>


</div>
    
</div></div>

<div className="col-lg-4">
    <div className="card ">
<div className="card-body">
<span className="card-title mb-2">                     Important Tasks</span>
<div className="card-subtitle mt-auto "><span className="featuredPatients">13 <GoTasklist className="ficon"/></span></div>
<p class="card-text mt-auto">New Tasks</p>


</div>
    
</div>
        
        
        </div>

        <div className="col-lg-4">
    <div className="card ">
<div className="card-body">
<span className="card-title mb-2">                    Complex Alerts</span>
<div className="card-subtitle mt-auto "><span className="featuredPatients">9 <AiTwotoneAlert className="ficon"/></span></div>
<p class="card-text mt-auto">New Alerts</p>


</div>
    
</div>
        
        
        </div>
        </div></div>



        </div>



     








    )
}
