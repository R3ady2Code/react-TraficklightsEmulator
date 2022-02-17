import React, { useState, useEffect }  from "react";
import { useLocation, useNavigate } from "react-router-dom"
import './Styles.css';

const Green = () => {
	const navigate = useNavigate()
	const location = useLocation()

	///таймер
	const [sec, setSec] = useState(15);
	useEffect(() => {
		sec > 0 && setTimeout(() => setSec(sec - 1), 1000);
	}, [sec]);

	//переадресация
	useEffect(() => {
		setTimeout(() => {
		  navigate('/yellow', {replace: false, state: {from: location}})
		}, 15000)
	  }, [])

	return (
		<>
		<div className="trafic">
			<div className="lighter red"></div>
			<div className="lighter yellow"></div>
			<div className="lighter green active">{sec}</div>
		</div>	
		</>
	)
}

export default Green