import { useNavigate } from "react-router-dom";
import React,{ useEffect,useState } from "react";
import axios from "axios";


function Grid(){
const[overallcount,setoverallcount]=useState([]);  // for storing meters communinication data
const[caifi_data,setcaifi_data]=useState([]);
const[rc_dc_data,setrc_dc_data]=useState([]);

async function CommunicatingMetersCountHandler()
{
 const data=await axios.get('/api/datediff'); 
setoverallcount(data.data);
}

async function RI_CAIFI_Handler()
{
const data=await axios.get('/api/caifi');
let curr=[]
curr=data.data[0].filter(a => {return a.year_month === "2023-Mar"});
setcaifi_data(curr[0].caifi);
}



async function RC_DC_DATA_Handler()
{
    let date=new Date();
    const currMonth=date.getMonth() + 1;
    let month,year;
    if(currMonth === 1)
    {
    month=12;
    year=date.getFullYear()-1;    
    }
    else{
    month=date.getMonth() - 1;
    year=date.getFullYear();    
    }



   let query = "SELECT " +
    "COUNT(CASE WHEN event_type='DISCONNECTED' THEN 1 END) AS total_disconnect, " +
    "COUNT(CASE WHEN event_type='RECONNECTED' THEN 1 END) AS total_reconnect, " +
    "COUNT(CASE WHEN event_type='YET TO BE CONNECTED' THEN 1 END) AS total_yet_to_be_connect " +
    "FROM rc_dc"+
    " WHERE EXTRACT(MONTH FROM TO_TIMESTAMP(cre_dttm,'DD:MM:YYYY HH24:MI:SS')) ="+ month+" AND EXTRACT(YEAR FROM TO_TIMESTAMP(cre_dttm,'DD:MM:YYYY HH24:MI:SS')) ="+ 2021;  
//year
    try{
const data=await axios.get('/api/dataoverallquery',{params:{query}})
setrc_dc_data(data.data[0]);
}
catch(error)
{
console.error(error.message);    
}
}




useEffect(()=>{
CommunicatingMetersCountHandler(); 
RI_CAIFI_Handler();
RC_DC_DATA_Handler();
},[])
    const navigate=useNavigate();
    function dashboardHandler(e)
    {
    e.preventDefault();
    navigate('/home/dashboard');    
    }

    function SaidiHandler(e){
        e.preventDefault();
        navigate('/home/RI_SAIDI');
        }
        

        function CaifiHandler(e){
            e.preventDefault();
            navigate('/home/RI_CAIFI');
            }

        function RC_DC_Handler(e){
            e.preventDefault();
            navigate('/home/rc_dc_monthly');
            }

        function CaidiHandler(e)
        {
        e.preventDefault();
        navigate('/home/RI_CAIDI');    
        }    
        
    
    return(
        <div style={{marginTop:"40px",height:"1000px",width:window.innerWidth}} class="container text-center border">
            <p style={{color:"blue",fontWeight:"bolder",fontSize:"20px",textAlign:"left"}}>One Shot Dashboard for January-2023</p>
            <div class="row border p-2 m-2">
                column
            </div>
            <div style={{height:"250px"}} class="row border border-dark p-2 m-2">
                <p style={{backgroundColor:"#95BDFF"}}>Smart meter installed information in MDM</p>
                <div class="col border border-dark p-2 m-1 h-75 w-33">
                    <p style={{backgroundColor:"#95BDFF"}}>Total meters in MDM</p>
                    <div class="container bg-warning-subtle h-75 w-50" onClick={dashboardHandler}>
                        contents
                    </div>
                </div>
                <div class="col border border-dark p-2 m-1 h-75 w-33">
                    <p style={{backgroundColor:"#95BDFF"}}>Prepaid meters</p>
                    <div class="container bg-dark-subtle h-75 w-50">
                        contents
                    </div>
                </div>
                <div class="col border border-dark p-2 m-1 h-75 w-33">
                    <p style={{backgroundColor:"#95BDFF"}}>Postpaid meters</p>
                    <div class="container bg-success-subtle h-75 w-50">
                        contents
                    </div>
                </div>
            </div>
            
            <div className="row border border-dark p-1 m-1" style={{height:"250px"}}>

            <p style={{backgroundColor:"#95BDFF"}}>EESL AMI CRITICAL REPORTS</p>
            <div className="col border border-dark p-2 m-1 h-75 w-33">

            <p style={{backgroundColor:"#95BDFF"}}>Communicating Meters</p> 

            <div className="container bg-success-subtle h-75 w-50" onClick={dashboardHandler}><br></br><h1>{(overallcount[0]/(overallcount.reduce((a,b)=> a+b,0))*100).toFixed(2)} %</h1></div>

            </div>




            <div className="col border border-dark p-2 m-1 h-75 w-33">

            <p style={{backgroundColor:"#95BDFF"}}>RC/DC Monthly</p> 

            <div className="container bg-success-subtle h-75 w-50" onClick={RC_DC_Handler}>
            <p>Reconnect - {rc_dc_data.total_reconnect}</p>
            <p>Disconnect - {rc_dc_data.total_disconnect}</p>
            <p>Yet To Connect - {rc_dc_data.total_yet_to_be_connect}</p>
            </div>

            </div>

            <div className="col border border-dark p-2 m-1 h-75 w-33">

            <p style={{backgroundColor:"#95BDFF"}}>Report3</p> 

            <div className="container bg-success-subtle h-75 w-50">Content</div>

            </div>
            <div style={{height:"250px"}} class="row border border-dark p-3 ms-1 mt-4">
                    <p style={{backgroundColor:"#95BDFF"}}>Reliability Indices-Monthly Parameters</p>
                <div class="col border border-dark p-2 m-1 h-75 w-33">
                    <p style={{backgroundColor:"#95BDFF"}}>SAIDI-Monthly</p>
                <div class="container bg-warning-subtle h-75 w-75" onClick={SaidiHandler} >
                    <h1 style={{fontSize:28}}>{caifi_data}</h1>
                    Hours/Consumers
            </div>
            </div>
            <div class="col border border-dark p-2 m-1 h-75 w-33">
                <p style={{backgroundColor:"#95BDFF"}}>CAIDI-Monthly</p>
            <div class="container bg-warning-subtle h-75 w-75" onClick={CaidiHandler}>
            <h3 style={{alignItems:"center"}}>{caifi_data}</h3>
            Hours/Consumers
            </div>
            </div>
            <div class="col border border-dark p-2 m-1 h-75 w-33">
                <p style={{backgroundColor:"#95BDFF"}}>SAIFI-Monthly</p>
                <div class="container bg-dark-subtle h-75 w-75">
                <h3 style={{alignItems:"center"}}>{caifi_data}</h3>
                <p>Power Interruptions/Consumers</p>
                </div>

            </div>
            <div class="col border border-dark p-2 m-1 h-75 w-33">

            <p style={{backgroundColor:"#95BDFF"}}>CAIFI-Monthly</p>

            <div class="container bg-success-subtle h-75 w-75" onClick={CaifiHandler}>
            
            <h3 style={{alignItems:"center"}}>{caifi_data}</h3>
            
            <p>Power Interruptions/Consumers</p>
            </div>

            </div>
            </div>
            </div>
    </div>   
    )
}

export default Grid;
