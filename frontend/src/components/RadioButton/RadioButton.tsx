import React, { useState } from "react";
import './RadioButton.scss';

interface RadioButtonProps{
	options: any[];
	name: string;
	className?:string;
	id:number;
	register: any;
}

const RadioButton: React.FC<RadioButtonProps> = ({options, name, className='', id, register}) => {
	const [active, setActive] = useState('');
	const onChangeValue = (e: any) => {
		setActive(e.target.value)
  }

	return (
		<div className={`radio ${className}`} onChange={onChangeValue}>
				{
					options.map((option, index) =>
						<div key={index} className="radio_element">
							<label className={`radio_label ${option.text === active ? 'radio_active' : ''}`}>
								<span className="radio_text">{option.text}</span>
								<input {...register(`tickets.${id}.${name}`, { required: true})} value={option.text} type="radio" className="radio_input"/>
							</label>
						</div>
					)
				}
		</div>
	)
}

export default RadioButton