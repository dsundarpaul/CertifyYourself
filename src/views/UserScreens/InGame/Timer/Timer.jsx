import { Progress } from 'antd';
import React, { useEffect, useState } from 'react';

const Timer = () => {
  const [time, setTime] = useState(100);

  useEffect(() => {
    const timer = setInterval(() => {
      if (time > 0) {
        setTime(prev => prev - 10);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const customFormat = () => '';

  const getProgressBarColor = () => {
    if (time >= 70) {
      return 'lightgreen'; // Change color to green when progress is >= 70%
    } else if (time >= 30) {
      return 'orange'; // Change color to orange when progress is >= 30%
    } else {
      return 'red'; // Change color to red when progress is < 30%
    }
  };

  return (
    <div style={{ marginTop: '50px' }}>
      <Progress
        showInfo
        percent={time}
        format={customFormat}
        strokeColor={getProgressBarColor()}
      />
    </div>
  );
};

export default Timer;
