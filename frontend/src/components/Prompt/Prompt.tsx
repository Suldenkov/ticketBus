import React from "react";
import { useTypeSelector } from '../../hooks/useTypeSelector';
import style from './Prompt.module.scss';


interface PromptProps{
	content?:string;
}

const Prompt: React.FC<PromptProps> = ({content}) => {
	const {parks} = useTypeSelector(state => state.park)
	
	return (
			<ul className={style.list}>
				{
					parks.map((elem) => <li className={style.li} key={elem.id}>{elem.city}</li>)
				}
			</ul>
	)
}

export default Prompt