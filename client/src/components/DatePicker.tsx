import React from 'react';

function DatePicker(props:any) {
  return (
    <>
      <label
        style={{
          marginRight: 5
        }}
      >
        {props.label} <span style={{ color: 'red' }}>*</span>
      </label>
      <input
        type='date'
        value={props.date}
        min={props.min}
        max={props.max}
        onChange={(e) => {
            props.setValue(e.target.value);
            return;
        }}
      >
      </input>
    </>
  );
};

export default DatePicker;
