import axios from 'axios'
import React, { useEffect } from 'react'
import CustomAPI from './CustomAPI'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

const DeleteEmployee = () => {
  const {responsedata, fetchData}= CustomAPI()
    const {id} = useParams()
    const navigate = useNavigate()

    const deleteData=async()=>{
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async(result) => {        
        if (result.isConfirmed) {
          // await axios.delete(`http://localhost:3000/Employee_Data/${id}`)
          const apiurl='http://localhost:3000/Employee_Data/'
          fetchData(apiurl, 'delete',null,id)

          .then(()=>{
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          navigate('/view')
      })
       .catch(()=>{
        Swal.fire({
          title: "Error!",
          text: "Failed",
          icon: "error"
        });
       })
      }
    });
  }
    useEffect(()=>{
        deleteData()
    },[])
    
    return (
    <div>DeleteEmployee</div>
  )
}

export default DeleteEmployee