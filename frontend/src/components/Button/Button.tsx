import React from "react";
import './Button.scss';

interface IMyButtonProps{
	name: string;
}

const MyButton: React.FC<IMyButtonProps> = ({name}) =>{
	return (
		<button className='button'>{name}</button>
	)
}

export default MyButton