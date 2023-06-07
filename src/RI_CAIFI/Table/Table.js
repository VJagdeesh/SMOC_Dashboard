import { Table } from "antd";
import { useEffect,useState } from "react";
import axios from "axios";
// import "../styles.css";
const SAIDI_Table=(props)=>{

    const [seriesData, setSeriesData] = useState([]);

    const fetchdatahandler = async () => {
      const response = await axios.get('/api/caifi');
      const data = response.data[0];
      // const response = await axios.get('/api/caifi');
      // const data = response.data[0];
      setSeriesData(data);
      }
    useEffect(() => {
      fetchdatahandler();
    }, []);

const column=[{title:'DISCOM',dataIndex:'discom'},{title:'YEAR_MONTH',dataIndex:'year_month'},{title:'Power Failure Occurrence Event Duration',dataIndex:'power_failure_occurrence_event_duration'},{title:'Consumer Count',dataIndex:'consumer_count'},{title:'CAIFI',dataIndex:'caifi'}]

function highlightrow(record,index)
{
return index % 2 === 0 ? 'evenbackground' : 'oddbackground';
}



// const filtery2 = (data, objects) => {
//     let filterobj = objects.map((obj) => obj.name);
  
//     let state = filterobj[0];
//     let discom = filterobj[1];
//     let city = filterobj[2];
//     let division = filterobj[3];
//     let subdivision = filterobj[4];
//     let substation = filterobj[5];
//     let fromdate = filterobj[6];
//     let criteria= filterobj[7];
    

    

//     let yearMonth = new Date(fromdate);
// yearMonth.setMonth(yearMonth.getMonth()); // subtract 1 from the month value
// yearMonth = yearMonth.toLocaleString('default', { year: 'numeric', month: '2-digit' }).replace('/', '-');
// yearMonth = yearMonth.split('-').reverse().join('-'); // convert from mm-yyyy to yyyy-mm
// console.log("User month ",yearMonth);




    
  
//     let filteredArray = data.filter((obj) => {
//         let year_month = new Date(obj.year_month);
//         year_month.setMonth(year_month.getMonth() + 1);
//         year_month = year_month.toISOString().slice(0,7);
//         console.log("Database month ",year_month);
//       return (
//         (discom === "" ? true : obj.discom === discom) &&
//         (yearMonth == undefined ? true : year_month === yearMonth)
//       ) 
//     });
    
//     console.log("Data arrived ", filteredArray);
//     return filteredArray;
//   };


const filtery2 = (data, objects) => {
  let filterobj = objects.map((obj) => obj.name);

  let state = filterobj[0];
  let discom = filterobj[1];
  let city = filterobj[2];
  let division = filterobj[3];
  let subdivision = filterobj[4];
  let substation = filterobj[5];
  let fromdate = filterobj[6];
  let criteria= filterobj[7];
  


if(criteria=="Anually")
{
let yearMonth = new Date(fromdate);
yearMonth.setMonth(yearMonth.getMonth()-11); // subtract 1 from the month value
yearMonth = yearMonth.toLocaleString('default', { year: 'numeric', month: '2-digit' }).replace('/', '-');
yearMonth = yearMonth.split('-').reverse().join('-'); // convert from mm-yyyy to yyyy-mm
console.log("User month ",yearMonth,criteria);

let yearMonth2 = new Date(fromdate);
yearMonth2.setMonth(yearMonth2.getMonth()); // subtract 1 from the month value
yearMonth2 = yearMonth2.toLocaleString('default', { year: 'numeric', month: '2-digit' }).replace('/', '-');
yearMonth2 = yearMonth2.split('-').reverse().join('-'); // convert from mm-yyyy to yyyy-mm


  let filteredArray = data.filter((obj) => {
      let year_month = new Date(obj.year_month);
      year_month.setMonth(year_month.getMonth() + 1);
      year_month = year_month.toISOString().slice(0,7);
      console.log("Database month ",year_month);
    return (
      (discom === "" ? true : obj.discom === discom) &&
      // (yearMonth == undefined ? true : year_month === yearMonth)
      (yearMonth == undefined ? true : (year_month >= yearMonth && year_month <= yearMonth2))
    ) 
  });
  
  console.log("Data arrived ", filteredArray);
  return filteredArray;

}  


if(criteria=="Quarterly")
{

  let yearMonth = new Date(fromdate);
yearMonth.setMonth(yearMonth.getMonth()-3); // subtract 1 from the month value
yearMonth = yearMonth.toLocaleString('default', { year: 'numeric', month: '2-digit' }).replace('/', '-');
yearMonth = yearMonth.split('-').reverse().join('-'); // convert from mm-yyyy to yyyy-mm
console.log("User month ",yearMonth,criteria);

let yearMonth2 = new Date(fromdate);
yearMonth2.setMonth(yearMonth2.getMonth()); // subtract 1 from the month value
yearMonth2 = yearMonth2.toLocaleString('default', { year: 'numeric', month: '2-digit' }).replace('/', '-');
yearMonth2 = yearMonth2.split('-').reverse().join('-'); // convert from mm-yyyy to yyyy-mm


  let filteredArray = data.filter((obj) => {
      let year_month = new Date(obj.year_month);
      year_month.setMonth(year_month.getMonth() + 1);
      year_month = year_month.toISOString().slice(0,7);
      console.log("Database month ",year_month);
    return (
      (discom === "" ? true : obj.discom === discom) &&
      // (yearMonth == undefined ? true : year_month === yearMonth)
      (yearMonth == undefined ? true : (year_month >= yearMonth && year_month <= yearMonth2))
    ) 
  });
  
  console.log("Data arrived ", filteredArray);
  return filteredArray;

}








  let yearMonth = new Date(fromdate);
yearMonth.setMonth(yearMonth.getMonth()-5); // subtract 1 from the month value
yearMonth = yearMonth.toLocaleString('default', { year: 'numeric', month: '2-digit' }).replace('/', '-');
yearMonth = yearMonth.split('-').reverse().join('-'); // convert from mm-yyyy to yyyy-mm
console.log("User month ",yearMonth,criteria);

let yearMonth2 = new Date(fromdate);
yearMonth2.setMonth(yearMonth2.getMonth()); // subtract 1 from the month value
yearMonth2 = yearMonth2.toLocaleString('default', { year: 'numeric', month: '2-digit' }).replace('/', '-');
yearMonth2 = yearMonth2.split('-').reverse().join('-'); // convert from mm-yyyy to yyyy-mm




// const sixMonthsBefore = new Date(yearMonth.getFullYear(), yearMonth.getMonth() - 6);
// const year = sixMonthsBefore.getFullYear();
// console.log("Jallikattu ",year);
// const month = sixMonthsBefore.getMonth() + 1;



  

  let filteredArray = data.filter((obj) => {
      let year_month = new Date(obj.year_month);
      year_month.setMonth(year_month.getMonth() + 1);
      year_month = year_month.toISOString().slice(0,7);
      console.log("Database month ",year_month);
    return (
      (discom === "" ? true : obj.discom === discom) &&
      // (yearMonth == undefined ? true : year_month === yearMonth)
      (yearMonth == undefined ? true : (year_month >= yearMonth && year_month <= yearMonth2))
    ) 
  });
  
  console.log("Data arrived ", filteredArray);
  return filteredArray;
};





return(
<>
<h3 className="heading">CAIFI Last 6 Months</h3>
<div className="tabletop">
<Table
columns={column}
dataSource={filtery2(seriesData,props.value)}
rowClassName={highlightrow}
bordered={true}
></Table>
{console.log("The dsssssssssssssssssssssssssssssss  ",seriesData)}
</div>
</>    
);
}
export default SAIDI_Table;