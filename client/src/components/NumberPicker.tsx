import React from 'react';

function NumberPicker(props:any) {
  return (
    <>
      <label
        style={{
          marginRight: 5
        }}
      >
        {props.label}
      </label>
      <input
        type='number'
        value={props.number}
        onChange={(e:any) => {
            props.setValue(e.target.value);
            return;
        }}
      >
      </input>
    </>
  );
};

export default NumberPicker;
