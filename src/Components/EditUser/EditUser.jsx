import {React, useState,useEffect} from 'react'
import '../AddUser/AddUser'
import {editUser,fatchuser } from '../../Service/Api.js'
import { useNavigate, useParams } from 'react-router-dom'




const defaultValue = {
    name:'',
    username:'',
    email:'',
    phone:''
}

export default function EditUser() {

    const [user, setuser] = useState(defaultValue);
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(()=>{
        loaduserData();
    },[]);
    
    const loaduserData = async ()=>{
        const response = await fatchuser(id);
        setuser(response.data);
    }

    const onvaluechange = (e)=>{
        // console.log(e.target.name ,e.target.value)
        setuser({...user,[e.target.name]:e.target.value})
        console.log(user)
    }
    const EditUserDetails = async ()=>{
        // console.log("Button Clicked")
        await editUser(user ,id);
        navigate('/alluser');
    }
  return (
    <>
    <div className="addusermain">
        <div className="headingmain">Edit User</div>
        <div className='form'>
            <input className='inputfield' onChange={(e) => onvaluechange(e)} value = {user.name} type="text" name='name' id='name' placeholder='Name' />
            <input className='inputfield' onChange={(e) => onvaluechange(e)} value = {user.username} type="text" name='username' id='username' placeholder='Username' />
            <input className='inputfield' onChange={(e) => onvaluechange(e)} value = {user.email} type="email" name='email' id='email' placeholder='Email' />
            <input className='inputfield' onChange={(e) => onvaluechange(e)} value = {user.phone} type="phone" name='phone' id='phone' placeholder='Phone' />
            <button className='btnform' onClick={()=>EditUserDetails()}>Edit User</button>
        </div>
    </div>
    </>
  )
}
