import React, {  useState } from 'react'
import { createSubAccount } from '../backend/customer-api'
import Select from 'react-select'
import countryList from 'react-select-country-list'

function CreateSellerAccount(){
   
        
        const [values, setValues] = useState({
            account_bank:'',
            account_number:'',
            account_name:'',
            business_email:'',
            business_contact:'',
            business_mobile:'',
            country:countryList().getData(),
            meta:'',
            split_type:'',
            split_value:'',
            error:'', 
            open: false
        })
        const clickSubmit = ()=>{
            const accountInfo = {
                account_bank: values.account_bank || undefined,
                account_number: values.account_number || undefined,
                account_name: values.account_name || undefined,
                business_email: values.business_email || undefined,
                business_contact: values.business_contact || undefined,
                business_mobile: values.business_mobile || undefined,
                country: values.country || undefined,
                split_value: values.split_value || undefined
            }
            createSubAccount(accountInfo).then((data)=>{
                if(data.error){
                    setValues({...values, error: data.error})
                }else{
                    setValues({...values, error: '', open:true})
                }
            })
        }
        const handleChange = name => event => {
            setValues({ ...values, [name]: event.target.value })
          }
        const {names}= values
        return (
            <div className="seller-form card">
                <h2 className="text-base text-2xl">Create  new Seller Account</h2>
                <form >
                    <div className="form-control">
                        <input type="text" id="account_bank" value={values.account_bank} placeholder="Account Bank" onChange={handleChange('account_bank')} required />
                    </div>
                    <div className="form-control">
                        <input type="text"  id="account_number" value={values.account_number} placeholder="Account Number" onChange={handleChange('account_number')} required />
                    </div>
                    <div className="form-control">
                        <input type="text"  id="account_number" value={values.account_name} placeholder="Account Name" onChange={handleChange('account_name')} required />
                    </div>
                    <div className="form-control">
                        <input type="email" id="business_email" value={values.business_email} placeholder="example@domain.com" onChange={handleChange('business_email')} required />
                    </div>
                    <div className="form-control">
                        <input type="text" id="business_contact" value={values.business_contact} placeholder="Address" onChange={handleChange('business_contact')} required />
                    </div>
                    <div className="form-control">
                        <input type="text" id="business_mobile" value ={values.business_mobile} placeholder="+1 (971) 455 9896" onChange={handleChange('business_mobile')} required />
                    </div>
                    <div className="form-control">
                        <Select 
                         options={values.country}
                         value={names}
                         onChange={handleChange} 
                         placeholder='Select Country'/>
                        {/* <input type="select" id="country" value = {values.country} placeholder="Select Country" onChange={handleChange('country')} required /> */}
                    </div>
                    <div className="form-control">
                        <input type="text" id="split_value" value={values.split_value} placeholder="0.5" onChange={handleChange('split_value')} required />
                    </div>
                    <input className="btn btn-secondary" type="submit" value="Create Account" onClick={clickSubmit} />
                        {values.error && (<span>{values.error}</span>)}
                </form>
            </div>
        )
    }

export default CreateSellerAccount
