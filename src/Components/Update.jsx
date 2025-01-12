import axios from 'axios'
import React, { useEffect, useReducer } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import CustomAPI from './CustomAPI'
import Swal from 'sweetalert2'
import Header from './Header'

const Update = () => {
      const {responsedata,fetchData}= CustomAPI()
    const { id } = useParams()
    const Navigate = useNavigate()
    const initialstate = {
        employee_name: "",
        employee_contact_number: "",
        employee_contact_email: "",
        employee_designation: "",
        employee_reporting_manager: "",
        employee_joining_date: ""
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case "employee_name":
                return { ...state, employee_name: action.payload }
            case "employee_contact_number":
                return { ...state, employee_contact_number: action.payload }
            case "employee_contact_email":
                return { ...state, employee_contact_email: action.payload }
            case "employee_designation":
                return { ...state, employee_designation: action.payload }
            case "employee_reporting_manager":
                return { ...state, employee_reporting_manager: action.payload }
            case "employee_joining_date":
                return { ...state, employee_joining_date: action.payload }
        }
    }
    const [state, dispatch] = useReducer(reducer, initialstate)
    const { employee_name, employee_contact_number, employee_contact_email, employee_designation, employee_reporting_manager, employee_joining_date } = state

    const getValues = async () => {
        const response = await axios.get(`http://localhost:3000/Employee_Data/${id}`)
        // fetchData('http://localhost:3000/Employee_Data/','get',null,id)
        console.log(responsedata);
        
        dispatch({ type: "employee_name", payload: response.data.employee_name })
        dispatch({ type: "employee_contact_number", payload: response.data.employee_contact_number })
        dispatch({ type: "employee_contact_email", payload: response.data.employee_contact_email })
        dispatch({ type: "employee_designation", payload: response.data.employee_designation })
        dispatch({ type: "employee_reporting_manager", payload: response.data.employee_reporting_manager })
        dispatch({ type: "employee_joining_date", payload: response.data.employee_joining_date })
    }

    const changevalues = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case "employee_name":
                dispatch({ type: "employee_name", payload: value })
                break;
            case "employee_contact_number":
                dispatch({ type: "employee_contact_number", payload: value })
                break;
            case "employee_contact_email":
                dispatch({ type: "employee_contact_email", payload: value })
                break;
            case "employee_designation":
                dispatch({ type: "employee_designation", payload: value })
                break;
            case "employee_reporting_manager":
                dispatch({ type: "employee_reporting_manager", payload: value })
                break;
            case "employee_joining_date":
                dispatch({ type: "employee_joining_date", payload: value })

        }
    }

    const handlesubmit= async (e)=>{
        e.preventDefault()
        const employee_details = {
            employee_name : employee_name,
            employee_contact_number: employee_contact_number,
            employee_contact_email : employee_contact_email,
            employee_designation : employee_designation,
            employee_reporting_manager : employee_reporting_manager,
            employee_joining_date : employee_joining_date
        }
        try {
            // await axios.put (`http://localhost:3000/Employee_Data/${id}`, employee_details)
            fetchData('http://localhost:3000/Employee_Data/', 'put', employee_details, id)
            Swal.fire('congrats', 'data updated sucessfully' , 'success')
            Navigate('/view')
            console.log(employee_details);
            
        } catch {
            Swal.fire ('oops!!!', 'failed to update', 'error')
        }
    }
    useEffect(() => {
        getValues()
    }, [id])


    return (
        <>
        <Header/>
        <div className="form-container">
            <div className="form-group">
                <input type="text" placeholder="Employee name here" value={employee_name} name='employee_name' onChange={changevalues} />
            </div>
            <div className="form-group">
                <input type="text" placeholder="Employee contact Number" value={employee_contact_number} name='employee_contact_number' onChange={changevalues} />
            </div>
            <div className="form-group">
                <input type="text" placeholder="Employee Email here" value={employee_contact_email} name='employee_contact_email' onChange={changevalues} />
            </div>
            <div className="form-group">
                <input type="text" placeholder="Employee Designation here" value={employee_designation} name='employee_designation' onChange={changevalues} />
            </div>
            <div className="form-group">
                <input type="text" placeholder="Employee Reporting Manager here" value={employee_reporting_manager} name='employee_reporting_manager' onChange={changevalues} />
            </div>
            <div className="form-group">
                <input type="text" placeholder="Employee Joining Date here" value={employee_joining_date} name='employee_joining_date' onChange={changevalues} />
            </div>
            <div className="form-actions">
                <input type="button" value="Submit" onClick={handlesubmit}/>
                <input type="button" value="Reset" />
            </div>
        </div>
        </>
    )
}

export default Update
