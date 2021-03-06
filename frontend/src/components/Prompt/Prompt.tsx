import React from "react";
import { useTypeSelector } from '../../hooks/useTypeSelector';
import Loader from "../Loader/Loader";
import style from './Prompt.module.scss';


interface PromptProps{
	setValue?: any;
	name?: string;
}

const Prompt: React.FC<PromptProps> = ({setValue, name}) => {
	const {loading, parks} = useTypeSelector(state => state.park)
	

	return (
			<ul className={style.list}>
				{
					loading
					?
						<Loader/>
					:
						parks.map((elem) => <li className={style.li} key={elem.id}><div data-prompt='1'>{elem.city}</div></li>)
				}
			</ul>
	)
}

export default Prompt