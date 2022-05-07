import React from "react";
import './Button.scss';

interface IMyButtonProps{
	name: string;
	onClick: any;
	// type?: string;
	className?:string | undefined;
}

const MyButton: React.FC<IMyButtonProps> = ({name, onClick, className}) =>{
	return (
		<button type="submit" onClick={onClick} className={className ? `button ${className}` : 'button'}>{name}</button>
	)
}

export default MyButton