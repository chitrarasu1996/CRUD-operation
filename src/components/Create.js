
import { useEffect, useState } from "react";
import "../styles/create.css"
import axios from "axios";
import { URL } from "../Services/API_URL";
import { useNavigate } from "react-router-dom";
const Create = () => {


    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
   const navigate=useNavigate();

const postData=async()=>{
   const request =await axios.post(URL,{
    firstName,
    lastName
   });
   firstName.length>0 ? lastName.length>0 && navigate("/read") : alert("Enter FisrtName and LastName")

}
    const submission = (e) => {
    
        e.preventDefault();
    };

  

    return (
        <div>
            <form onSubmit={submission} className="form-wrapper">
                <div >
                    <label>
                        First Name
                    </label>

                    <input  className="rounded text-white bg-dark  ms-1" value={firstName} onChange={(e) => { setFirstName(e.target.value) }} placeholder="Enter First Name" />
                </div><br></br>
                <div  >
                    <label >
                        Last Name
                    </label>

                    <input className="rounded text-white bg-dark ms-1"  value={lastName} onChange={(e) => { setLastName(e.target.value) }} placeholder="Enter Last Name" />

                </div><br></br>

                <button onClick={postData} class="btn btn-primary ">submit</button>

            </form>
           

        </div>
    )
};
export default Create;