import { useState,useEffect } from "react";
import "./table_style.css";
import Pie_Dia from "./Pie_Dia";
import axios from "axios";
import MainTable from "./MainTable"
import { useDispatch, useSelector } from "react-redux";
import MetersCommunicationST from "./MetersCommunicationST";
import Meterswithinday from "./Meterswithinday";
import Loading from "./Loading/Loading";

const ReadExcel=(props)=>
{

const sname8=useSelector(state=>state.counter8)       // Overall submitted form data received from user

const sname11=useSelector(state=>state.counter11)     // Condition to check to open pop up table for Meter in communication 

const sname12=useSelector(state=>state.counter12)     // Condition to check to open pop up table for Meter in communication within a day

const dispatch=useDispatch();



const [overallcatog,setoverallcatog]=useState([]);




let Pie_Graph_data=[];






// overall data to be fetched
const fetchoverallcatogoryHandler=async()=>{
const data=await axios.get('/api/overalldata');
setoverallcatog(data);
}



useEffect(()=>{
    fetchoverallcatogoryHandler();
    },[])

// useEffect(()=>{
// },[sname])





function storedata(arr)
{
Pie_Graph_data=[{name:"communicating meter", value:arr[0]},{name:"1 day",value:arr[1]},{name:"2-3 days",value:arr[2]},{name:"4-7 days",value:arr[3]},{name:">7 days",value:arr[4]}];
}

function storedata2(arr)
{
return [{name:"communicating meter", value:arr[0]},{name:"1 day",value:arr[1]},{name:"2-3 days",value:arr[2]},{name:"4-7 days",value:arr[3]},{name:">7 days",value:arr[4]}];
}



// Filter function to generate the filtered data
const filtery2=(data,objects)=>
{
    let datediffofall=[];
    let filterobj=[];
    for (const object of objects) {
        // console.log(object.id);
        filterobj.push(object.name);
      }

    let city=filterobj[0]; 
    let discom=filterobj[1];
    let division=filterobj[2];
    let sub_division=filterobj[3];
    let sub_station=filterobj[4];
    let datesin=filterobj[5];
    let ageingslab=filterobj[6];

    if(data!=undefined)
    {  
    let filteredArray = data.filter(function(obj) {
        return (
            (city=="" ? true : obj.city === city) && 
            (discom=="" ? true : obj.discom === discom) && 
            (division=="" ? true : obj.division === division) && 
            (sub_division=="" ? true : obj.subdivision === sub_division) && 
            (sub_station=="" ? true : obj.substation_name === sub_station) && 
            (datesin === undefined ? true : (new Date(obj.creation_date).toLocaleDateString('en-US') === datesin)) &&
            (ageingslab=="" ? true : 
              (ageingslab=='Communicating meter' && obj.diff === 0) || 
              (ageingslab=='Current day' && obj.diff === 1) || 
              (ageingslab=='2-3 days' && (obj.diff>1 && obj.diff<2)) || 
              (ageingslab=='4-7 days' && (obj.diff>4 && obj.diff<7)) || 
              (ageingslab=='8-14 days' && obj.diff>7)
            )
          );
          
    });
      const filterat0=filteredArray.filter((item)=> item.diff===0).length;
      const filterat1=filteredArray.filter((item)=> item.diff===1).length;
      const filterat2to3=filteredArray.filter((item)=> (item.diff>=2 && item.diff<=3)).length;
      const filterat4to7=filteredArray.filter((item)=> (item.diff>=4 && item.diff<=7)).length;
      const filterat8to15=filteredArray.filter((item)=> (item.diff>=8 && item.diff<=14)).length;
      datediffofall.push(filterat0);
      datediffofall.push(filterat1);
      datediffofall.push(filterat2to3);
      datediffofall.push(filterat4to7);
      datediffofall.push(filterat8to15);  

    
     }
     return datediffofall;
}

return(
<>
{overallcatog.data === undefined && <Loading/>}
{overallcatog.data !== undefined && <div className="container text-center outerDiv">

    <div className="row">
        <div className="col-lg-4 tableDiv">
        {sname8!==undefined && (sname8[1]=='false' && <MainTable datediffofall={props.datedata} overalldata={overallcatog.data}/>)}
        {sname8!==undefined && (sname8[1]===true && <MainTable datediffofall={filtery2(overallcatog.data[0],sname8[0])} overalldata={overallcatog.data}/>)}
        <br></br>

        {props.datedata!==undefined ? storedata(props.datedata) : console.log(".")}
        </div>

        <div className="col-lg-8 border">
        {(Pie_Graph_data!=undefined && (sname8!==undefined && sname8[0].length == 0 )) ? <Pie_Dia data={Pie_Graph_data}/> : console.log(".")}
        {(sname8!=undefined && overallcatog.data!=undefined) && (sname8[0].length > 0 && <Pie_Dia data={storedata2(filtery2(overallcatog.data[0],sname8[0])) } />) }
        </div>

        </div>

        {(sname11!==undefined) && sname11[1]==='1' &&  <MetersCommunicationST/> }
        {(sname12!==undefined) && sname12[1]==='2' &&  <Meterswithinday/>  }





<div style={{position:"absolute",left:10,width:250}}>

<br></br>
{props.datedata!=undefined ? storedata(props.datedata) : console.log(".")}
</div>


    </div>}
    </>


);
}
export default ReadExcel;