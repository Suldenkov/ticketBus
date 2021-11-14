import React from "react";
import  './Header.scss';
import lightImg from './../../imgs/logoBus.svg'
import darkImg from './../../imgs/logoBusDark.svg'
import {Link} from 'react-router-dom'

interface HeaderProps{
	setVisible?: any;
	theme?: string;
}

const Header:React.FC<HeaderProps> = ({setVisible = null, theme = 'light'}) => {
	const changeEventClik = () => {
		if (setVisible)
			setVisible(true)
	}

	return (
		<header className="header">
			<Link to='/'>
				<img className="logo" src={theme === 'dark' ? darkImg : lightImg} alt="" />
			</Link>
			<div className={`header_info ${theme}`} onClick={changeEventClik}>
				{
					theme === 'dark'
					?
					<svg width="23" height="23" data-name="Design Convert" id="Design_Convert" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><defs></defs><title/><path d="M55,28H34a1,1,0,0,1,0-2H55a1,1,0,0,1,0,2Z"/><path d="M28,57a1,1,0,0,1-.45-.11L8.66,47.45A3,3,0,0,1,7,44.76V10a3,3,0,0,1,3-3h9a1,1,0,0,1,0,2H11.34l17.09,8.1A1,1,0,0,1,29,18V56a1,1,0,0,1-.47.85A1,1,0,0,1,28,57ZM9,10.11V44.76a1,1,0,0,0,.55.9L27,54.38V18.63Z"/><path  d="M47,37a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42L54.59,27l-8.3-8.29a1,1,0,0,1,1.42-1.42l9,9a1,1,0,0,1,0,1.42l-9,9A1,1,0,0,1,47,37Z"/><path d="M37,47H28a1,1,0,0,1,0-2h9a1,1,0,0,0,1-1V36a1,1,0,0,1,2,0v8A3,3,0,0,1,37,47Z"/><path d="M39,19a1,1,0,0,1-1-1V10a1,1,0,0,0-1-1H15a1,1,0,0,1,0-2H37a3,3,0,0,1,3,3v8A1,1,0,0,1,39,19Z"/></svg>
					:
					<svg width="16" height="16" viewBox="0 0 16 16" fill="#F9253F" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M8 7.78c2.095 0 3.793-1.742 3.793-3.89C11.793 1.74 10.095 0 8 0S4.207 1.741 4.207 3.89c0 2.148 1.698 3.89 3.793 3.89zm0-1.203c-1.447 0-2.62-1.203-2.62-2.687 0-1.485 1.173-2.688 2.62-2.688s2.62 1.203 2.62 2.688c0 1.484-1.173 2.687-2.62 2.687z"></path><path d="M15 13.755v1.644a.594.594 0 0 1-.586.601.594.594 0 0 1-.586-.601v-1.644c0-1.485-1.174-2.688-2.621-2.688H4.793c-1.447 0-2.62 1.204-2.62 2.688v1.644a.594.594 0 0 1-.587.601.594.594 0 0 1-.586-.601v-1.644c0-2.149 1.698-3.89 3.793-3.89h6.414c2.095 0 3.793 1.742 3.793 3.89z"></path></svg>
				}
				<span>Личный кабинет</span>
			</div>
		</header>
	)
}

export default Header