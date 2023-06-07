import { useEffect, useState,useRef } from "react";
import {Select} from "react-dropdown-select"
// import "../styles.css"
const Filter=(props)=>{

const stateoptions=[{value:"Haryana",label:"Haryana"},{value:"UP",label:"UP"}];   // value of label iss taken
const discomoptions=[{value:"DVVNL",label:"DVVNL"},{value:"MVVNL",label:"MVVNL"},{value:"PuVVNL",label:"PuVVNL"},{value:"PVVNL",label:"PVVNL"}];
const cityoptions=[{value:"Aligarh",label:"Aligarh"},{value:"Gorakhpur",label:"Gorakhpur"},{value:"Varanasi",label:"Varanasi"},{value:"Bareilly",label:"Bareilly"}];
const divisionoptions=[{value:"DIV110711",label:"DIV110711"},{value:"DIV130131",label:"DIV130131"},{value:"DIV211211",label:"DIV211211"},{value:"DIV251641",label:"DIV251641"},{value:"DIV341911",label:"DIV341911"}];
const subdivisionoptions=[{value:"SDO4143259",label:"SDO4143259"},{value:"SDO4143260",label:"SDO4143260"},{value:"SDO4143261",label:"SDO4143261"},{value:"SDO4143262",label:"SDO4143262"},{value:"SDO4143263",label:"SDO4143263"}];
const substation_nameoptions=[{value:"33/12 KV SANSKRITIK SANKUL",label:"33/12 KV SANSKRITIK SANKUL"},{value:"33/13 KV SANSKRITIK SANKUL",label:"33/13 KV SANSKRITIK SANKUL"},{value:"33/14 KV SANSKRITIK SANKUL",label:"33/14 KV SANSKRITIK SANKUL"},{value:"33/15 KV SANSKRITIK SANKUL",label:"33/15 KV SANSKRITIK SANKUL"},{value:"33/16 KV SANSKRITIK SANKUL",label:"33/16 KV SANSKRITIK SANKUL"}];
const criteria_options=[{value:"Quarterly",label:"Quarterly"},{value:"Half-Yearly",label:"Half-Yearly"},{value:"Anually",label:"Anually"}];



const [state,setstate]=useState(stateoptions[0]);
const [discom,setdiscom]=useState('');
const [city,setcity]=useState('');
const [division,setdivision]=useState('');
const [subdivision,setsubdivision]=useState('');
const [substation,setsubstation]=useState('');
const [overallformdata,setoverallformdata]=useState([]);
const[fromdate,setfromdate]=useState();
const[criteria,setcriteria]=useState();

// useEffect(()=>{
// resetHandler();  
// },[])

function submitHandler(e)
{
e.preventDefault();
const data=[
{id:'state',name:state},
{id:'discom',name:discom},
{id:'city',name:city},
{id:'division',name:division},
{id:'subdivision',name:subdivision},
{id:'substation',name:substation},  
{id:'fromdate',name:fromdate},
{id:'criteria',name:criteria}
]
console.log("Data is ",data)
props.status(data)
setoverallformdata(data);
}

function resetHandler()
{
setstate(null);
setdiscom("");  
}





return(

<>
     <form onSubmit={submitHandler} onReset={resetHandler}>
    <div className="row mt-3">
      <div className="col-lg-3">
        <Select placeholder="State"  required options={stateoptions} onChange={(e)=>{setstate(e[0].value)}} style={{background:"white"}}/>
      </div>

      <div className="col-lg-3">
          <Select placeholder="DISCOM" options={discomoptions} onChange={(e)=>{setdiscom(e[0].label)}} style={{background:"white"}}/> 
      </div>

      <div className="col-lg-3">
          <Select placeholder="City" options={cityoptions} onChange={(e)=>{setcity(e[0].label)}} style={{background:"white"}} /> 
      </div>
      
      <div className="col-lg-3">
          <Select placeholder="Division" options={divisionoptions} onChange={(e)=>{setdivision(e[0].label)}} style={{background:"white"}}/> 
      </div>
    </div>

      <div className="row mt-3">

      <div className="col-lg-3">
          <Select placeholder="Sub Division" options={subdivisionoptions} onChange={(e)=>{setsubdivision(e[0].label)}} style={{background:"white"}}/>
      </div>
      <div className="col-lg-3">
          <Select placeholder="Sub Station" options={substation_nameoptions} onChange={(e)=>{setsubstation(e[0].label)}} style={{background:"white"}}/>
      </div>   
      <div className="col-lg-3 form-group">
          <input type="month" min="2020-08" className="form-control " required onChange={(e)=>{setfromdate(e.target.value)}}/>
      </div>

      <div className="col-lg-3 form-group">
          <Select placeholder="Criteria" options={criteria_options} onChange={(e)=>{setcriteria(e[0].label)}}/>
      </div>

    </div>
    
    <div className="row mt-3">
      <div className="col-lg-6 px-5 apply-btn">
        <button type="submit" class="btn btn-secondary px-5 apply-btn" >Apply</button>
      </div>
      <div className="col-lg-6 px-5 reset-btn">
        <button type="reset" class="btn btn-secondary px-5 reset-btn">Reset</button>
      </div>
    </div>
    </form>
    

</>
);
}
export default Filter;