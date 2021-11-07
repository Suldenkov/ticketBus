import React, { useState } from "react";
import Modal from "../../components/Modal/Modal";
import Main from "./Main/Main";
// import style from './Home.module.scss'
import Top from "./Top/Top";

const HomePage:React.FC = () => {
	const [modalVisible, setModalVisible] = useState<boolean>(false)

	return (
		<div className="home_page">
			<Top setVisible={setModalVisible}/>
			<Main/>
			{
				modalVisible === true
				?
				<Modal setVisible={setModalVisible}/>
				:
				<></>
			}
		</div>
	)
}

export default HomePage