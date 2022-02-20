import React, { useEffect }  from "react";
import { useLocation, useNavigate } from "react-router-dom"
import './Styles.css';

import { Timer } from "./Timer";

const Yellow = () => {
	const location = useLocation()
	const navigate = useNavigate()

	//проверка для перехода по URL
	if (location.state == null) {
		location.state = {}
		location.state.from = {}
		location.state.from.pathname = '/red'
		location.state.from.search = ''
		location.state.from.hash = ''
		location.state.from.state = null
		location.state.from.key = 'default'
	}

	//переадресация
	useEffect(() => {
		if (location.state.from.pathname === '/red') {
			setTimeout(() => {
				navigate('/green')
			  }, 3000)
		} else {
			setTimeout(() => {
				navigate('/red')
			  }, 3000)
		}
	}, [])
	
	return (
		<>
		<div className="trafic">
			<div className="lighter red"></div>
			<div className="lighter yellow active"><Timer seconds={3}/></div>
			<div className="lighter green"></div>
		</div>
		</>
	)
}

export default Yellow