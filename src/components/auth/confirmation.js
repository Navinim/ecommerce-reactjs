import React, { useState, useEffect } from 'react'
import { API } from '../../config'
import Navbar from '../layout/Navbar'
import styled from "styled-components";
import { useParams } from 'react-router-dom';


const Show = styled.div`
  font-size:15px;
  font-weight:600;
  min-width: 40%;
 
`;
export const Confirmation = () => {
    const param=useParams()
    const [values, setValues] = useState({
        error: '',
        success: false,
        message:''
    })
    const { error,success,message } = values
    
    useEffect(() => {
     fetch(`${API}/confirmation/${param.token}`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(res => {
                return res.json()
            })
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error, success: false })
                } else {
                    setValues({ ...values, error: '', success: true })
                }
            })
            .catch(error => console.log(error))
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [param])

    //to show error
    const showError = () => (
        <Show style={{ color: 'red', display: error ? '' : 'none' }}>{error}</Show>
    )
    //to show success message
    const showSucc = () => (
        <Show style={{ color: 'green', display: success ? '' : 'none' }}>
            Your account has been successfully verified. Login to continue.
            {message}
        </Show>
    )
    return (
        <>
            <Navbar />
            {showError()}
            {showSucc()}
        </>
    )
}
