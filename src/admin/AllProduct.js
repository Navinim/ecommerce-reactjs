import { DeleteOutline } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import './admin-css/allproduct.css'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../components/auth'
import AdminNav from './AdminNav'
import AdminSideBar from './AdminSideBar'
import { getProducts } from './apiAdmin'

const AllProduct = () => {
    const [products, setProducts] = useState([])
    const { token } = isAuthenticated()

    const loadProduct = () => {
        getProducts().then(data => {
            if (data.error) {
                console.log(data.error)
            }
            else {
                setProducts(data)
            }
        })
    }
    useEffect(() => {
        loadProduct()
    }, [])
    const handleDelete = (_id) => {
        setProducts(products.filter((item) => item._id !== _id))
    }
    const columns = [
        
        {
            field: 'product', headerName: 'Product Name', width: 200,
            renderCell: (params) => {
                return (
                    <div className="productListItem">
                        <img className="productListImg" src={params.row.img} alt="" />
                        {params.row.title}
                    </div>
                );
            },
        },
        { field: 'desc', headerName: 'Description', width: 340 },
        { field: 'countInStock', headerName: 'Stock', width: 80 },

        { field: 'price', headerName: 'Price', width: 100 },
        {
            field: 'action', headerName: 'Action', width: 100,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/product/" + params.row._id}>
                            <button className='productListEdit'>Edit</button>
                        </Link>
                        <DeleteOutline className='productListDel' onClick={() => handleDelete(params.row._id)} />
                    </>
                )
            }
        },

    ];
    return (
        <>
            <AdminNav />
            <div className="container">
                <AdminSideBar />
                <div className="productListContainer">
                    <h4 className="addProductTitle">Total {products.length} products</h4>
                    <DataGrid getRowId={(products) => products._id} rows={products} columns={columns} pageSize={11} rowsPerPageOptions={[10]} checkboxSelection disableSelectionOnClick />
                </div>
            </div>

        </>
    )
}

export default AllProduct