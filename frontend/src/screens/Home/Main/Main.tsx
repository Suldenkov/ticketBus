import React from "react";
import clockImg from "./../../../imgs/plus_clock.svg";
import lockImg from "./../../../imgs/plus_reliability.svg";
import cardImg from "./../../../imgs/plus_security.svg";
import ticketImg from "./../../../imgs/plus_web.svg";
import Plus from "./Plus/Plus";
import './Main.scss';

const Main:React.FC = () => {
	const content = [
		{id: 1, img: lockImg, content: 'С вами работают только лучшие перевозчики отобраные лично нами', title: 'Надежные перевозчики'},
		{id: 2, img: cardImg, content: 'Гарантируется защита данных пользователя при проведение всех операций', title: 'Безопасная оплата'},
		{id: 3, img: ticketImg, content: 'Быстрое оформление возврата в личном кабинете', title: 'Возврат билетов'},
		{id: 4, img: clockImg, content: 'Возможность в любой момент за пару минут оформить биллет находясь где угодно', title: 'Быстрая и комфортная покупка биллетов'}
	]

	return (
		<main className="main">
			{
				content.map((elem) => <Plus key={elem.id} img={elem.img} content={elem.content} title={elem.title}/>)
			}
		</main>
	)
}

export default Main