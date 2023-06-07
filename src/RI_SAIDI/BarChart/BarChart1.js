import ReactApexChart from "react-apexcharts";
import axios from "axios";
import { useEffect, useState } from "react";
const BarChart1=(props)=>{

//   const [data,setdata]=useState([]);
//   const fetchdatahandler=async()=>{
//     const data=await axios.get('/data');
//     // console.log(data.data[0]);
//     props.datafromchart(data.data);
//     setdata(data.data);
//   }

// useEffect(()=>{
//  fetchdatahandler(); 
// },[]);




const currYear = new Date(props.fromdatevalue.name).getFullYear();


const series = [
  {
    name: `${currYear} SAIDI`,
    type: "bar",
    data: props.dataCurrYear.map(a => a.data)
  },
  {
    name: `${currYear-1} SAIDI`,
    type: "bar",
    data: props.dataPrevYear.map(a => a.data),
    
        
    }

];

const options={
    chart: {
      height: 350,
      type: 'heatmap',
      width: '20%',
    },
    plotOptions: {
      bar: {
        columnWidth: '50%',
        borderRadius: 0,
        dataLabels: {
          position: 'top', // top, center, bottom
        },
      }
    },
    dataLabels: {
      enabled: false,
      formatter: function (val) {
        return val ;
      },
      offsetY: -20,          //value in top of graph
      style: {
        fontSize: '12px',
        colors: ["#304758"]
      }
    },
    
    xaxis: {
      title:{
        text:'Month',
        offsetY: -10,
        style: {
          fontSize: "14px",
          fontWeight: 600,
          color: "#263238",
        },
      },
      
      categories: props.data.map((a)=>{return a.month}),    // x-axis catog
      position: 'bottom',
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      
    },
    yaxis: {
      title:{
      text:'SAIDI(in Hours)',
      offsetY:-5,
      style:{
        fontSize: '14px',
        fontWeight: 600,
        color: '#263238',
      }  
      },
      axisBorder: {
        show: false
      },
      
      labels: {
        show: true,
        formatter: function (val) {
          return val;
        }
      }
    
    },
    
    
  }
return(
<>

<ReactApexChart options={options} series={series} type="bar" height={350} />
 
</>                     
);
}

export default BarChart1;