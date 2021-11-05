import React, { useState } from "react";
import MyInput from "../MyInput/MyInput";
import {useDispatch} from 'react-redux';
import style from './SearchInput.module.scss';

interface SearchInputProps{
	fetch?: any;
	value: string;
	placeholder: string;
	name: string;
	onChange:any;
}

const SearchInput:React.FC<SearchInputProps> = ({fetch, children, ...props}) => {
	const dispatch = useDispatch()
	const [focus, setFocus] = useState<boolean>(false)

	const focusControl = () => {
		if (focus === false && fetch)
			dispatch(fetch(props.value))
		setFocus((prevState) => !prevState);
	}

	return (
		<div className={style.searchinput}>
				<MyInput {...props} focusControl={focusControl}/>
				{focus ? children : <></>}
		</div>
	)
}

export default SearchInput