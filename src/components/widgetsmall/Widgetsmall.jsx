import "./widgetsmall.css"
import { MdVisibility } from "react-icons/md";


import React from 'react'

export default function Widgetsmall() {
    return (
        <div className="wsm">
          <div className="container"><div className="row"><div className="col-12"><span className="tt">New Patients</span></div>
            
            <ul class="list-group col-12">
  <li class="list-group-item"><img className="img-fluid rounded-circle " src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="not found"
           width="30px"/>
           <span className=" name"><b>Annie Smith</b></span>
           
      <button className="btn btn-sm btn-light    "><MdVisibility/></button>


            
        
           
            
          </li>





          <li class="list-group-item"><img className="img-fluid rounded-circle" src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="not found"
           width="30px"/>
           <span className=" name"><b>Annie Smith</b></span>
           
           <button className="btn btn-sm btn-light    "><MdVisibility/></button>
           
        
           
            
          </li>




          <li class="list-group-item"><img className="img-fluid rounded-circle" src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="not found"
           width="30px"/>
           <span className=" name"><b>Annie Smith</b></span>
           
           <button className="btn btn-sm btn-light    "><MdVisibility/></button>
           
            
          </li>
</ul>
</div></div>
        </div>
    )
}
