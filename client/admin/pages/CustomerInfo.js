import React from 'react';

import {CustomerData} from './CustomerData'
function CustomerInfo() {
    
    return (
        <div>
            {CustomerData.map((item, index)=>{
                return(
                    <div key={index}>
                        
                        <h2>{title='Customer Details'}</h2> 
                        <h3>name={item.name}</h3> 
                        <h3>location={item.location}</h3>
                        <h3>email='lampteyphinehas70@gmail.com'</h3>
                        <h3>status='Active' phone={item.contact}</h3>
                        <p>joined='10-10-2020'</p>
                    </div>)
            })}
        </div>
    )
}

export default CustomerInfo
