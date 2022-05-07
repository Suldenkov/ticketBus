import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import MyButton from "../Button/Button";
import Prompt from "../Prompt/Prompt";
import { formatDate } from "../../utils/formatDate";
import './FlightsSearch.scss';
import {useDispatch} from 'react-redux';
import { fetchParkCar } from "../../store/action-creator/parkCar";
import SearchInput from "../SearchInput/SearchInput";
import Calendar from "../Calendar/Calendar";
import {Formik} from 'formik'
import * as Yup from 'yup';

// import Select from 'react-select';

interface SearchFormValues {
	departure: string; 
	arrival: string;
	calendar: null | Date;
}

const SearchFormShema = Yup.object().shape({
	departure: Yup.string()
		.required('Обязательно для заполнения'),
		arrival: Yup.string()
		.required('Обязательно для заполнения'),
		calendar: Yup.mixed().required('Обязательно для заполнения'),
});

const FlightsSearch: React.FC = (props) => {
	
	const initialValues: SearchFormValues = { departure: '', 	arrival: '', calendar: null};
	let history = useHistory();
	const dispatch = useDispatch()

	const send = (val:any) => {
		history.push(`/flights?arrival=${val.arrival}&departure=${val.departure}&date=${formatDate(val.calendar)}`);
	}

	useEffect(() => {
		dispatch(fetchParkCar(''))
	}, [dispatch])


	return (
			<Formik
				initialValues={initialValues}
				validationSchema={SearchFormShema}
				onSubmit={values => send(values)}
			>
				{({errors,touched, handleSubmit}: any) => (
					<div className="flights_search">
						<div className="">
							<SearchInput
							placeholder="Откуда"
							name='departure'
							fetch={fetchParkCar}
							>
								<Prompt/>
							</SearchInput>
							{errors.departure && touched.departure ? (
							<div className="flights_search__error">{errors.departure}</div>
						) : null}
						</div>
						<div className="">
							<SearchInput 
							placeholder="Куда"
							name='arrival'
							fetch={fetchParkCar}
							>		
							<Prompt/>
							</SearchInput>
							{errors.arrival && touched.arrival ? (
							<div className="flights_search__error">{errors.arrival}</div>
						) : null}
						</div>
						<div className="">
							<Calendar name="calendar"/>
							{errors.calendar && touched.calendar ? (
							<div className="flights_search__error">{errors.calendar}</div>
						) : null}
						</div>
						<MyButton onClick={handleSubmit} name='Найти билет' className="flights_search__button"/>
					</div>
				)}
			</Formik>
	)
} 

export default FlightsSearch