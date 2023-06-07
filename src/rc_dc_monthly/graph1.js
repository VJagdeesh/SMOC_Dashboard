import React, {useState} from 'react';
import Chart from "react-apexcharts";

const colors = ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0']


function Graph() {
  const [state] = useState({
    series: [{
      name:'Revenue',
      data: [21, 22, 10, 28, 16, 21, 13, 30, 25, 32,30,25]
    }],
    options: {
      chart: {
        height: 300,
        type: 'bar',
        events: {
          click: function(chart, w, e) {
            // console.log(chart, w, e)
          }
        }
      },
      colors: colors,
      plotOptions: {
        bar: {
          columnWidth: '45%',
          distributed: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      yaxis : {
        title: {
          text: 'Revenue(Lakhs)'
        }
      },
      legend: {
        show: false
      },
      xaxis: {
        title: {
          text: 'Month'
        },
        categories: [
          ['Jan'],
          ['Feb'],
          ['Mar'],
          ['Apr'],
          ['May'],
          ['Jun'],
          ['Jul'],
          ['Aug'],
          ['Sep'],
          ['Oct'],
          ['Nov'],
          ['Dec'],
        ],
        labels: {
          style: {
            colors: colors,
            fontSize: '12px'
          }
        }
      }
    },
  
  
  
}); 

return(
  <div className = "Graph">
    <h3>Revenue (INR) Gained from Remote Disconnect and Reconnect Operations</h3>
    <div className = "row">
      <div className = "col-4">
      <div id="chart">
     <Chart 
     options={state.options} 
     series={state.series} 
     type="bar" height={300} width={500} />
</div>
      </div>
    </div>
  </div>
)
}

export default Graph;


