import React, { useState,  useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import './Styles.css';


const Red = () => {
	const navigate = useNavigate()
	const location = useLocation()

	///таймер
	const [sec, setSec] = useState(10);
	useEffect(() => {
		sec > 0 && setTimeout(() => setSec(sec - 1), 1000);
	}, [sec]);

	//переадресация
	useEffect(() => {
		setTimeout(() => {
		  navigate('/yellow', {replace: false, state: {from: location}})
		}, 10000)
	}, [])

	return (
		<>
		<div className="trafic">
			<div className="lighter red active">{sec}</div>
			<div className="lighter yellow"></div>
			<div className="lighter green"></div>
		</div>	
		</>
	)
}

export default Red