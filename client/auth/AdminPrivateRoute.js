import React, { Component } from 'react'
import {  Redirect } from 'react-router-dom'
import auth from './auth-helper'

class AdminPrivateRoute extends Component{
  render(){
    const Component = this.props.component;
    
    return auth.isAuthenticated() ? (
      <Component  />
    ) : (<Redirect to={{pathname:'/auth/admin/signin '}} />)
  }
} 
export default AdminPrivateRoute
