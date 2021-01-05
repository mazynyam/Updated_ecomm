import React from 'react'
import Customer from './Customer'
import {CustomerData} from './CustomerData'
import './CustomerStyles.css'
function Customers() {
    return (
        <div className="space-left">
            <h2>Customers List</h2>
            <Customer style={{fontWeight:'bold'}} fullname="Fullname" businessName="Company Name" location="Address" contact="Contact" action="Action" />
            {CustomerData.map((item, index)=>{
                return (
                <Customer 
                    className="customers"
                    key={index}
                    backgroundColor='#ccc'
                    fullname={item.fullname} 
                    businessName={item.businessName} 
                    location={item.location} 
                    contact={item.contact} />
                )
            })}
            
        </div>
    )
}

export default Customers
