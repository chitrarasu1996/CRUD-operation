import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { URL } from "../Services/API_URL";
import { GrDocumentUpdate } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";

import "../styles/read.css"
import { useNavigate } from "react-router-dom";


 
const Read = () => {
   
    const [apiData, setApiData] = useState([]);

 

  





    const navigate = useNavigate();
    const getApiData = async () => {
        const response = await axios.get(URL)
     
        setApiData(response.data)
    }
    useEffect(() => {
        getApiData()
    }, [])


    const deleteUSers = async (id) => {
    
console.log(id)
        await axios.delete(URL + id)
        getApiData()
    };

    const upateUser=({id,firstName,lastName})=>{
       
        localStorage.setItem("id",id)
        localStorage.setItem("firstName",firstName)
        localStorage.setItem("lastName",lastName)
        navigate("/update")
    }
    return (
        
        <div className="table-wrapper">
            <div ><h2>user Details</h2></div>
            {apiData.length ?
                <table className="table table-dark table-striped">
                    <thead>

                        <tr>
                            <th scope="col" >id</th>
                            <th scope="col">FirstName</th>
                            <th scope="col">LastName</th>
                            <th scope="col">Delete</th>
                            <th scope="col">update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {apiData.map((data, i) => (
                            <tr key={i}>

                                <th scope="row">{data.id}</th>
                                <td>{data.firstName}</td>
                                <td>{data.lastName}</td>
                                <td >< button onClick={() => { deleteUSers(data.id) }} type="button" class="btn btn-danger"><AiFillDelete /></button></td>
                                <td >< button onClick={()=>{upateUser(data)}} type="button" class="btn btn-primary"><GrDocumentUpdate /> </button></td>


                            </tr>
                        ))

                        }

                    </tbody>
                </table> : <div> <h2> Loading...</h2></div>}
               <Link to={"/"}><button className="btn btn-primary"> Create New User</button> </Link> 
            
               

        </div>
    )
};
export default Read;
