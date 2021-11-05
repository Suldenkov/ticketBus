import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import MyButton from "../Button/Button";
import DatePicker from "react-datepicker";
import Prompt from "../Prompt/Prompt";
import { formatDate } from "../../utils/formatDate";
import style from './FlightsSearch.module.scss';
import './f.scss'
import "react-datepicker/dist/react-datepicker.css";

import {useDispatch} from 'react-redux';
import { fetchParkCar } from "../../store/action-creator/ParkCar";
import SearchInput from "../SearchInput/SearchInput";

const FlightsSearch: React.FC = (props) => {
	
	const [startDate, setStartDate] = useState<any>(null);
	const [searchParam, setSearchParam] = useState({arrival: '', departure: ''})
	let history = useHistory();
	const dispatch = useDispatch()

	const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
		dispatch(fetchParkCar(e.target.value))
		setSearchParam({...searchParam, [e.target.name]: e.target.value})
	}


	const send = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault()
		history.push(`/flights?arrival=${searchParam.arrival}&departure=${searchParam.departure}&date=${formatDate(startDate)}`);
	}
	let day = style.day

	return (
		<form className={style.flightsSearch}>
			<SearchInput
				value={searchParam.departure}
				placeholder="Откуда"
				name='departure'
				onChange={onChange}
				fetch={fetchParkCar}
				
			>
					<Prompt/>
			</SearchInput>
			<SearchInput 
				value={searchParam.arrival}
				placeholder="Куда"
				name='arrival'
				onChange={onChange}
				fetch={fetchParkCar}
			>		
				<Prompt/>
			</SearchInput>
			<div className={style.calendar}>
				<DatePicker 
					selected={startDate} 
					onChange={(date) => setStartDate(date)}
					isClearable
					minDate={new Date()}
					dateFormat="dd.MM.yyyy"
					placeholderText="Дата"
					className={style.calendar_input}
					calendarClassName={style.calendar_window}
					// monthClassName={() => 'fmonth'}
					dayClassName={() => day}
					/>
			</div>
			<MyButton onClick={send} name='Найти билет'/>
			{/* <MyInput placeholder="1 пс"/> */}
		</form>
	)
} 

export default FlightsSearch