import React from 'react';
import AdminArea from './Components/adminArea'
import {  Route, Switch,BrowserRouter } from 'react-router-dom'
import './App.css';
import Nav from './Components/Nav';
import Home from './Components/Home'
import Category from './Components/Category/Category'
import Products from './Components/Products/Products'
import { fakeAuth } from './Components/Authentification/Login';
import Login from './Components/Authentification/Login';
import PrivateRoute from './Components/Authentification/PrivateRoute'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Nav/>     
<Switch>
 
  <Route path='/' exact component={Home}></Route>
  <Route path='/login' component={Login}></Route>
  <PrivateRoute authed={fakeAuth.isAuthenticated} path='/adminarea' component={AdminArea}/>


  <Route path='/category' component={Category}></Route>
  <Route path='/products' component={Products}></Route>
</Switch>

    </div>
    </BrowserRouter>
  );
}

export default App;
