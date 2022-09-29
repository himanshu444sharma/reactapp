import React, { useState } from "react";
import Showdata from "./Showdata";
const Setdata = () => {

    const [Data, setdata]=useState("")
    const [ showData ,setShowData]= useState("")

    const fun = () => {
        setShowData(Data);
        alert("himanshu");
        console.log(Data);
      
    }



return(
    <>
    <label for="fname">Fname</label>
   <input itemType="text" id="fname" value={Data} onChange={(a)=> setdata(a.target.value)}/>
   <button onClick={fun}>login</button>

   <Showdata info = { showData}></Showdata>
    </>

)
}
export default Setdata;