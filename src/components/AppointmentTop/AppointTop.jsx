import './appointop.css'
import React from 'react'
import {AiOutlineSchedule,AiOutlineUserDelete} from 'react-icons/ai'
import {GiStethoscope} from 'react-icons/gi'
import Image from './abc.jpg'





export default function AppointTop() {
    return (
        <div className="container">
        <div className="row">
        <div className="col-md-7">
        <div className="card appoint_card " >
<div className="card-body ">
  <span className="card-text "><b>Patient Appointments
<span className="appoint-icon"> <AiOutlineSchedule/>  </span>
</b></span>

 
</div>
</div>
        </div>

        <div className="col-lg-5">
        <div className="card appoint_card2 " >
        <div className="card-body">
    <div className="card-title ">New Patients <span className="appoint-new"><AiOutlineUserDelete/></span></div>
    <span className="card-text  padding"><b>24</b>
    <div className="progress">
  <div className="progress-bar progress-bar-striped" role="progressbar"  aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
</div>
    
    
    </span>
</div>
        </div>


        
        </div></div>
        
        <div className="row">
        <div className="col-lg-4">
        <div className="card  " >
        <div className="card-body">
    <div className="card-title tp "><b>Total Patients</b> <span className="appoint-new"><AiOutlineUserDelete/></span></div>
    <span className="card-text  padding"><b>196</b>
    <div className="progress">
  <div className="progress-bar progress-bar-striped tprog" role="progressbar"  aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
</div>
    </span>
</div>  </div> </div>


<div className="col-lg-4 mt-0">
        <div className="card  " >
        <div className="card-body" >
    <div className="card-title tp "><b>Total Doctors</b> <span className="appoint-new"><GiStethoscope/></span></div>
    <span className="card-text  padding"><b>42</b>
    <div className="progress">
  <div className="progress-bar progress-bar-striped" role="progressbar"  aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
</div>
    </span>
</div>  </div> </div>




<div className="col-lg-4 mt-0">
        <div className="card  " >
        <div className="card-body">
    <div className="card-title tp"><b>Appointments </b><span className="appoint-new"><AiOutlineSchedule/></span></div>
    <span className="card-text  padding"><b>9</b>
    <div className="progress">
  <div className="progress-bar progress-bar-striped aap" role="progressbar"  aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
</div>
    </span>
</div>  </div> </div>



        </div>
        

        <div className="row">
          <div className=" col-md-12 col-xs-12  tab"><br/>
            <h3>New Appointments</h3>
            <hr/>
          <table class="table">
  <thead>
    <tr>
      <th >Patient_Id</th>
      <th >First</th>
      <th >Last</th>
      <th >Appointment ID</th>
      <th >
      <button type="button" className="btn btn-sm btn-primary">View all</button>

      </th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">181342</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>09</td>
      <td>
      <button type="button" className="btn  btn-sm btn-secondary">Takeup</button>

      </td>
    </tr>
    <tr>
      <th scope="row">212312</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>08</td>
      <td>
      <button type="button" className="btn  btn-sm btn-secondary">Takeup</button>

      </td>
    </tr>
    <tr>
      <th scope="row">312343</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>07</td>
      <td>
      <button type="button" className="btn  btn-sm btn-secondary">Takeup</button>

      </td>
    </tr>
  </tbody>
</table>
          </div>

        </div>
        

<div className="row over overflow-auto">

    <h3 className="doc_head"><b> Doctors</b></h3><hr/>
  
  <div className="col-lg-6 ">
  
<div className="container">
  <div className="row">
    <div className="col-4">
<img src={Image} alt="not found" className="img-fluid rounded-circle" width="40%"/>
    </div>
    <div className="col-8">
      <h5 className=" "> <b> Peter Michael</b></h5>
      <span>MBBS,MD</span>
    </div>
  </div>

  <div className="row">
    <div className="col-4">
<img src={Image} alt="not found" className="img-fluid rounded-circle" width="40%"/>
    </div>
    <div className="col-8">
      <h5>   <b> Alizbeth Michael</b></h5>
      <span>MBBS,DO</span>
    </div>
  </div>

  <div className="row">
    <div className="col-4">
<img src={Image} alt="not found" className="img-fluid rounded-circle" width="40%"/>
    </div>
    <div className="col-8">
      <h5>   <b> Marco Michael</b></h5>
      <span>MBBS,DO PHD</span>
    </div>
  </div>

  <div className="row">
    <div className="col-4">
<img src={Image} alt="not found" className="img-fluid rounded-circle" width="40%"/>
    </div>
    <div className="col-8">
      <h5>  Peter Michael</h5>
    </div>
  </div>

  <div className="row">
    <div className="col-4">
<img src={Image} alt="not found" className="img-fluid rounded-circle" width="40%"/>
    </div>
    <div className="col-8">
      <h5>  Peter Michael</h5>
    </div>
  </div>

  <div className="row">
    <div className="col-4">
<img src={Image} alt="not found" className="img-fluid rounded-circle" width="40%"/>
    </div>
    <div className="col-8">
      <h5>  Peter Michael</h5>
    </div>
  </div>

  <div className="row">
    <div className="col-4">
<img src={Image} alt="not found" className="img-fluid rounded-circle" width="40%"/>
    </div>
    <div className="col-8">
      <h5>  Peter Michael</h5>
    </div>
  </div>

  <div className="row">
    <div className="col-4">
<img src={Image} alt="not found" className="img-fluid rounded-circle" width="40%"/>
    </div>
    <div className="col-8">
      <h5>  Peter Michael</h5>
    </div>
  </div>


  <div className="row">
    <div className="col-4">
<img src={Image} alt="not found" className="img-fluid rounded-circle" width="40%"/>
    </div>
    <div className="col-8">
      <h5>  Peter Michael</h5>
    </div>
  </div>



  <div className="row">
    <div className="col-4">
<img src={Image} alt="not found" className="img-fluid rounded-circle" width="40%"/>
    </div>
    <div className="col-8">
      <h5>  Peter Michael</h5>
    </div>
  </div>

</div></div>

<div className="col-lg-3 "> 
<div className="container">
<h5> <b>Timings</b></h5></div>
<div className="row">
  <div className="col-12 ">
9.00am
</div>
</div>



<div className="row">
  <div className="col-12 ">
12.09am
</div>
</div>

</div>

<div className="col-lg-3 "> 
<div className="container">
<h5> <b>Contact</b></h5>
  <div className="row"><div className="col-12">0963123123

</div>
</div>
<div className="row"><div className="col-12">0315674323

</div>
</div>
</div>
</div>

</div>

</div>


        
        
   
      
    )
}
