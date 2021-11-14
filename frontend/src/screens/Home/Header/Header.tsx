import React from "react";
import style from './Header.module.scss';
import img from './../../../imgs/logoBus.svg';
import {Link} from 'react-router-dom'

interface HeaderProps{
	setVisible: any;
}

const Header:React.FC<HeaderProps> = ({setVisible}) => {

	return (
		<header className={style.header}>
			<Link to='/'>
				<img className={style.logo} src={img} alt="" />
			</Link>
			<div className={style.info} onClick={() => setVisible(true)}>
				<svg width="16" height="16" viewBox="0 0 16 16" fill="#F9253F" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M8 7.78c2.095 0 3.793-1.742 3.793-3.89C11.793 1.74 10.095 0 8 0S4.207 1.741 4.207 3.89c0 2.148 1.698 3.89 3.793 3.89zm0-1.203c-1.447 0-2.62-1.203-2.62-2.687 0-1.485 1.173-2.688 2.62-2.688s2.62 1.203 2.62 2.688c0 1.484-1.173 2.687-2.62 2.687z"></path><path d="M15 13.755v1.644a.594.594 0 0 1-.586.601.594.594 0 0 1-.586-.601v-1.644c0-1.485-1.174-2.688-2.621-2.688H4.793c-1.447 0-2.62 1.204-2.62 2.688v1.644a.594.594 0 0 1-.587.601.594.594 0 0 1-.586-.601v-1.644c0-2.149 1.698-3.89 3.793-3.89h6.414c2.095 0 3.793 1.742 3.793 3.89z"></path></svg>
				<span>Личный кабинет</span>
			</div>
		</header>
	)
}

export default Header