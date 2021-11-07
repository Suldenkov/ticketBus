import React from "react";
import { useTypeSelector } from '../../hooks/useTypeSelector';
import style from './Prompt.module.scss';


interface PromptProps{
	setValue?: any;
	name?: string;
}

const Prompt: React.FC<PromptProps> = ({setValue, name}) => {
	const {parks} = useTypeSelector(state => state.park)
	

	return (
			<ul className={style.list}>
				{
					parks.map((elem) => <li data-prompt='1' className={style.li} key={elem.id} value={elem.city}>{elem.city}</li>)
				}
			</ul>
	)
}

export default Prompt