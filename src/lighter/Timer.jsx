import React, { useState, useEffect } from 'react';

export const Timer = (props) => {
  const [sec, setSec] = useState(props.seconds);
  useEffect(() => {
    sec > 0 && setTimeout(() => setSec(sec - 1), 1000);
  }, [sec]);

  return <div>{sec}</div>;
};
