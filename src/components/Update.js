import axios from "axios";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { URL } from "../Services/API_URL";

const Update=()=>{

    const[id,setId]=useState("")
    const[firstName,setFirstName]=useState("")
    const[lastName,setLastName]=useState("")
    const navigate = useNavigate();

useEffect(()=>{
    setId(localStorage.getItem("id"))
    setFirstName(localStorage.getItem("firstName"))
    setLastName(localStorage.getItem("lastName"))
  
},[]);

const submission = (e) => {
    e.preventDefault();
};

const updateData=async()=>{

await axios.put(URL+id,{
    firstName,
    lastName
});
navigate("/read")
}

    return(
        <div >
         <div> <h2 className="mb-3 d-flex justify-content-center">update User</h2></div>
           
        <form onSubmit={submission} className="form-wrapper" >
       
            <div >
                <label>
                    First Name
                </label>

                <input value={firstName} onChange={(e) => { setFirstName(e.target.value) }} placeholder="Enter First Name" />
            </div><br></br>
            <div  >
                <label>
                    Last Name
                </label>

                <input value={lastName} onChange={(e) => { setLastName(e.target.value) }} placeholder="Enter Last Name" />

            </div><br></br>

            <button onClick={updateData} class="btn btn-outline-primary">update</button>

        </form>
       

    </div>
    )
};
export default Update;
