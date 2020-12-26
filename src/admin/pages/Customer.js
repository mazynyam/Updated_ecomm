import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom'
function Customer(props) {
    return (
        <div className="flex flex-row justify-around black-color items-center p-1 cursor-pointer border-solid w-5/6 border h-6 row-hover"> 
            <span>
                <h3>{props.fullname}</h3>
            </span>
            <span>
                <h3>{props.businessName}</h3>
            </span>
            <span>
                <h3>{props.location}</h3>
            </span>
            <span>
                <h3>{props.contact}</h3>
            </span>  
            <span>
                
                { 
                 <Link to='CustomerInfo'>
                     <FaIcons.FaEdit style={{color:'green'}}/>
                 </Link>
                }
            </span>    
            <span>
                {<AiIcons.AiFillDelete style={{color:'red'}}/>}
            </span>    
        </div>
    )
}

export default Customer
