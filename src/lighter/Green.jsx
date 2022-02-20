import React, { useEffect }  from "react";
import { useLocation, useNavigate } from "react-router-dom"
import './Styles.css';

import { Timer } from "./Timer";

const Green = () => {
	const navigate = useNavigate()
	const location = useLocation()

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
			<div className="lighter green active"><Timer seconds={15}/></div>
		</div>	
		</>
	)
}

export default Green