import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Styles.css';
import { Timer } from './Timer';

const Red = () => {
  const navigate = useNavigate();
  const location = useLocation();

  //переадресация
  useEffect(() => {
    setTimeout(() => {
      navigate('/yellow', { replace: false, state: { from: location } });
    }, 10000);
  }, []);

  return (
    <>
      <div className="trafic">
        <div className="lighter red active">
          <Timer seconds={10} />
        </div>
        <div className="lighter yellow"></div>
        <div className="lighter green"></div>
      </div>
    </>
  );
};

export default Red;
