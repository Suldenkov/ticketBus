import React, { forwardRef } from "react";
import './MyInput.scss';

interface MyInputProps{
	placeholder?: string;
	value?:string;
	onChange?: any;
	name?: string;
	focusControl?:any;
	className?:string | undefined;
	type?:string | undefined;
}

const MyInput = forwardRef<any, MyInputProps>(({placeholder, value, onChange, name, focusControl, className, type='text'}, ref) =>{

	return (
		<div className={className ? `input__container ${className}` : 'input__container'}>
			<input
			value={value}
			name={name}
			onFocus={focusControl}
			onBlur={focusControl}
			onChange={onChange}
			placeholder={placeholder}
			className="input"
			type={type}
			autoComplete="off"
			ref={ref}
			/>
		</div>
	)
})

export default MyInput