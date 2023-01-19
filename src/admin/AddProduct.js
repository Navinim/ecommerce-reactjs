/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import './admin-css/addproduct.css'
import { isAuthenticated } from '../components/auth'
import AdminNav from './AdminNav'
import AdminSideBar from './AdminSideBar'
import { createProduct, getCategories } from './apiAdmin'



const AddProduct = () => {
    const { token } = isAuthenticated()
    const [values, setValues] = useState({
        title: '',
        desc: '',
        img: '',
        categories: [],
        category: '',
        size: '',
        color: '',
        price: '',
        countInStock: '',
        error: '',
        success: false,
        formData:new FormData()
    })
    //destructering
    const { title, desc, categories, size, color, price, countInStock, error, success, formData } = values
    //load categories and set form data
    const init = () => {
        getCategories().then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error })
            }
            else {
                setValues({ ...values, categories: data, formData })
            }
        })
    }
    //to semd formData
    useEffect(() => {
        init()
    }, [])
    const handleChange = name => event => {
        const value = name === 'img' ? event.target.files[0] : event.target.value
        formData.set(name, value)
        setValues({ ...values, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setValues({ ...values, error: '' })
        createProduct(token, formData)
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error })
                }
                else {
                    setValues({ ...values, title: '', desc: '', countInStock: '', price: '', color: '', size: '', success: true, error: '' })
                }
            })
    }
    //to show error
    const showError = () => (
        <span style={{ color: 'red', display: error ? '' : 'none' }}>{error}</span>
    )
    //to show success message
    const showSucc = () => (
        <span style={{ color: 'green', display: success ? '' : 'none' }}>
            New Product has been Created.
        </span>
    )

    return (
        <>
            <AdminNav />
            <div className="container">
                <AdminSideBar />
                <div className="newProductContainer">
                    <h3 className="addProductTitle">Add New Product</h3>
                    <form className="addProductForm" >
                        {showError()}
                        {showSucc()}
                        <div className="addProductItem" >
                            <label>Product Name</label>
                            <input type="text" placeholder="Product Title" onChange={handleChange('title')} value={title} />
                        </div>
                        <div className="addProductItem" >
                            <label>Product Details</label>
                            <textarea type="text" placeholder="Product Description" onChange={handleChange('desc')} value={desc} />
                        </div>
                        <div className="addProductItem" >
                            <label>Price</label>
                            <input type="text" placeholder="Rate of Item" onChange={handleChange('price')} value={price} />
                        </div>
                        <div className="addProductItem" >
                            <label>In Stock</label>
                            <input type="text" placeholder="Total Stock" onChange={handleChange('countInStock')} value={countInStock} />
                        </div>
                        <div className="addProductItem" >
                            <label>Size</label>
                            <input type="text" placeholder="Size of Item" onChange={handleChange('size')} value={size} />
                        </div>
                        <div className="addProductItem" >
                            <label>Color</label>
                            <input type="text" placeholder="Select Color" onChange={handleChange('color')} value={color} />
                        </div>
                        <div className="addProductItem" >
                            <label>Category</label>
                            <select onChange={handleChange('category')}>
                                <option>Choose Category</option>
                                {categories && categories.map((c, i) => (
                                    <option key={i} value={c._id}>
                                        {c.categoryName}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="addProductItem" >
                            <label>Image</label>
                            <input type="file" onChange={handleChange('img')} accept="image/*"/>
                        </div>
                        <button className="addProductButton" onClick={handleSubmit}>Add Product</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddProduct