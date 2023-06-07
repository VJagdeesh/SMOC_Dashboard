import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BarChart from './BarChart/BarChart';

function Graph2(props) {
  const [seriesData, setSeriesData] = useState([]);

  const fetchdatahandler = async () => {
    const response = await axios.get('/api/caifi');
    const data = response.data[0];
    setSeriesData(data);
    }
  useEffect(() => {
    fetchdatahandler();
  }, []);




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

  
  return (
    <>
    {props.value.length != 0 && props.value[6].name != undefined && <BarChart data={filtery2(seriesData,props.value)}/>}
    {props.value.length != 0 && props.value[6].name === undefined && alert("Select date in input column !!!")}    
    </>
  );
}

export default Graph2;