import React, { useState, useEffect }  from "react";
import { useLocation, useNavigate } from "react-router-dom"
import './Styles.css';

const Yellow = () => {
	const location = useLocation()
	const navigate = useNavigate()

	///таймер
	const [sec, setSec] = useState(3);
	useEffect(() => {
		sec > 0 && setTimeout(() => setSec(sec - 1), 1000);
	}, [sec]);

	
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
			<div className="lighter yellow active">{sec}</div>
			<div className="lighter green"></div>
		</div>
		</>
	)
}

export default Yellow