import axios from "axios";
import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from "react-router-dom";
 
function Users() {
    const {id} = useParams()
     
      const [data, setData] = useState([])
      const navigate = useNavigate()
      
      useEffect(()=> {
        axios.get('http://localhost:3001/')
        .then(res => {
            console.log(res);
          setData(res.data);
        })
        .catch(err => console.log(err));
      }, [])
   
      const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/deleteuser/${id}`)
            .then(res => {
                console.log(res);
                // Silme işlemi başarıyla tamamlandığında sayfayı yenileme
                setData(prevData => prevData.filter(user => user._id !== id));
            })
            .catch(err => console.log(err))
    }
     
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <Link to="/create" className="btn btn-success btn-sm"> Add +</Link>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                data.map((user, index) => {
                    return <tr key={index}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.age}</td>
                        <td>
                            <Link to={`/edit/${user._id}`} className="btn btn-sm btn-success me-2">Update</Link>
                            <button onClick={() => handleDelete(user._id)} className="btn btn-sm btn-danger">Delete</button>
                        </td>
                    </tr>
                })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}
 
export default Users;