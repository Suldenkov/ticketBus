import React, { useState } from "react";
import MyInput from "../MyInput/MyInput";
import {useDispatch} from 'react-redux';
import './SearchInput.scss';

interface SearchInputProps{
	fetch?: any;
	value: string;
	placeholder: string;
	name: string;
	onChange:any;
	setValue: any;
}

const SearchInput:React.FC<SearchInputProps> = ({fetch, children, setValue, ...props}) => {
	const dispatch = useDispatch()
	const [focus, setFocus] = useState<boolean>(false)

	const focusControl = () => {
		if (focus === false && fetch){
			dispatch(fetch(props.value))
			setFocus((prevState) => !prevState)
		}
		else
			setTimeout(() => setFocus((prevState) => !prevState), 100)
	}

	const onClickItem = (e: any) => {
		if (e.target.dataset.prompt){
			setValue(e.target.textContent, props.name)
		}
	}


	return (
		<div className="search_input_container" onClick={onClickItem}>
			<MyInput {...props} focusControl={focusControl} className="search_input"/>
			{focus ?
			children
		: <></>}
		</div>
	)
}

export default SearchInput