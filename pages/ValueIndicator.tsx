import React from 'react';
import Knob from 'rc-knob';


interface SeverityBarProps {
    value: number;
  }


  const ValueIndicator: React.FC<SeverityBarProps> = ({ value }) => {
    const isPositive = value >= 0;
  const color = isPositive ? 'green' : 'red';

  return (
    <div>
      <Knob
        value={Math.abs(value)}
        className={color}
        width={220} // Adjust the width as desired
        height={220} // Adjust the height as desired
        thickness={0.4} // Adjust the thickness as desired
      />
      <span>{value}</span>
    </div>
  );
};

export default ValueIndicator;