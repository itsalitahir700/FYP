import "./widgetlg.css"
import React from 'react'

export default function Widgetlg() {
    return (
        <div className="Wlg">
          <div className="container">
            <div className="row">
            <h3 className="widgetTitle col-12" >Recent Patients</h3>

            
      <table className="table col-12">
        <thead>
          <tr>
            <th>Patients</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
          <img className="img-fluid rounded-circle " alt="not found" width="30px" src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
          <span >     Alina Zia</span></td>
          <td>2 Jun 2021 </td>
         <td>Treated</td>
          </tr>

         <tr>
            <td>
          <img className="img-fluid rounded-circle " alt="not found" width="30px" src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
        <span >  Alina Zia</span></td>
          <td>2 Jun 2021 </td>
         <td>Treated</td>
          </tr>

          <tr>
            <td>
          <img className="img-fluid rounded-circle " alt="not found"  width="30px" src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
          <span > Alina Zia</span></td>
          <td>2 Jun 2021 </td>
         <td>Treated</td>
          </tr>
        </tbody>

      </table>
      </div>
      </div>
        </div>
    )
}

