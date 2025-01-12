import axios from 'axios'
import React, { useState } from 'react'

const CustomAPI = () => {
    const apiurl = 'http://localhost:3000/Employee_Data'
    const [responsedata, setResponsedata] = useState([])
    const fetchData = async (url = apiurl, method = 'get', body = null, id = NaN) => {
        if (id) {
            url = url + id
            const res = await axios[method](url, body)
            setResponsedata(res.data)
            console.log(url,method);
            
        } else {
            const res =  await axios[method](url, body)
            setResponsedata(res.data)            
        }
    }
console.log(responsedata);

    return { responsedata, fetchData }
}

export default CustomAPI
