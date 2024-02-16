import { useState } from 'react';
import ymmeData from './data';
import './App.css';

function App() {
  const [yearValue, setYearValue] = useState('');
  const [makeValue, setMakeValue] = useState('');
  const [modelValue, setModelValue] = useState('');
  const [engineValue, setEngineValue] = useState('');

  return (
    <>
      <form>
        <label htmlFor="year">Year</label>
        <select
          id="year"
          onChange={(e) => setYearValue(e.target.value)}
          value={yearValue}
        >
          <option value="">1 | Year</option>
          {ymmeData.yearData.map((year) => (
            <option value={year} key={year}>
              {year}
            </option>
          ))}
        </select>
        <label htmlFor="make">Make</label>
        <select
          id="make"
          onChange={(e) => setMakeValue(e.target.value)}
          value={makeValue}
        >
          <option value="">2 | Make</option>
          {ymmeData.makeData.map((make, i) => (
            <option value={make} key={`${make}-${i}`}>
              {make}
            </option>
          ))}
        </select>
        <label htmlFor="model">Model</label>
        <select id="model">
          <option value="">3 | Model</option>
          {ymmeData.modelData.map((model) =>
            model.make === makeValue
              ? model.models.map((model, i) => (
                  <option value={model} key={`${model}-${i}`}>
                    {model}
                  </option>
                ))
              : null
          )}
        </select>
        <label htmlFor="engine">Engine</label>
        <select id="engine">
          <option value="">4 | Engine</option>
        </select>
      </form>
    </>
  );
}

export default App;
