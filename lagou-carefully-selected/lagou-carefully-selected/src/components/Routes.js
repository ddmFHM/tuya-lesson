import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './core/Home'
import Shop from './core/Shop'
import Signin from './core/Signin'
import Signup from './core/Signup'
import UserDashboard from './admin/UserDashboard'
import AdminDashboard from './admin/AdminDashboard'
import PrivateUser from './admin/PrivateUser'
import PrivateAdmin from './admin/PrivateAdmin'
import AddCategory from './admin/AddCategory'
import AddProduct from './admin/AddProduct'
import Product from './core/Product'
import Order from './admin/Order'
import Cart from './core/Cart'
export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/shop" component={Shop} />
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
      <PrivateUser path="/user/dashboard" component={UserDashboard} />
      <PrivateAdmin path="/admin/dashboard" component={AdminDashboard} />
      <PrivateAdmin path="/admin/order" component={Order} />
      <PrivateAdmin path="/create/category" component={AddCategory} />
      <PrivateAdmin path="/create/product" component={AddProduct} />
      <Route path="/product/:productId" component={Product} />
      <Route path="/cart" component={Cart} />
    </Switch>
  )
}
