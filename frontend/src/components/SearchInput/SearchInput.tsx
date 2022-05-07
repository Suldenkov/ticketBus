import React, { useState } from "react";
import MyInput from "../MyInput/MyInput";
import {useDispatch} from 'react-redux';
import './SearchInput.scss';
import { useField, useFormikContext } from "formik";
import { fetchParkCar } from "../../store/action-creator/parkCar";

interface SearchInputProps{
	fetch?: any;
	placeholder: string;
	name: string;
}

const SearchInput:React.FC<SearchInputProps> = ({fetch, children, ...props}) => {
	const dispatch = useDispatch()
	const [focus, setFocus] = useState<boolean>(false)

	const { values, setFieldValue }:any = useFormikContext();
  const [field] = useField(props);

	const focusControl = () => {
		if (focus === false && fetch){
			dispatch(fetch(values[field.name]))
			setFocus((prevState) => !prevState)
		}
		else
			setTimeout(() => setFocus((prevState) => !prevState), 100)
	}

	const onClickItem = (e: any) => {
		if (e.target.dataset.prompt){
			setFieldValue(field.name, e.target.textContent)
		}
	}

	const change = (e: any) => {
		dispatch(fetchParkCar(e.target.value))
		setFieldValue(field.name, e.target.value)
	}

	return (
		<div className="search_input_container" onClick={onClickItem}>
			<MyInput value={values[field.name]} onChange={change} {...props} focusControl={focusControl} className="search_input"/>
			{focus ?
			children
		: <></>}
		</div>
	)
}

export default SearchInput