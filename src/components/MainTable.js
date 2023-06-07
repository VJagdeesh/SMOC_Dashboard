import { useEffect, useState } from "react";
import "./table_style.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
export default function MainTable(props){
// const navigate=useNavigate();
const [firstvalid,setfirstvalid]=useState(false);
const [secondvalid,setsecondvalid]=useState(false);

const dispatch=useDispatch();
const dispatch2=useDispatch();

const sname8=useSelector(state=>state.counter8);    //sname 8 is filtered value
const sname14=useSelector(state=>state.counter14);


const [firstcelldata,setfirstcelldata]=useState([]);
const [secondcelldata,setsecondcelldata]=useState([]);






function firstClickHandler(e){
e.preventDefault();
setfirstvalid(true);
if(sname8[0].length === 0)
{
let filteredArray = props.overalldata[0].filter(function(obj){
    return(
        (obj.diff === 0) 
    );
});
setfirstcelldata(props.overalldata[0]);
dispatch({type:'Change11',counter11:[filteredArray,'1']});
dispatch2({type:'Change14',counter14:true});
}
else{
let filterobj=[];
if(sname8!=undefined)
{
let temp=sname8[0];
for(const obj of temp)
{    
filterobj.push(obj.name);
}
let city=filterobj[0]; 
let discom=filterobj[1];
let division=filterobj[2];
let sub_division=filterobj[3];
let sub_station=filterobj[4];
let datesin=filterobj[5];
let ageingslab=filterobj[6];


let filteredArray = props.overalldata[0].filter(function(obj) {

return (
    (city=="" ? true : obj.city === city) && 
    (discom=="" ? true : obj.discom === discom) && 
    (division=="" ? true : obj.division === division) && 
    (sub_division=="" ? true : obj.subdivision === sub_division) && 
    (sub_station=="" ? true : obj.substation_name === sub_station) && 
    (datesin===undefined ? true : new Date(obj.creation_date).toLocaleDateString('en-US') === datesin) &&
    (ageingslab=="" ? true : 
      (ageingslab=='Communicating meter' && obj.diff === 0) || 
      (ageingslab=='Current day' && obj.diff === 1) || 
      (ageingslab=='2-3 days' && (obj.diff>1 && obj.diff<2)) || 
      (ageingslab=='4-7 days' && (obj.diff>4 && obj.diff<7)) || 
      (ageingslab=='8-14 days' && obj.diff>7)
    ) &&
    (obj.diff === 0)
  );

}
);

setfirstcelldata(filteredArray);
dispatch({type:'Change11',counter11:[filteredArray,'1']});
dispatch2({type:'Change14',counter14:true});
}
}
}




const secondClickHandler=(e)=>{
    e.preventDefault();
    setsecondvalid(true);
    if(sname8[0].length === 0)
    {
        let filteredArray = props.overalldata[0].filter(function(obj){
            return(
                (obj.diff === 1) 
            );
        });
        setsecondcelldata(props.overalldata[0]);
        dispatch({type:'Change12',counter12:[filteredArray,'2']});
        dispatch2({type:'Change15',counter15:true});  
    }
    else
    {
    let filterobj=[];
    if(sname8!=undefined)
    {
    let temp=sname8[0];
    for(const obj of temp)
    {    
    filterobj.push(obj.name);
    }
    let city=filterobj[0]; 
    let discom=filterobj[1];
    let division=filterobj[2];
    let sub_division=filterobj[3];
    let sub_station=filterobj[4];
    let datesin=filterobj[5];
    let ageingslab=filterobj[6];
    
    
    let filteredArray = props.overalldata[0].filter(function(obj) {
    return (
        (city=="" ? true : obj.city === city) && 
        (discom=="" ? true : obj.discom === discom) && 
        (division=="" ? true : obj.division === division) && 
        (sub_division=="" ? true : obj.subdivision === sub_division) && 
        (sub_station=="" ? true : obj.substation_name === sub_station) && 
        (datesin==undefined ? true : new Date(obj.creation_date).toLocaleDateString('en-US') == datesin) &&
        (ageingslab=="" ? true : 
          (ageingslab=='Communicating meter' && obj.diff === 0) || 
          (ageingslab=='Current day' && obj.diff === 1) || 
          (ageingslab=='2-3 days' && (obj.diff>1 && obj.diff<2)) || 
          (ageingslab=='4-7 days' && (obj.diff>4 && obj.diff<7)) || 
          (ageingslab=='8-14 days' && obj.diff>7)
        ) &&
        (obj.diff === 1)
      );
    }
    );

    setsecondcelldata(filteredArray);
    dispatch({type:'Change12',counter12:[filteredArray,'2']})
    dispatch({type:'Change15',counter15:true})
    }
    }
    }


return(
    <>
    <table className="table">
<th className="table-header">Meter Communication Status</th><th className="table-header">Count of meters</th>
{(props.datediffofall!=undefined && props.datediffofall[0]!=0) ? 
<tr>
    <td className="table-cell">Meters in Communication</td> 
    <td className="table-cell" onClick={firstClickHandler}><a href="">{props.datediffofall[0]}</a></td> 
</tr> : console.log(".")
}
{(props.datediffofall!=undefined && props.datediffofall[1]!=0) ? 
<tr>
    <td className="table-cell">Meters communicated in last 1 day</td>
    <td className="table-cell" onClick={secondClickHandler}><a href="">{props.datediffofall[1]}</a></td>
</tr> :  console.log(".")}
{(props.datediffofall!=undefined && props.datediffofall[2]!=0) ? 
<tr>
    <td className="table-cell">Meters communicated in last 2-3 days</td> 
    <td className="table-cell"><a href="">{props.datediffofall[2]}</a></td>
</tr> :  console.log(".")}
{(props.datediffofall!=undefined && props.datediffofall[3]!=0) ?
 <tr>
    <td className="table-cell">Meters communicated in last 4-7 days</td>
    <td className="table-cell"><a href="">{props.datediffofall[3]}</a></td>
</tr> : console.log(".")}
{(props.datediffofall!=undefined && props.datediffofall[4]!=0) ? 
<tr>
    <td className="table-cell">Meters communicated in last above 7 days</td>
    <td className="table-cell"><a href="">{props.datediffofall[4]}</a></td>
</tr> : console.log(".")}

{(props.datediffofall!=undefined) ? 
<tr>
    <td className="table-cell">Total</td>
    <td className="table-cell">{props.datediffofall[4]+props.datediffofall[3]+props.datediffofall[2]+props.datediffofall[1]+props.datediffofall[0]}</td>
</tr> : console.log(".")}

</table>


    </>
)
}