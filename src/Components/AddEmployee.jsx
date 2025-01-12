import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import './AddEmployee.css'
import CustomAPI from './CustomAPI'
import Header from './Header'

const AddEmployee = () => {
  const {responseData,fetchData}= CustomAPI()
  const [employeeName, setEmployeeName] = useState('')
  const [employeeContact, setEmployeeContact] = useState('')
  const employeeEmail = useRef()
  const [employeeDesignation, setEmployeeDesignation] = useState('')
  const [employeeManager, setEmployeeManager] = useState('')
  const [employeeJoinDate, setEmployeeJoinDate] = useState('')
  const [employeeId, setEmployeeId] = useState(0)

  const navigate = useNavigate()

  const handleForm = (e) => {
    e.preventDefault()
    const employee_data = {
      employee_id: employeeId,
      employee_name: employeeName,
      employee_contact_number: employeeContact,
      employee_contact_email: employeeEmail.current.value,
      employee_designation: employeeDesignation,
      employee_reporting_manager: employeeManager,
      employee_joining_date: employeeJoinDate,
    }

    // Make sure the function is async
    const addEmployeeData = async () => {
      try {
        // Send employee data via POST request and wait for the response
        // await axios.post('http://localhost:3000/Employee_Data', employee_data)
        fetchData('http://localhost:3000/Employee_Data', 'post', employee_data)

        // Show success message once data is posted successfully
        Swal.fire('Congrats', 'Employee data added successfully', 'success')

        // Fetch updated employee data and calculate the next employee ID
        const response = await axios.get('http://localhost:3000/Employee_Data')
        setEmployeeId(response.data[response.data.length - 1].employee_id + 1)

        // Navigate to the view page after success
        navigate('/view')
      } catch (error) {
        // If an error occurs during the POST or GET requests, show error message
        console.error('Error occurred:', error) // Logs the error for debugging purposes
        Swal.fire('Oops', 'Something went wrong, error occurred', 'error')

        // Optionally navigate to view in case of error
        navigate('/view')
      }
    }

    // Call the async function
    addEmployeeData()
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
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="Employee contact Number"
          onChange={(e) => setEmployeeContact(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input type="text" placeholder="Employee Email here" ref={employeeEmail} />
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="Employee Designation here"
          onChange={(e) => setEmployeeDesignation(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="Employee Reporting Manager here"
          onChange={(e) => setEmployeeManager(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="Employee Joining Date here"
          onChange={(e) => setEmployeeJoinDate(e.target.value)}
        />
      </div>
      <div className="form-actions">
        <input type="button" value="Submit" onClick={handleForm} />
        <input type="button" value="Reset" onClick={() => window.location.reload()} />
      </div>
    </div>
    </>
  )
}

export default AddEmployee
