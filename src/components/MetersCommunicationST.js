import Subtable2 from "./Subtable2";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Dialog, DialogTitle,DialogContent, DialogActions, Paper } from "@material-ui/core";
import { Modal } from "antd";
function MetersCommunicationST()
{
const sname14=useSelector(state=>state.counter14);   // boolean value to open a pop
const dispatch=useDispatch();

const [validate,setvalidate]=useState(true);
const sname11=useSelector(state=>state.counter11);  // // data to be displayed in subtable

// Downloading table data
const handleDownload = () => {
  const csvData = [
    Object.keys(sname11[0][0]).join(','), // headers
    ...sname11[0].map(item => Object.values(item).join(',')) // data rows
  ].join('\n');
  
  const encodedUri = encodeURI(`data:text/csv;charset=utf-8,${csvData}`);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', 'data.csv');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};




return(

  <div style={{ zIndex: 888 }}>

<Modal open={sname14} footer={null} width={1300} closable={false} title="Meter Communication table">
  <Subtable2 data={sname11[0]}/>
  <br/>
  <div style={{display:"flex",justifyContent:"space-between"}}>
  <button type="button" class="btn btn-outline-secondary" onClick={()=>{dispatch({type:'Change14',counter14:false});  }}>Close</button>
  <button type="button" class="btn btn-outline-secondary" onClick={handleDownload}>Download</button>
  </div>
</Modal>


  </div>

);    
}
export default MetersCommunicationST;