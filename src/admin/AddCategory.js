import React, { useState } from 'react'
import { isAuthenticated } from '../components/auth'
import './admin-css/addcategory.css'
import AdminNav from './AdminNav'
import AdminSideBar from './AdminSideBar'
import { createCategory } from './apiAdmin'

const AddCategory = () => {
    //destructure user and token from localstorage
    const {token } = isAuthenticated()
    const [categoryName, setCategoryName] = useState('')
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

   
    const handleChange=(e)=>{
        setError('')
        setCategoryName(e.target.value.toLowerCase())
    }
    const clickSubmit=(e)=>{
        e.preventDefault()
        setError('')
        setSuccess(false)
        //make request to post category
        createCategory(token,{categoryName})
        .then(data=>{
            if(data.error){
                setError(data.error)
            }
            else{
                setError('')
                setSuccess(true)
                setCategoryName('')
            }
        })
        .catch(err=> {
            console.log(err)
        })
    }
    //to show error
  const showError = () => (
    <span style={{color: 'red', display: error ? '' : 'none' }}>{error}</span>
  )
  //to show success message
  const showSucc = () => (
    <span style={{ color: 'green', display: success ? '' : 'none' }}>
      New Category has been Created.
    </span>
  )
    return (
        <>
            <AdminNav />
            <div className="container">
                <AdminSideBar />
        <div className="newCategoryContainer">
            <h3 className="addCategoryTitle">Add New Category</h3>
            <form className="addCategoryForm" >
               {showError()}
               {showSucc()}
                <div className="addCategoryItem" >
                    <label>Category</label>
                    <input type="text" placeholder="Category Name" onChange={handleChange} value={categoryName}/>
                </div>                
                <button className="addCategoryButton" onClick={clickSubmit}>Add Category</button>
            </form>
        </div>
        </div>
        
        </>
    )
}

export default AddCategory