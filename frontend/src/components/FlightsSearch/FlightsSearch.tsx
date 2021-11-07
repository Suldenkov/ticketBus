import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import MyButton from "../Button/Button";

import Prompt from "../Prompt/Prompt";
import { formatDate } from "../../utils/formatDate";
import './FlightsSearch.scss';

import {useDispatch} from 'react-redux';
import { fetchParkCar } from "../../store/action-creator/ParkCar";
import SearchInput from "../SearchInput/SearchInput";
import Calendar from "../Calendar/Calendar";

const FlightsSearch: React.FC = (props) => {
	
	const [startDate, setStartDate] = useState<Date | null>(null);
	const [searchParam, setSearchParam] = useState({arrival: '', departure: ''})
	let history = useHistory();
	const dispatch = useDispatch()

	const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
		dispatch(fetchParkCar(e.target.value))
		setSearchParam({...searchParam, [e.target.name]: e.target.value})
	}

	const onClickItem = (value: string, name:string) => {
		dispatch(fetchParkCar(value))
		setSearchParam({...searchParam, [name]: value})
	}

	const send = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault()
		history.push(`/flights?arrival=${searchParam.arrival}&departure=${searchParam.departure}&date=${formatDate(startDate)}`);
	}

	// useEffect(() => {
	// 	window.addEventListener('click', (e:any) => {
	// 		console.log(e.target)
	// 	});
	// }, [])

	return (
		<form className="flights_search">
			<SearchInput
				value={searchParam.departure}
				placeholder="Откуда"
				name='departure'
				onChange={onChange}
				fetch={fetchParkCar}
				setValue={onClickItem}
			>
				<Prompt/>
			</SearchInput>
			<SearchInput 
				value={searchParam.arrival}
				placeholder="Куда"
				name='arrival'
				onChange={onChange}
				fetch={fetchParkCar}
				setValue={onClickItem}
			>		
				<Prompt/>
			</SearchInput>
			<Calendar setStartDate={setStartDate} startDate={startDate}/>
			<MyButton onClick={send} name='Найти билет' className="flights_search_component"/>
			{/* <MyInput placeholder="1 пс"/> */}
		</form>
	)
} 

export default FlightsSearch