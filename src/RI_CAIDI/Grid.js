// import './styles.css';
import Filter from './Filter/Filter';
import { useState } from 'react';
import CAIDI_Table from './Table/Table';
import Graph2 from './graph2';
import Compare from './compare';

const Grid = () => {
  const [select, setselect] = useState();
  const [valuefromchart, setvaluefromchart] = useState([]);
  const [array, setArray] = useState([]);
  const [showGrids, setShowGrids] = useState(false);

  function callMethod(num) {
    setArray(num);
  }

  function handleRadioChange(e) {
    setShowGrids(true);
    setselect(e.target.value);
  }

  return (
    <div className="container">
      <h1 className="heading">Reliability Indices - CAIDI</h1>

      <div className="row border border-dark mt-4">
        <Filter status={callMethod} />
      </div>

      <div className="form-check form-check-inline mt-2">
        <input
          className="form-check-input"
          onChange={handleRadioChange}
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio1"
          value="Bar Graph"
        />
        <label className="form-check-label" htmlFor="inlineRadio1">
          Graph
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          onChange={handleRadioChange}
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio2"
          value="Table"
        />
        <label className="form-check-label" htmlFor="inlineRadio2">
          Tabular data
        </label>
      </div>

      {showGrids && (
        <div>
          <div className="row border border-dark mt-4" height = "90%">
            {select === 'Bar Graph' && <Graph2 value={array} />}
            {select === 'Table' && <CAIDI_Table value={array} />}
          </div>

          <h2 className="mt-4 mb-2">CAIDI same month last year</h2>

          <div className="row border border-dark mt-2" height="90%">
          <Compare value={array} />
          </div>
        </div>
      )}

      <p>
        <b>Note: All the data used for the above visualization are sample data from Jan 2018 to Mar
        2023</b>
      </p>
    </div>
  );
};

export default Grid;
