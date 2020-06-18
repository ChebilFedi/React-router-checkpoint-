import React from 'react';
import {Route, Redirect} from 'react-router-dom'
import Auth from '../Auth'
const PrivateRoute=({component:Component,authed, ...rest})=>{
    return (
      <Route
          {...rest}
          render={(props)=>authed===true?
          <Component {...props}></Component>
          :<Redirect to={{pathname: '/login', state: {from: props.location}}} />} 
      />  
    )
}
export default PrivateRoute;