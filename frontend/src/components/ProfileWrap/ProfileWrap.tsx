import React from 'react';
import Sign from "./Sing/Sign";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './ProfileWrap.scss'
import Register from './Register/Register';

interface IProfileWrapProps{
	setModalVisible: any
}

const ProfileWrap:React.FC<IProfileWrapProps> = ({setModalVisible}) => {
	return (
		<Tabs className='tab'>
			<TabList className="tab_list">
				<Tab className="tab_title" selectedClassName="tab_title__active">Вход</Tab>
				<Tab className="tab_title" selectedClassName="tab_title__active">Регистрация</Tab>
				
			</TabList>

			<TabPanel>
				<Sign setVisible={setModalVisible}/>
			</TabPanel>
			<TabPanel>
				<Register setModalVisible={setModalVisible}/>
			</TabPanel>
		</Tabs>
	)
	
}

export default ProfileWrap;
