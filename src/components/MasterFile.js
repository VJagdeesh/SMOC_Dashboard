import ReadExcel from './ReadExcel';
import axios, { Axios } from 'axios';
import FilterTemplate from './FilterTemplate';
// import classes from "./Overalldesign.css"
import { useEffect, useState } from 'react';
import React,{lazy,Suspense} from 'react';
import Navbar from "../middle_page/Navbar";
import { useSelector } from 'react-redux';

const MasterFile=()=>{


    const [getdata,setgetdata]=useState([]);
    const [getdatedata,setgetdatedata]=useState([]);
  
    const fetchdateHandler=async()=>
    {
      const dateval=await axios.get("/api/datediff")
      // console.log(dateval);
      setgetdatedata(dateval);
    }
  
     
    useEffect( function (){
    fetchdateHandler();
    },[])

const MyComponent = React.lazy(() => import('./ReadExcel'));
return(
<div className="App" style={{height:window.innerHeight}}>
<Navbar/>
<h1>Meter Communication Dashboard</h1>
<FilterTemplate/> 
      <Suspense fallback={<div>"Loading..."</div>}>
      <MyComponent data={getdata} datedata={getdatedata.data} />
      </Suspense> 
         
</div>
);
};
export default MasterFile;