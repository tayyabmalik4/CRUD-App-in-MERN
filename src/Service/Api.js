import axios from 'axios';

const URL = 'http://localhost:4000';

export  const addUser = async (data)=>{
    try{
        return await axios.post(`${URL}/adduser`,data);
    }
    catch(error){
        console.log("Error while calling add User API", error);
    }
}

export const getuser = async () =>{
    try {
        return await axios.get(`${URL}/alluser`)
    } catch (error) {
        console.log("Error while calling get User API",error);
        
    }
} 

export const fatchuser = async (id) =>{
    try {
        return await axios.get(`${URL}/${id}`)
    } catch (error) {
        console.log("Error While fatching the User from MongoDB", error);
        
    }
}

export const editUser = async (user,id) =>{
    try {
        // we use post method as well as put method to update the data
        // return await axios.post(`${URL}/${id}`, user)
        return await axios.put(`${URL}/${id}`, user)
    } catch (error) {
        console.log("Error While calling the EditUser API ",error)
        
    }
}

export const deleteUser = async (id) =>{
    try {
        return await axios.delete(`${URL}/${id}`)
    } catch (error) {
        console.log("Error While calling Delete User API", error)
        
    }
}
