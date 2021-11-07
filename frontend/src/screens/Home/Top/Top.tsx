import React from "react";
import Header from "../Header/Header";
import SearchForm from '../SearchForm/SearchForm';
import img from './../../../imgs/topscreen.jpg';
import style from './Top.module.scss';

interface TopProps{
	setVisible: any;
}

const Top:React.FC<TopProps> = ({setVisible}) => {

	return (
		<div className={style.top} style={{backgroundImage: `url(${img})`}}>
			<div className={style.inner}>
				<Header setVisible={setVisible}/>
				<div className={style.title}>
					<h1>Билеты на любой автобус по России и Европе</h1>
				</div>
				<SearchForm/>
			</div>
		</div>
	)
}

export default Top