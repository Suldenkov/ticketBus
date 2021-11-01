import React, { useState } from "react";
import style from './MyInput.module.scss';

interface IMyInputProps{
	value: string
}
const MyInput:React.FC<IMyInputProps> = ({value}) =>{
	const [content, setContent] = useState('');

	const onChange = (e:React.ChangeEvent<any>) => {
		setContent(e.target.value)
	}
	return (
		<input
		value={content}
		onChange={onChange}
		placeholder={value}
		className={style.search}
		type="text" />
	)
}

export default MyInput