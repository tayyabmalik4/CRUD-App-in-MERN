import {React, useState} from 'react'
import './AddUser.css'
import { addUser } from '../../Service/Api'
import { useNavigate } from 'react-router-dom'

const defaultValue = {
    name:'',
    username:'',
    email:'',
    phone:''
}

export default function AddUser() {

    const [user, setuser] = useState(defaultValue);
    const navigate = useNavigate();

    const onvaluechange = (e)=>{
        // console.log(e.target.name ,e.target.value)
        setuser({...user,[e.target.name]:e.target.value})
        console.log(user)
    }
    const addUserDetails = async ()=>{
        // console.log("Button Clicked")
        await addUser(user);
        navigate('/alluser');
    }
  return (
    <>
    <div className="addusermain">
        <div className="headingmain">Add User</div>
        <div className='form'>
            <input className='inputfield' onChange={(e) => onvaluechange(e)} type="text" name='name' id='name' placeholder='Name' />
            <input className='inputfield' onChange={(e) => onvaluechange(e)} type="text" name='username' id='username' placeholder='Username' />
            <input className='inputfield' onChange={(e) => onvaluechange(e)} type="email" name='email' id='email' placeholder='Email' />
            <input className='inputfield' onChange={(e) => onvaluechange(e)} type="phone" name='phone' id='phone' placeholder='Phone' />
            <button className='btnform' onClick={()=>addUserDetails()}>Add User</button>
        </div>
    </div>
    </>
  )
}
