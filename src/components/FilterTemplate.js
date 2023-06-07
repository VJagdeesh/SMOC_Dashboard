import Select from "react-dropdown-select";
import { useEffect, useState } from "react";
import axios from 'axios';
import { useDispatch } from "react-redux";

const FilterTemplate=()=>{
  const dispatch=useDispatch();


  let cityarr=[]
  const [cityselected,setselectedcity]=useState(""); 
  const [cityreceived,setcityreceived]=useState([])  
  const [discomreceived,setdiscomreceived]=useState([]) 
  const [divisionreceived,setdivisionreceived]=useState([]) 
  const [subdivisionreceived,setsubdivisionreceived]=useState([])
  const [substationreceived,setsubstationreceived]=useState([])

  const [onsubmit,setonsubmit]=useState('false');

  const [overallSubmitHandler,setoverallSubmitHandler]=useState([])

  // Use states to record user data
  const [cityDropdownselected,setcityDropdownselected]=useState('');     
  const [discomDropdownselected,setdiscomDropdownselected]=useState('');
  const [divisionDropdownselected,setdisvisionDropdownselected]=useState('');
  const [subdivisionDropdownselected,setsubdivisionDropdownselected]=useState(''); 
  const [substationDropdownselected,setsubstationDropdownselected]=useState('');
  const [ageingslabDropdownselected,setageingslabDropdownselected]=useState('');
  const [dateDropdownselected, setdateDropdownselected] = useState();

  
  const [querydata,setquerydata]=useState(""); //query for city alternative options
  const [querydata2,setquerydata2]=useState(""); //query for division alternative options
  const [querydata3,setquerydata3]=useState(""); //query for sub-division alternative options
  const [querydata4,setquerydata4]=useState(""); //query for sub-station alternative options


  const [getdata, setgetdata] = useState([]); //city alternative options

  const fetchData=async(query)=>{
    try{
    const response=await axios.get('/api/dataquery',{
      params:{query},
    });
    setgetdata(response.data);
  }catch(error){
   console.error(error); 
  }
  };





  useEffect(()=>{
    // console.log("City useEffect ",querydata)
    fetchData(querydata) 
  },[discomDropdownselected])

    useEffect(()=>{
    // console.log("Division useEffect ",querydata2)
    fetchData(querydata2) 
  },[cityDropdownselected])

      useEffect(()=>{
    // console.log("Sub Division useEffect ",querydata3)
    fetchData(querydata3) 
  },[divisionDropdownselected])

      useEffect(()=>{
    // console.log("Sub Station useEffect ",querydata4)
    fetchData(querydata4) 
  },[subdivisionDropdownselected])


  const statechangehandler=(event)=>{
    //console.log("The boss is ",event[0].label)
    setselectedcity(event[0].label)
  }


  const cityfetchHandler=async()=>{
  const city=await axios.get('/api/filterdata/city');
  // console.log("The Updated city data is : ",city.data[0]) 

  setcityreceived(city.data[0]);
  }

  const discomfetchHandler=async()=>{
    const discom=await axios.get('/api/filterdata/discom');
    //console.log("The discom data is : ",discom.data[0])
    setdiscomreceived(discom.data[0]);
    }  

    const divisionfetchHandler=async()=>{
      const division=await axios.get('/api/filterdata/division');
      //console.log("The division data is : ",division.data[0])
      setdivisionreceived(division.data[0]);
      }

      const subdivisionfetchHandler=async()=>{
        const subdivision=await axios.get('/api/filterdata/subdivision');
        //console.log("The sub-division data is : ",subdivision.data[0])
        setsubdivisionreceived(subdivision.data[0]);
        }


        const substationfetchHandler=async()=>{
          const substation=await axios.get('/api/filterdata/substation');
          //console.log("The sub-station data is : ",substation.data[0])
          setsubstationreceived(substation.data[0]);
          }  


  // UseEffect for re-rendering components           
  useEffect(()=>{
  cityfetchHandler();
  discomfetchHandler();  
  divisionfetchHandler();
  subdivisionfetchHandler();
  substationfetchHandler();
  },[])

  
// functions for recording user entered values in usestate and send query to get option based on value 
 const citySelectHandler=(e)=>{
  setcityDropdownselected(e[0].label)
  setquerydata2("SELECT DISTINCT(division) from final_readstatus where discom="+"'"+discomDropdownselected+"'"+"AND city= '"+e[0].label+"'");
 }

 const discomSelectHandler=(e)=>{
  setdiscomDropdownselected(e[0].label);
  setquerydata("SELECT DISTINCT(UPPER(city)) as city from final_readstatus where discom="+"'"+e[0].label+"'")
 }

 const divisionSelectHandler=(e)=>{
  setdisvisionDropdownselected(e[0].label)
  setquerydata3("SELECT DISTINCT(subdivision) from final_readstatus where discom="+"'"+discomDropdownselected+"'"+"AND city= '"+cityDropdownselected+"'"+" AND division="+"'"+e[0].label+"'");
 }

 const subdivisionSelectHandler=(e)=>{
  setsubdivisionDropdownselected(e[0].label)
  setquerydata4("SELECT DISTINCT(substation_name) from final_readstatus where discom="+"'"+discomDropdownselected+"'"+"AND city= '"+cityDropdownselected+"'"+" AND division="+"'"+divisionDropdownselected+"'"+" AND subdivision="+"'"+e[0].label+"'");
 }

 const substationSelectHandler=(e)=>{
  setsubstationDropdownselected(e[0].label)
 }

 const ageingslabSelectHandler=(e)=>{
  setageingslabDropdownselected(e[0].label)
 }

 const dateSelectHandler=(e)=>{
  const newDate = new Date(e.target.value);
  setdateDropdownselected(prevSelectedDate => {
    return newDate.toLocaleDateString();
  });
 }



useEffect(()=>{
  dispatch({type:'Change',counter:cityDropdownselected})
},[cityDropdownselected])

useEffect(()=>{
  dispatch({type:'Change2',counter2:discomDropdownselected})  
},[discomDropdownselected])

useEffect(()=>{
  dispatch({type:'Change3',counter3:divisionDropdownselected})  
},[divisionDropdownselected])

useEffect(()=>{
  dispatch({type:'Change4',counter4:subdivisionDropdownselected})  
},[subdivisionDropdownselected])

useEffect(()=>{
  dispatch({type:'Change5',counter5:onsubmit})  
},[onsubmit])

useEffect(()=>{
  dispatch({type:'Change6',counter6:ageingslabDropdownselected})  
},[ageingslabDropdownselected])

useEffect(()=>{
  dispatch({type:'Change7',counter7:dateDropdownselected})  
},[dateDropdownselected])

useEffect(()=>{
  dispatch({type:'Change8',counter8:[overallSubmitHandler,onsubmit]})  
},[overallSubmitHandler])



// code for providing recommended options
  const cityoptions = discomDropdownselected=="" ? cityreceived.map((guest, index) => {
    return {
       label: guest.city,
       value: guest,
       key: index
    }
}) : getdata.map((guest, index) => {
  return {
     label: guest.city,
     value: guest,
     key: index
  }
});



const discomoptions = discomreceived.map((guest, index) => {
  return {
     label: guest.discom,
     value: guest,
     key: index
  }
})



const divisionoptions = cityDropdownselected=="" ? divisionreceived.map((guest, index) => {
  return {
     label: guest.division,
     value: guest,
     key: index
  }
})
:
getdata.map((guest, index) => {
  return {
     label: guest.division,
     value: guest,
     key: index
  }
});



const subdivisionoptions = divisionDropdownselected=="" ? subdivisionreceived.map((guest, index) => {
  return {
     label: guest.subdivision,
     value: guest,
     key: index
  }
})
:
getdata.map((guest, index) => {
  return {
     label: guest.subdivision,
     value: guest,
     key: index
  }
})



const substationoptions = subdivisionDropdownselected=="" ? substationreceived.map((guest, index) => {
  return {
     label: guest.substation_name,
     value: guest,
     key: index
  }
})
:
getdata.map((guest, index) => {
  return {
     label: guest.substation_name,
     value: guest,
     key: index
  }
})



    const options = [
        { 
          value: 1,
          label: "UP"
        },
        {
          value:  2,
          label: "HR"
        }
      ];


const ageingslaboptions=[
  {
    value:  1,
    label: "Communicating meter"
  },
  {
    value:  2,
    label: "Current day"
  },
  {
    value:  3,
    label: "2-3 days"
  },
  {
    value:  4,
    label: "4-7 days"
  },
  {
    value:  5,
    label: "8-14 days"
  }
];

// function for submitting the user data passing 
const submitHandler=(e)=>{
e.preventDefault();
setonsubmit(true);
dispatch({type:'Change5',counter5:onsubmit})
const data = [
  {id: 'City' , name:cityDropdownselected },
  {id: 'Discom' , name: discomDropdownselected},
  {id: 'Division' , name: divisionDropdownselected},
  {id: 'Sub_Division' , name: subdivisionDropdownselected},
  {id: 'Sub_Station' , name:substationDropdownselected },
  {id: 'Dates ' , name:dateDropdownselected },
  {id: 'Ageing_Slab' , name: ageingslabDropdownselected}
];
setoverallSubmitHandler(data);

}

// To reload
const resetHandler=()=>{
window.location.href = window.location.href;
}

return(
  <div className="container text-center border border-grey filterOuterDiv">
     
    <div className="row">
      <div className="col-lg-3 stateDiv">
          <Select options={options} onChange={statechangehandler} placeholder="State " style={{background:"white"}}/>
      </div>

      <div className="col-lg-3 discomDiv">
          {cityselected=="UP" ? <Select options={discomoptions} onChange={discomSelectHandler} placeholder="DISCOM" style={{background:"white"}}/> : <Select options={discomoptions} onChange={discomSelectHandler} placeholder="DISCOMs" style={{background:"white"}}/>}
      </div>

      <div className="col-lg-3 cityDiv">
          {cityselected=="UP" ? <Select options={cityoptions} onChange={citySelectHandler} placeholder="City" style={{background:"white"}} /> : <Select options={cityoptions} onChange={citySelectHandler} placeholder="City" style={{background:"white"}}/>}
      </div>
      
      <div className="col-lg-3 divisionDiv">
          {cityselected=="UP" ? <Select options={divisionoptions} onChange={divisionSelectHandler} placeholder="Division" style={{background:"white"}}/> : <Select options={divisionoptions} onChange={divisionSelectHandler} placeholder="Division" style={{background:"white"}}/>}
      </div>
    </div>

      <div className="row">

      <div className="col-lg-3 subdivisionDiv">
          {cityselected=="UP" ? <Select options={subdivisionoptions} onChange={subdivisionSelectHandler} placeholder="Sub Division" style={{background:"white"}}/> : <Select options={subdivisionoptions} onChange={subdivisionSelectHandler} placeholder="Sub Division" style={{background:"white"}}/>}
      </div>
      <div className="col-lg-3 substationDiv">
          {cityselected=="UP" ? <Select options={substationoptions} onChange={substationSelectHandler} placeholder="Sub Station" style={{background:"white"}}/> : <Select options={substationoptions} onChange={substationSelectHandler} placeholder="Sub Station" style={{background:"white"}}/>}
      </div>   
      <div className="col-lg-3 form-group inputdateDiv">
          <input type="date" onChange={dateSelectHandler} className="form-control " />
      </div>
      <div className="col-lg-3 agingslabDiv">
          <Select options={ageingslaboptions} onChange={ageingslabSelectHandler} placeholder="Ageing slab" style={{background:"white"}}/>
      </div>   
    </div>
    
    <div className="row">
      <div className="col-lg-6">
        <button type="button" onClick={submitHandler} class="btn btn-secondary px-5 apply-btn">Apply</button>
      </div>
      <div className="col-lg-6">
        <button type="button" onClick={resetHandler} class="btn btn-secondary px-5 reset-btn">Reset</button>
      </div>
    </div>
    
  </div>
);
}
export default FilterTemplate;