import "./chart.css"
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function Chart() {
    const data = [
      
        {
          name: 'Jan',
          "Active Patient": 4000,
         
        },
        {
          name: 'Feb ',
          "Active Patient": 6000,
        },
        {
          name: 'March',
          "Active Patient": 3000,
        },
        {
            name: 'April',
            "Active Patient": 5000,
          },
          {
            name: 'May',
            "Active Patient": 2000,
          },

          {
            name: 'June',
            "Active Patient": 1000,
          },
          {
            name: 'July',
            "Active Patient": 3000,
          },



      ];
    return (
        <div className="chart">
            <h3 className="chartTitle mb-5">
                Patient Activity
            </h3>
            


            <ResponsiveContainer width="100%" aspect={4/1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#5550bd"/>
<Line type="monotone" dataKey="Active Patient" stroke="#5550bd"/>
<Tooltip/>


                    

                </LineChart>
                
            </ResponsiveContainer>
        </div>
    )
}
