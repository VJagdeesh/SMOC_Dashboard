// import './styles.css';
import Filter from './Filter/Filter';
// import BarChart from './BarChart/BarChart';
import { useState } from 'react';
import SAIDI_Table from './Table/Table';
import Graph2 from './graph2';
const Grid=()=>{

const [select,setselect]=useState();
const [valuefromchart,setvaluefromchart]=useState([]);
const [array,setArray]=useState([]);

function dataFromFilter(num){
  setArray(num)
}

return(
    <div class="container">
    <h1 className='heading'>Reliability Indices - CAIFI</h1>

    <div class="row border border-dark mt-4">
    <Filter status={dataFromFilter}/>
    </div>
    {/* <div class="row border border-dark mt-2">
    <Timer/>
    </div> */}

    <div class="form-check form-check-inline">
  <input class="form-check-input" onClick={(e)=>{setselect(e.target.value)}} type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Bar Graph" />
  <label class="form-check-label" for="inlineRadio1">Graph</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" onClick={(e)=>{setselect(e.target.value)}} type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Table"  />
  <label class="form-check-label" for="inlineRadio2">Table</label>
</div>

    <div class="row border border-dark mt-4"  style={{height:"90%"}}>
    {select ==="Bar Graph" && <Graph2 value={array}  />}
    {select === "Table" && <SAIDI_Table value={array}/>}
    </div>
  </div>    
);
}
export default Grid;