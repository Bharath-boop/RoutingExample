import React from 'react'
import Card from './card'
function DashBoard() {
    let data=[
        {
            title:"EARNINGS(MONTHLY)",
            value:"$40000",
            color:"primary",
            icon:"fa-calendar",
            isProgress:false
         },
         {
            title:"EARNINGS(ANNUAL)",
            value:"$215000",
            color:"success",
            icon:"fa-dollar-sign",
            isProgress:false
         },
         {
            title:"TASK",
            value:"50",
            color:"info",
            icon:"fa-clipboard-list",
            isProgress:true
         },
         {
            title:"PENDING REQUESTS",
            value:"18",
            color:"warning",
            icon:"fa-comments",
            isProgress:false
         }
]
  return<>
   <div id="content-wrapper" className="d-flex flex-column">
   <div id="content">
   <div className="container-fluid">
   <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
    </div>
    <div className="row">
        {
            data.map((e,i)=>{
               return <Card cardData={e} key={i}/>
            })
        }
   
    </div>
   </div>
   </div>
   </div>
  </>
}

export default DashBoard