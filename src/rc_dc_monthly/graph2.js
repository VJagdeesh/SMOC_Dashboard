import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BarChart from '../rc_dc_daily/Chart/BarChart';

function Graph2(props) {
  const [seriesData, setSeriesData] = useState([]);

  const fetchdatahandler = async () => {
    const response = await axios.get('/api/rcdcmonthly');
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
    
    

    let filteredArray=data.filter((obj) => {

      let creDate = obj.cre_dttm ? new Date(obj.cre_dttm.split(' ')[0].split('-').reverse().join('/')) : null;
      let objYear = creDate ? creDate.getFullYear() : null;
      let objMonth = creDate ? creDate.getMonth() + 1 : null; // January is 0 in JavaScript
      
      let [fromYear,fromMonth]=fromdate ? fromdate.split('-').map(Number) : null;
      // let creDate = new Date(obj.cre_dttm.split(' ')[0].replace(/-/g,'/'));
      // const parts1 =fromDate ? fromDate.split('/') : null;
      // const parts2 =toDate ? toDate.split('/') : null;

      // const parts1 = fromDate.split('/');
      // const parts2 = toDate.split('/');
      // const date1 =parts1 !== null ? new Date(parts1[2], parts1[0] - 1, parts1[1]) : null;
      // const date2 =parts2 !== null ? new Date(parts2[2], parts2[0] - 1, parts2[1]) : null;



      // Only compare based on year and month
      // let creYearMonth = creDate.getFullYear() + "-" + creDate.getMonth();
      // let fromYearMonth = fromDate ? fromDate.getFullYear() + "-" + fromDate.getMonth() : null;
      // let toYearMonth = toDate ? toDate.getFullYear() + "-" + toDate.getMonth() : null;

      
      return(
        (city === "" ? true : obj.zone_name === city) &&
        (discom === "" ? true : obj.discom_name === discom) &&
        (division === "" ? true : obj.division_name === division) &&
        (subdivision === "" ? true : obj.subdivision_name === subdivision) &&
        (substation === "" ? true : obj.substation_name === substation) &&
        (fromYear === objYear && fromMonth === objMonth)
        
     ) 
    });
    console.log("Data arrived ", filteredArray);
    // return filteredArray

  //   // if (data !== undefined) {
  //   //   let filteredArray = data.filter((obj) => {

  //   //     return (
  //         // (city === "" ? true : obj.zone_name === city) &&
  //         // (discom === "" ? true : obj.discom_name === discom) &&
  //         // (division === "" ? true : obj.division_name === division) &&
  //         // (sub_division === "" ? true : obj.subdivision_name === sub_division) &&
  //         // (sub_station === "" ? true : obj.substation_name === sub_station)
  //   //     );
  //   //   });
  //   //   console.log("Data arrived ", filteredArray);
      return filteredArray;
    // }

    // return [];
  };
  

  //filtery2(seriesData,props.value)
  return (
    <>
    {/* {props.value.length != 0 && filtery2(seriesData,props.value)} */}
    {props.value.length != 0 && props.value[6].name != undefined && <BarChart data={filtery2(seriesData,props.value)} fromdatevalue={props.value[6]}/>}
    {/* {props.value.length === 0 && <h1>Please select date to display date</h1>} */}
    {props.value.length != 0 && props.value[6].name === undefined && alert("Select date in input column !!!")}    
    {/* <Table/> */}
    </>
  );
}

export default Graph2;