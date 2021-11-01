import React from "react";
import MyButton from "../Button/Button";
import MyInput from "../MyInput/MyInput";

const FlightsSearch: React.FC = () => {
	return (
		<>
			<MyInput value="Откуда"/>
			<MyInput value="Куда"/>
			<MyInput value="Дата"/>
			<MyInput value="1 пс"/>
			<MyButton name='Найти билет'/>
		</>
	)
}

export default FlightsSearch