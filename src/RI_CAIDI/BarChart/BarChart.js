import ReactApexChart from "react-apexcharts";
import axios from "axios";
import { useEffect, useState } from "react";

const BarChart = (props) => {

  // const [data, setdata] = useState([]);
  
  // const fetchdatahandler = async () => {
  //   const data = await axios.get('/api/caidi');
  //   props.datafromchart(data.data);
  //   setdata(data.data);
  // }

  // useEffect(() => {
  //   fetchdatahandler(); 
  // }, []);

  const series = [
    {
      name: "Power Interruptions / Consumers",
      type: "bar",
      data: props.data.map(a => a.data)
    },
    {
      name: "Trend",
      type: "line",
      data: props.data.map(a => a.data),
      color: "#ffd700",
          
      }
    
  ];

  const options = {
    chart: {
      height: 350,
      type: 'heatmap',
      width: '20%',
    },
    stroke: {
      width: 4
    },

    dataLabels: {
      enabled: true,
        enabledOnSeries: [1]

      },
      
    plotOptions: {
      bar: {
        columnWidth: '10%',
        borderRadius: 0,
        borderWidth: 0,
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1],
      },
      
      line: {
        dataLabels: {
          enabled: true,
          offsetY: -10,
          style: {
            fontSize: "12px",
            fontWeight: 600,
            colors: ["#008b8b"]
          },
          formatter: function(value, { seriesIndex, dataPointIndex, w }) {
            return value.toFixed(2);
          }
        }
      }
    },
    xaxis: {
      title: {
        text: "Year Month,Total Number of Customer Interruption",
        offsetY: -10,
        style: {
          fontSize: "14px",
          fontWeight: 600,
          color: "#263238"
        }
      },
      categories: props.data.map((a) => `${a.year_month}, ${a.total_number_of_customer_interruption}`),
      position: "bottom",
      axisBorder: {
        show: false
      },
      
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      id: "caidi-axis",
      title: {
        text: "CAIDI(in Hours)",
        offsetY: -5,
        style: {
          fontSize: "14px",
          fontWeight: 600,
          color: "#263238"
        }
      },
      axisBorder: {
        show: false
      },
      labels: {
        show: true,
        formatter: function(val) {
          return val.toFixed(2); // set precision to 4 points
        }
      }
    },
    title: {
      text: 'CAIDI - Customer Average Interruption Duration Index',
      floating: true,
      offsetY: -2,
      align: 'center',
      style: {
        color: '#444',
        fontSize:'20px',
      }
    },
    subtitle: {
      text: 'Formula Used - (Sum of all Customer interruption duration)/(Total number of Customer interruption).',
      offsetY: 28,
      align: 'center',
      style: {
        fontSize: '14px',
        fontStyle: 'italic',
        color: '#777',
      },
    },
  };

  return (
    <>
      <div className="mixed-chart">
        <ReactApexChart
          options={options}
          series={series}
          type="line"
          height={350}
        />
      </div>
    </>
  );
};

export default BarChart;

