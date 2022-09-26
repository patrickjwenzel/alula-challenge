import React from 'react';

function AsteroidTable(props:any) {
  return (
    props.data === undefined
      ? null
      : <div
        style={{
          marginTop: 10
        }}
      >
        <div>Asteroids:</div>
        {
          props.data.map((ast:any) => (
            <div
              key={ast}
            >
              {ast}
            </div>
          ))
        }
      </div>
  );
};

export default AsteroidTable;
