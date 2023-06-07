import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BarChart1 from './BarChart/BarChart1';

function Compare(props) {
  const [seriesData, setSeriesData] = useState([]);

  const fetchdatahandler = async () => {
    const response = await axios.get('/api/saidi');
    const data = response.data[0];
    setSeriesData(data);
  }

  useEffect(() => {
    fetchdatahandler();
  }, []);

  const filterData = (data, objects, yearOffset) => {
    let filterobj = objects.map((obj) => obj.name);
  
    let state = filterobj[0];
    let discom = filterobj[1];
    let city = filterobj[2];
    let division = filterobj[3];
    let subdivision = filterobj[4];
    let substation = filterobj[5];
    let fromdate = filterobj[6];
    let criteria = filterobj[7];
  
    let year = new Date(fromdate).getFullYear(); // extract year from user input date
    let prevYear = year - yearOffset; // get previous year
  
    let startDate = new Date(prevYear, 0, 1); // create a new date object with year and month as January (0-indexed) for previous year
    let endDate = new Date(prevYear, 11, 31); // create a new date object with year and month as December (0-indexed) for previous year
  
    let filteredArray = data.filter((obj) => {
      let year_month = new Date(obj.year_month);
      return (
        (discom === "" ? true : obj.discom === discom) &&
        (year_month >= startDate && year_month <= endDate) // filter data within the selected year range
      );
    });
  
    return filteredArray;
  };
  
  const filteredDataCurrYear = filterData(seriesData, props.value, 0);
  const filteredDataPrevYear = filterData(seriesData, props.value, 1);

  return (
    <>
      {props.value.length !== 0 && props.value[6].name !== undefined && (
        // <BarChart1
        //   dataCurrYear={filteredDataCurrYear}
        //   dataPrevYear={filteredDataPrevYear}
        //   fromdatevalue={props.value[6]}
        //   todatevalue={props.value[7]}
        // />

        <BarChart1 data={filterData(seriesData,props.value,0)} dataCurrYear={filteredDataCurrYear} dataPrevYear={filteredDataPrevYear} fromdatevalue={props.value[6]}/>

      )}

      {console.log("gjfffffvgjc cccccc ",filteredDataPrevYear)}
      {props.value.length !== 0 && props.value[6].name === undefined && alert("Select date in input column !!!")}
    </>
  );
}

export default Compare;
