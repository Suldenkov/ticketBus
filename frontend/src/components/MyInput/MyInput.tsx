import React from "react";
import style from './MyInput.module.scss';

interface MyInputProps{
	placeholder: string;
	value:string;
	onChange?: any;
	name: string;
	focusControl?:any;
}

const MyInput:React.FC<MyInputProps> = ({placeholder, value, onChange, name, focusControl}) =>{

	return (
		<div className={style.input}>
			<input
			value={value}
			name={name}
			onFocus={focusControl}
			onBlur={focusControl}
			onChange={onChange}
			placeholder={placeholder}
			className={style.search}
			type="text"
			autoComplete="off"/>
		</div>
	)
}

export default MyInput