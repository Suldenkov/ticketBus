import React, { useState } from "react";
import style from './MyInput.module.scss';

import {useDispatch} from 'react-redux';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { fetchParkCar } from "../../store/action-creator/ParkCar";

interface IMyInputProps{
	value: string
}

const MyInput:React.FC<IMyInputProps> = ({value}) =>{
	const [content, setContent] = useState<string>('');

	const dispatch = useDispatch()
	const {parks} = useTypeSelector(state => state.park)
	const [focus, setFocus] = useState(false);

	const onFocus = () => {
		dispatch(fetchParkCar(content))
		setFocus(true)
	}

	const onChange = async(e: React.ChangeEvent<HTMLInputElement>) =>{
		setContent(e.target.value)
		dispatch(fetchParkCar(e.target.value))
	}

	return (
		<div className={style.input}>
			<input
			value={content}
			onFocus={onFocus}
			onBlur={() => setFocus(false)}
			onChange={onChange}
			placeholder={value}
			className={style.search}
			type="text" />
			{
				focus ?
					<ul className={style.list}>
						{
							parks.map((elem) => <li className={style.li} key={elem.id}>{elem.city}</li>)
						}
					</ul>
				:
					<></>
			}
		</div>
	)
}

export default MyInput