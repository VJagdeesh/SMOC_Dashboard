import Select from "react-dropdown-select";
import { useState } from "react";



const Filter = (props) => {
  const[state,setstate]=useState('');
  const[discom,setdiscom]=useState('');
  const[city,setcity]=useState('');
  const[division,setdivision]=useState('');
  const[subdivision,setsubdivision]=useState('');
  const[substation,setsubstation]=useState('');
  const[fromdate,setfromdate]=useState();
  const[todate,settodate]=useState();
  const[overalldata,setoveralldata]=useState([]);

  function selectHandler(e)
  {
  const data=[
    {id:'state',name:state},
    {id:'discom',name:discom},
    {id:'city',name:city},
    {id:'division',name:division},
    {id:'subdivision',name:subdivision},
    {id:'substation',name:substation},
    {id:'fromdate',name:fromdate},
    {id:'todate',name:todate},
  ];
  // console.log(data);
  props.status(data);
  setoveralldata(data);
  
  }


    const discomOptions = [
          { value: "discom1", label: "DVVNL" },
          { value: "discom2", label: "MVVNL" },
          { value: "discom3", label: "PVVNL" },
          { value: "discom4", label: "PuVVNL" },
          
          // Add more options as needed
      ];
      const stateOptions = [
          { value: "state1", label: "UP" },
          { value: "state2", label: "HR" },
        
          // Add more options as needed
      ];
      const cityOptions = [
        { value:"city1", label:"ALIGARH" },
        { value:"city2", label:"BAREILLY"},
        { value:"city3", label:"FIROZABAD"},
        { value:"city4", label:"GORAKHPUR"},
        { value:"city5", label:"LUCKNOW"},
        { value:"city6", label:"MEERUT"},
        { value:"city7", label:"SAHARANPUR"},
        { value:"city8", label:"VARANASI"},
      ]
      const divisionOptions =[
        {value:"DIV110711",label:"DIV110711"},
        {value:"DIV130131",label:"DIV130131"},
        {value:"DIV211211",label:"DIV211211"},
        {value:"DIV251641",label:"DIV251641"},
        {value:"DIV341911",label:"DIV341911"}
      ];
      const subdivisionOptions=[
        {value:"SDO4143259",label:"SDO4143259"},
        {value:"SDO4143260",label:"SDO4143260"},
        {value:"SDO4143261",label:"SDO4143261"},
        {value:"SDO4143262",label:"SDO4143262"},
        {value:"SDO4143263",label:"SDO4143263"}
      ];
      const substation_nameoptions=[
        {value:"33/12 KV SANSKRITIK SANKUL",label:"33/12 KV SANSKRITIK SANKUL"},
        {value:"33/13 KV SANSKRITIK SANKUL",label:"33/13 KV SANSKRITIK SANKUL"},
        {value:"33/14 KV SANSKRITIK SANKUL",label:"33/14 KV SANSKRITIK SANKUL"},
        {value:"33/15 KV SANSKRITIK SANKUL",label:"33/15 KV SANSKRITIK SANKUL"},
        {value:"33/16 KV SANSKRITIK SANKUL",label:"33/16 KV SANSKRITIK SANKUL"}
      ];
      return(
          <div className="container text-center ">
      
      <div className="row mt-2">
        <div className="col">
            <Select placeholder = "State"  onChange={(e) =>{setstate(e[0].label);}} options={stateOptions} style={{background:"white"}}/>
        </div>

        <div className="col">
            <Select placeholder="DISCOM" onChange={(e) =>{setdiscom(e[0].label); }} options={discomOptions} style={{background:"white"}}/> 
        </div>

        <div className="col">
            <Select placeholder="City" onChange={(e) =>{setcity(e[0].label); }} options={cityOptions} style={{background:"white"}} /> 
        </div>
        
        <div className="col">
            <Select placeholder="Division" onChange={(e) =>{setdivision(e[0].label);}} options={divisionOptions} style={{background:"white"}}/>
        </div>
      </div>

        <div className="row mt-2">

        <div className="col">
            <Select placeholder="Sub Division" onChange={(e) =>{setsubdivision(e[0].label);}} options={subdivisionOptions} style={{background:"white"}}/>
        </div>
        <div className="col">
            <Select placeholder="Sub Station" onChange={(e) =>{setsubstation(e[0].label);}} options={substation_nameoptions}style={{background:"white"}}/>
        </div>   
        <div className="col form-group ">
            <input type="month" min="2010/08" required className="form-control " onChange={(e) =>{setfromdate(e.target.value);}} />
        </div>
        <div className="col">
          <button type="button" class="btn btn-secondary px-5" onClick={selectHandler} style={{background:"#0A3267"}}>Apply</button>
          
        </div>
        <div className="col">
          <button type="button" class="btn btn-secondary px-5" style={{background:"#0A3267"}}>Reset</button>
        </div>
        
        
      </div>
      
      <div className="row mt-2">

      </div>
      {console.log("TTTTTTTTTTTTT",discom)}
      
    </div>

      );
     
  }
export default Filter;
