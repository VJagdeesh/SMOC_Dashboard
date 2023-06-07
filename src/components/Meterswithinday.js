import { useDispatch, useSelector } from "react-redux";
import Subtable2 from "./Subtable2";
import { Modal } from "antd";
function Meterswithinday()
{
const dispatch=useDispatch();
const sname12=useSelector(state=>state.counter12);      // data to be displayed in subtable
const sname15=useSelector(state=>state.counter15);      // true or false value for pop-up to open or close

// data to be downloaded from table
const handleDownload = () => {
    const csvData = [
      Object.keys(sname12[0][0]).join(','), // headers
      ...sname12[0].map(item => Object.values(item).join(',')) // data rows
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
<>
<Modal open={sname15} footer={null} closable={false} title="Meters Communicated within a day" width={1300}>
{/* <div style={{position:"absolute",top:"1050px",left:"0px"}}> */}
<Subtable2 data={sname12[0]}/>
<div style={{display:"flex",justifyContent:"space-between"}}>
<button type="button" class="btn btn-outline-secondary" onClick={()=>{dispatch({type:'Change15',counter15:false})}}>Close</button>
<button type="button" class="btn btn-outline-secondary" onClick={handleDownload}>Download</button>
</div> 
</Modal> 
</>    
);
}
export default Meterswithinday