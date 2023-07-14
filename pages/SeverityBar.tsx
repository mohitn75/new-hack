import React from 'react';
import { ProgressBar } from 'primereact/progressbar';
import { Knob } from 'primereact/knob';


interface SeverityBarProps {
    value: number;
  }

const SeverityBar: React.FC<SeverityBarProps> = ({ value }) => {
    const calculateGradientColor = (value: any) => {
    const normalizedValue = value / 100;
    const red = Math.round(255 - normalizedValue * 255);
    const green = Math.round(normalizedValue * 255);
    return `rgb(${red}, ${green}, 0)`;
  };

  const gradientColor = calculateGradientColor(value);

  const progressBarStyle = {
    height: '20px',
    background: `linear-gradient(to right, red, ${gradientColor}, green)`,
    position: 'relative',

  };

  const knobSize = 300;
  const knobStyle = {
    width: `${knobSize}px`,
    height: `${knobSize}px`,
    fontSize: `${knobSize / 4}px`,
  };

  return (
      <Knob value={value} style={knobStyle} onChange={(e) => setValue(e.value)} />
  );
};

export default SeverityBar;
