import React from "react";
import './MySelect.scss';

interface MyCheckboxProps{
	options: any[];
	name: string;
	className?:string;
}

const MyCheckbox: React.FC<MyCheckboxProps> = ({options, name, className=''}) => {
	const onChangeValue = (e: any) => {
    console.log(e.target.value);
  }

	return (
		<div className={`checkbox ${className}`} onChange={onChangeValue}>
				{
					options.map((option, index) =>
						<div key={index} className="radio_element">
							<input id={`radio${name}_${index}`} name={name} value={option.text} type="radio" className="checkbox_input"/>
							<label htmlFor={`radio${name}_${index}`} className="checkbox_label">
								<span className="checkbox_text">{option.text}</span>
							</label>
						</div>
					)
				}
		</div>
	)
}

export default MyCheckbox