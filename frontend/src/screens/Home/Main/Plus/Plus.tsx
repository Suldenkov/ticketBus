import React from "react";
import style from "./Plus.module.scss";

interface IPlusProps{
	img: any;
	content: string;
	title: string;
}

const Plus:React.FC<IPlusProps> = ({img, content, title}) =>{
	return (
		<div className={style.plus}>
			<img className={style.img} src={img} alt="" />
			<div className={style.title}>
				<h3>
					{title}
				</h3>
			</div>
			<div className={style.content}>
				{content}
			</div>
		</div>
	)
}

export default Plus