import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const LeftBox = ({ scale, handleScaleChange }) => {
  return (
    <div
      style={{
        flex: '0 0 200px',
        background: '#f0f0f0',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <h2>Element Details</h2>
      <p>Element 1</p>
      <p>Element 2</p>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Slider
          min={0.5}
          max={3}
          step={0.005}
          value={scale}
          onChange={handleScaleChange}
        />
        <input
          type="text"
          value={scale}
          onChange={(e) => handleScaleChange(e.target.value)}
          style={{ marginLeft: '10px', width: '40px' }}
        />
      </div>
    </div>
  );
};

export default LeftBox;
