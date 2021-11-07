import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Calendar.scss";

interface CalendarProps{
	startDate: Date | null | undefined;
	setStartDate: any;
}

const Calendar:React.FC<CalendarProps> = ({startDate, setStartDate}) => {

	// const weekdays = ['Пн', 'Вт', 'Ср', 'ЧТ', 'Пт', 'Сб', 'Вс']

	return (
		<div className="calendar">
				<DatePicker 
					selected={startDate} 
					onChange={(date) => setStartDate(date)}
					isClearable
					minDate={new Date()}
					dateFormat="dd.MM.yyyy"
					placeholderText="Дата"
					className="calendar__input"
					calendarClassName="calendar__window"
					dayClassName={() => "calendar__day"}
					/>
			</div>
	)
}

export default Calendar