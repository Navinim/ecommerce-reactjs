import React from "react";
import "./App.css"
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./components/Register";
import Login from "./components/Login";
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import { Confirmation } from "./components/auth/confirmation";
import ForgetPassword from "./components/auth/ForgetPassword";
import AdminRoute from "./components/auth/AdminRoute";
import PrivateRoute from "./components/auth/PrivateRoute";
import UserDashboard from "./components/auth/UserDashboard";
import AdminDashboard from "./components/auth/AdminDashboard"
import AddCategory from "./admin/AddCategory";
import AddProduct from "./admin/AddProduct";
import AllProduct from "./admin/AllProduct";
// import { Admin } from "./pages/Admin";

const App = () => {
    
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />        
        <Route path="/products/:category" component={ProductList} />
        <Route exact path="/confirmation/:token" component={Confirmation} />
        <Route exact path="/forget/password" component={ForgetPassword } />
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register }/>
        {/* Admin */}
        <AdminRoute exact path="/admin/dashboard" component={ AdminDashboard }/>
        <AdminRoute exact path="/admin/addcategory" component={ AddCategory }/>
        <AdminRoute exact path="/admin/addproduct" component={ AddProduct }/>
        <AdminRoute exact path="/admin/allproduct" component={ AllProduct }/>
        {/* user */}
        <PrivateRoute exact path="/user/profile" component={UserDashboard}/>

      </Switch>
    </Router>
  )
}

export default App;