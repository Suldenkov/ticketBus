import React from "react";
import './MyInput.scss';

interface MyInputProps{
	placeholder: string;
	value:string;
	onChange?: any;
	name: string;
	focusControl?:any;
	className?:string | undefined
	type?:string | undefined
}

const MyInput:React.FC<MyInputProps> = ({placeholder, value, onChange, name, focusControl, className, type='text'}) =>{

	return (
		<div className={className ? `my_input_container ${className}` : 'my_input_container'}>
			<input
			value={value}
			name={name}
			onFocus={focusControl}
			onBlur={focusControl}
			onChange={onChange}
			placeholder={placeholder}
			className="my_input"
			type={type}
			autoComplete="off"/>
		</div>
	)
}

export default MyInput