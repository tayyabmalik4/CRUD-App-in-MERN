import React, { useEffect, useState } from 'react'
import './AllUser.css'

import { getuser, deleteUser } from '../../Service/Api'
import { Link } from 'react-router-dom';

export default function AllUser() {


  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAlluser();
  }, [])

  const getAlluser = async () => {
    let response = await getuser();
    setUsers(response.data);

    // console.log(response.data)
  }

  const deleteUserDetails = async (id) => {
    await deleteUser(id);
    getAlluser();
  }
  return (
    <>
      <div className="allusermain">
        <div className="headingalluser">All User</div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>UserName</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          {
            users.map((user) => {
              return (

                <tbody key={user._id}>
                  <tr>
                    <td>{user._id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>
                      <Link className="btnedit btn" to={`/edituser/${user._id}`}>Edit</Link>
                    </td>
                    <td>
                      <button className='btndel btn' onClick={() => deleteUserDetails(user._id)}>Delete</button>
                    </td>
                  </tr>
                </tbody>
              )
            }
            )
          }
        </table>
      </div>
    </>
  )
}
