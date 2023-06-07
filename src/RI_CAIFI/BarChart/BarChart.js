import ReactApexChart from "react-apexcharts";
import axios from "axios";
import { useEffect, useState } from "react";
const BarChart=(props)=>{

  const [data,setdata]=useState([]);
  const fetchdatahandler=async()=>{
    const data=await axios.get('/data');
    // console.log(data.data[0]);
    props.datafromchart(data.data);
    setdata(data.data);
  }

useEffect(()=>{
 fetchdatahandler(); 
},[]);







  const  series= [{
        name: 'Hours/Consumers',
        data: props.data.map((a)=>{return a.caifi})
      }]

const options={
    chart: {
      height: 350,
      type: 'heatmap',
      width: '20%',
    },
    plotOptions: {
      bar: {
        columnWidth: '10%',
        borderRadius: 0,
        dataLabels: {
          position: 'top', // top, center, bottom
        },
      }
    },
    dataLabels: {
      enabled: true,
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
        text:'Year Month,Consumer Count',
      },
      
      categories: props.data.map((a)=>{return a.year_month}),    // x-axis catog
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
      text:'CAIFI(in Hours)',
      offsetY:-2,
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
    title: {
      text: 'CAIFI-Customer Average Interruption Frequency Index',
      

      floating: true,
      offsetY: -2,
      align: 'center',
      style: {
        color: '#444',
        fontSize:'20px',
      }
    },
    subtitle: {
      text: 'Formula Used - (Total Numbers of Power Interruptions from all Active Consumers in a Month) / (Total Numbers of Unique Consumers Interrupted in a Month).',
      offsetY: 28,
      align: 'center',
      style: {
        fontSize: '14px',
        fontStyle: 'italic',
        color: '#777',
      },
    },
  }
return(
<>

<ReactApexChart options={options} series={series} type="bar" height={350} />
{console.log("India ",props.data)}     
</>                     
);
}
export default BarChart;