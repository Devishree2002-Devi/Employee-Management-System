import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import CustomAPI from './CustomAPI'
// import './Employee.css'
import Header from './Header'

const EditEmployee = () => {
  const {responsedata,fetchData}= CustomAPI()
  const {id} = useParams()

  const[employeeName,setEmployeeName] = useState('')
  const[employeeContact,setEmployeeContact] = useState('')
  const[employeeEmail,setEmployeeEmail] = useState('')
  const[employeeDesignation,setEmployeeDesignation] = useState('')
  const[employeeManager,setEmployeeManager] = useState('')
  const[employeeJoinDate,setEmployeeJoinDate] = useState('')
  const [employeeId,setEmployeeId]=useState(3)

  const navigate = useNavigate()
  const handleForm=(e)=>{
    e.preventDefault()
    const employee_data ={
      employee_name: employeeName,
      employee_contact_number: employeeContact,
      employee_contact_email: employeeEmail,
      employee_designation: employeeDesignation,
      employee_reporting_manager: employeeManager,
      employee_joining_date: employeeJoinDate
    }

    try {
      // axios.put('http://localhost:3000/Employee_Data/${id}',employee_data)
      fetchData('http://localhost:3000/Employee_Data', 'put', employee_data)

        .then(()=>{
        new Swal("congrats", "employee data added sucessfully", "success")
        navigate ('/view')
      })
      .catch(()=>{
        new Swal("oops", "smtg error occured from server", "error")
      navigate('/view')
      })

    } catch {
      new Swal("oops", "smtg error occured", "error")
      navigate('/view')
    }

  }

  return (
    <>
    <Header/>
    <div className="form-container">
  <div className="form-group">
    <input
      type="text"
      placeholder="Employee name here"
      onChange={(e) => setEmployeeName(e.target.value)}
      className="form-input"
    />
  </div>
  <div className="form-group">
    <input
      type="text"
      placeholder="Employee contact Number"
      onChange={(e) => setEmployeeContact(e.target.value)}
      className="form-input"
    />
  </div>
  <div className="form-group">
    <input
      type="text"
      placeholder="Employee Email here"
      onChange={(e) => setEmployeeEmail(e.target.value)}
      className="form-input"
    />
  </div>
  <div className="form-group">
    <input
      type="text"
      placeholder="Employee Designation here"
      onChange={(e) => setEmployeeDesignation(e.target.value)}
      className="form-input"
    />
  </div>
  <div className="form-group">
    <input
      type="text"
      placeholder="Employee Reporting Manager here"
      onChange={(e) => setEmployeeManager(e.target.value)}
      className="form-input"
    />
  </div>
  <div className="form-group">
    <input
      type="text"
      placeholder="Employee Joining Date here"
      onChange={(e) => setEmployeeJoinDate(e.target.value)}
      className="form-input"
    />
  </div>

  <div className="form-actions">
    <input
      type="button"
      value="submit"
      onClick={handleForm}
      className="form-button"
    />
    <input
      type="button"
      value="reset"
      className="form-button reset-button"
    />
  </div>
</div>
</>
  )
}

export default EditEmployee