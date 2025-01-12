import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './ViewEmployee.css'
import CustomAPI from './CustomAPI'
import Header from './Header'

const ViewEmployee = () => {
  const {responsedata, fetchData}=CustomAPI()
    const getdata = async () => {
      fetchData()
    }

useEffect(()=>{
    getdata()
},[])
  return (
    <>
    <Header/>
    <table>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Number</th>
      <th scope="col">Email</th>
      <th scope="col">Designation</th>
      <th scope="col">Manager</th>
      <th scope="col">Date</th>
      <th scope="col">edit</th>
      <th scope="col">Delete</th>
    </tr>
    {responsedata.map((data,index)=>{return(
    <tr>
      <td>{index+1}</td>
      <td>{data.employee_name}</td>
      <td>{data.employee_contact_number}</td>
      <td>{data.employee_contact_email}</td>
      <td>{data.employee_designation}</td>
      <td>{data.employee_reporting_manager}</td>
      <td>{data.employee_joining_date}</td>
      <td><Link to= {`/update/${data.id}`}> <i className='fa fa-edit text-primary'></i></Link></td>
      <td><Link to= {`/delete/${data.id}`}> <i className='fa fa-trash text-danger'></i></Link></td>
    </tr>
  )})}
</table>
</>
  )
}

export default ViewEmployee