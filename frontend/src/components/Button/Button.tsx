import React from "react";
import './Button.scss';

interface IMyButtonProps{
	name: string;
	onClick: any;
}

const MyButton: React.FC<IMyButtonProps> = ({name, onClick}) =>{
	return (
		<button onClick={onClick} className='button'>{name}</button>
	)
}

export default MyButton