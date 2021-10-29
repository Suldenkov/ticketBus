import React from 'react';
import style from './FlightsFilter.module.scss';

const FlightsFilter: React.FC = () =>{
	return (
		<div className={style.filter}>
			<span className={style.time__title}>Отправление</span>
			<span className={style.time__title}>Прибытие</span>
			<span className={style.price__title}>В пути</span>
			<span className={style.grap__title}>Цена от</span>
		</div>
	)
}

export default FlightsFilter