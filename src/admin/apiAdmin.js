import { API} from "../config"

//to add category
export const createCategory=async (token,category)=>{
    try {
        const res = await fetch(`${API}/postcategory`, {
            method: "POST",
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(category)
        })
        return await res.json()
    } catch (err) {
        console.log(err)
    }
}
//to get all category
export const getCategories=async ()=>{
    try {
        const res = await fetch(`${API}/categorylists`, {
            method: "GET",
        })
        return await res.json()
    } catch (err) {
        console.log(err)
    }
}
//to add product
export const createProduct=async (token,product)=>{
    try {
        const res = await fetch(`${API}/postproduct`, {
            method: "POST",
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            },
            // body: JSON.stringify(product) we can't stringify because data sent from forms
            body:product
        })
        return await res.json()
    } catch (err) {
        console.log(err)
    }
}

//to show product
export const getProducts=async ()=>{
    try {
        const res = await fetch(`${API}/productlist`, {
            method: "GET",
        })
        return await res.json()
    } catch (err) {
        console.log(err)
    }
}