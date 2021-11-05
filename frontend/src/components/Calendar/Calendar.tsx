import React from "react";
import style from "./Calendar.module.scss";

const Calendar:React.FC =  () => {

	const weekdays = ['Пн', 'Вт', 'Ср', 'ЧТ', 'Пт', 'Сб', 'Вс']

	return (
		<div className={style.calendar}>
			<div className={style.month}>
				<div className={style.weekdays}>
					{
						weekdays.map((weekday, id) => <div key={id} className={style.weekday}>{weekday}</div>)
					}
				</div>
				<div className="body">

				</div>
			</div>
		</div>
	)
}

export default Calendar