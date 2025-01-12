import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ViewAllEmployee = () => {
  const [employeeData, setEmployeeData] = useState([]);

  // Fetch Employee Data
  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/Employee_Data");
      setEmployeeData(response.data);
    } catch (error) {
      console.error("Error fetching employee data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1 className="text-primary text-center my-4">
        Welcome to Employee Management Portal
      </h1>

      <div className="container">
        <table className="table table-hover table-striped text-center">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Contact Number</th>
              <th>Email</th>
              <th>Designation</th>
              <th>Reporting Manager</th>
              <th>Joining Date</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {employeeData.map((data) => (
              <tr key={data.employee_id}>
                <td>{data.employee_id}</td>
                <td>{data.employee_name}</td>
                <td>{data.employee_contact_number}</td>
                <td>{data.employee_contact_email}</td>
                <td>{data.employee_designation}</td>
                <td>{data.employee_reporting_manager}</td>
                <td>{data.employee_joining_date}</td>
                <td>
                  <Link to={`/edit/${data.employee_id}`}>
                    <i className="fa fa-edit text-primary"></i>
                  </Link>
                </td>
                <td>
                  <Link to={`/delete/${data.employee_id}`}>
                    <i className="fa fa-trash text-danger"></i>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ViewAllEmployee;
