import React from "react";
import MyButton from "../../../components/Button/Button";
import './FlightPrompt.scss';

interface FlightPromptProps{
	selectPlace: number[];
	onClickHandler: any;
}

const FlightPrompt:React.FC<FlightPromptProps> = ({selectPlace, onClickHandler}) => {
	
	return (
		<div className="flight_prompt">
			<h3>
				{selectPlace.length === 0 ? 'Не выбрано место' : selectPlace.length === 1 ? 'Выбрано место ' : 'Выбраны места '}
				{selectPlace.map((seat, index) => <span key={index}>{seat}</span>)}
			</h3>
			<span>Для продождения покупки нужно нажать на кнопу «Продожить покупку» и ввести персональные данные.</span>
			<MyButton name="Продолжить покупку" onClick={onClickHandler} className="flight_prompt__button"/>
		</div>
	)
}

export default FlightPrompt