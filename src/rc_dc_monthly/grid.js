import { useState,useEffect } from "react";
import Filter from "./filter";
import Graph1 from "./graph1";
import Graph2 from "./graph2";



function Grid() {
  const[array,setArray]=useState([]);
  const[dev,setDev]=useState('')
  
  useEffect(()=>{
    
  },[array])

  function Callmethod(num){
    // for(let i=0;i<num.length;i++)
    // {
    // console.log(num[i].name);  
    // }
    console.log("In grid  ",num)
    setArray(num)
  }

return(

<div class="container border border-grey mt-4" style={{height:window.innerHeight}}>
      <div class="row align-items-stretch border border-grey p-1 m-2 " style={{height:window.innerHeight/4}}>
      <div class="d-flex align-items-center justify-content-center">
      <Filter status = {Callmethod}/>  
    </div> 
        
      </div>
      <div class="row align-items-stretch p-1 m-2" style={{height:window.innerHeight/1.5}}>
        <div class="col border border-grey p-2 h-100 ">
          <h1>RC/DC Monthly</h1>
          {/* {console.log("Array is ",array)} */}
         <Graph2 value={array} />

        </div>
        
       
        
       
        
        
      </div>

      
     
    </div>

  
);  
}


export default Grid;
