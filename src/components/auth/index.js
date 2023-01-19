import { API } from "../../config";


//for singup
export const signup = async (user) => {
    try {
        const res = await fetch(`${API}/register`, {
            method: "POST",
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });
        return await res.json();
    } catch (error) {
        console.log(error);
    }

};

//for singin
export const signin = async (user) => {
    try {
        const res = await fetch(`${API}/login`, {
            method: "POST",
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });
        return await res.json();
    } catch (error) {
        console.log(error);
    }

};

//to authenticate

export const authenticate=(data,next)=>{
    if(typeof window !=='undefined'){
        localStorage.setItem('jwt',JSON.stringify(data))
        next()
    }
}
//redirect user by user role if they are authenticated
export const isAuthenticated=()=>{
    if(typeof window ===`undefined`){
        return false
    }
    if(localStorage.getItem('jwt')){
        return JSON.parse(localStorage.getItem("jwt"))
    }
    else{
        return false
    }
}

//forget password
export const forgetPassword=async(user)=>{
    try {
        const res = await fetch(`${API}/forgotpassword`, {
            method: "POST",
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
//signout

export const signout=(next)=>{
    if(typeof window !=="undefined"){
        localStorage.removeItem('jwt',JSON.stringify('jwt'))
        next()
        return fetch(`${API}/logout`,{
            method: "POST",
        })
        .then(res=>{
            console.log('signout')
        })
        .catch(error=>console.log(error))
    }
}
//user list
export const userList=async(user)=>{
    try {
        const res = await fetch(`${API}/users`, {
            method: "POST",
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}