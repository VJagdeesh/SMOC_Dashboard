import Chart from 'react-apexcharts';
const BarChart=(props)=>{
    var options = {
        series: [{
        name: 'Meter Connected',
        data: [props.data.filter(a=> a.event_type === "RECONNECTED").length] 
      }, {
        name: 'Meter Disconnected',
        data: [props.data.filter(a=> a.event_type === "DISCONNECTED").length]
      }, {
        name: 'Meter Yet To be connected',
        data: [props.data.filter(a=> a.event_type === "YET TO BE CONNECTED").length]
      }],
        chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: [props.todatevalue === undefined ? props.fromdatevalue.name : props.fromdatevalue.name +' to ' +props.todatevalue.name],
      },
      yaxis: {
        title: {
          text: 'Count'
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val
          }
        }
      }
      };
return(
<>
<div className="Graph2">
      <div className="row">
        <div className="col-4">
          <div id="chart">
            <Chart options={options} series={options.series} type="bar" height={300} width={1000} />
            {console.log(props.data.filter(a=> a.event_type === "DISCONNECTED").length,"                ")}
          </div>
        </div>
      </div>
    </div>
</>    
);    
}

export default BarChart;