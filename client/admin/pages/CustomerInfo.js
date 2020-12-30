import React from 'react';
import SellerInfoCard from './../components/SellerInfoCard'
import CustomerData from './../pages/CustomerData'
function CustomerInfo() {
    
    return (
        <div>
            {CustomerData.map((item, index)=>{
                return(
                    <SellerInfoCard 
                        key={index}
                        title='Customer Details' 
                        name={item.name} location={item.location}
                        email='lampteyphinehas70@gmail.com'
                        status='Active' phone={item.contact}
                        joined='10-10-2020'/>
                    )
            })}
        </div>
    )
}

export default CustomerInfo
