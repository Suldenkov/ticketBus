import React from "react";
import MyButton from "../Button/Button";
import MyInput from "../MyInput/MyInput";
import style from './FlightsSearch.module.scss';

const FlightsSearch: React.FC = () => {
	return (
		<div className={style.flightsSearch}>
			<MyInput value="Откуда"/>
			<MyInput value="Куда"/>
			<MyInput value="Дата"/>
			<MyInput value="1 пс"/>
			<MyButton name='Найти билет'/>
		</div>
	)
}

export default FlightsSearch