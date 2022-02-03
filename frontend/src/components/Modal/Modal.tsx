import React from "react";
import './Modal.scss';


interface ModalProps{
	setVisible: any;
	children: any;
}

const Modal:React.FC<ModalProps> = ({setVisible, children}) => {
	const onClikClose = (e: any) => {
		if (e.target.dataset.close)
			setVisible(false)
	}

	return(
		<div className="modal">
			<div data-close="1" onClick={onClikClose} className="modal_overlay">
				<div className="modal_window">
					<span data-close="1" className="modal__close">&times;</span>
							{
								children
							}
				</div>
			</div>
		</div>
	)
}

export default Modal