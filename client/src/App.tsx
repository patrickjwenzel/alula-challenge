import React, { useState } from 'react';
import './App.css';
import DatePicker from './components/DatePicker';
import AsteroidTable from './components/AsteroidTable';
import NumberPicker from './components/NumberPicker';
import axios from 'axios';

function App() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [kmFilter, setKmFilter] = useState('');
  const [tableData, setTableData] = useState(undefined);

  const changeStart = (val:any) => {
    setStartDate(val);
  };

  const changeEnd = (val:any) => {
    setEndDate(val);
  };

  const changeKm = (val:any) => {
    setKmFilter(val);
  };

  const getNewDate = (date:any, time:any) => new Date(new Date(date).getTime()+(time*24*60*60*1000)).toISOString().split('T')[0]

  return (
    <div>
      <div>
        <DatePicker
          date={startDate}
          setValue={changeStart}
          label='Choose a Start Date'
          max={endDate}
          min={endDate
            // Add 7 days to the start date since the API cannot handle date ranges > 7 days
            // Could have used the moment package but wanted to limit the number of ones I used
            ? getNewDate(endDate, -7)
            : undefined
          }
        />
      </div>
      <div>
        <DatePicker
          date={endDate}
          setValue={changeEnd}
          label='Choose an End Date'
          min={startDate}
          max={startDate
            // Add 7 days to the start date since the API cannot handle date ranges > 7 days
            // Could have used the moment package but wanted to limit the number of ones I used
            ? getNewDate(startDate, 7)
            : undefined
          }
        />
      </div>
      <div>
        <NumberPicker
          number={kmFilter}
          setValue={changeKm}
          label='Choose a Kilometer Distance'
        />
      </div>
      <button
        type='button'
        onClick={() => {
          if (!startDate) {
            alert('Must Select a Start Date');
          } else if (parseFloat(kmFilter) < 0) {
            alert('Kilometer Distance Cannot Be Negative');
          } else {
            let endDateToUse = endDate;

            if (!endDateToUse) {
              endDateToUse = getNewDate(startDate, 7);
              setEndDate(endDateToUse);
            }
            axios({
              method: 'post',
              url: 'getData',
              data: {
                dateStart: startDate,
                dateEnd: endDateToUse,
                within: {
                  value: kmFilter || undefined,
                  units: 'kilometers',
                }
              }
            }).then((response) => {
              setTableData(response.data);
            });
          }
        }}
      >
        Search for Asteroids
      </button>
      {
        tableData !== undefined && 'error' in tableData
          ? <div
            style={{
              color: 'red'
            }}
          >
            Error finding asteroids!
          </div>
          : <AsteroidTable
            data={tableData}
          />
      }

    </div>
  );
}

export default App;
