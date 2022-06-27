import React, {useState} from 'react';
import Modal from 'react-modal';
import Icon from '../ui-components/Icon';
import '../images/icons/arrow-right-light-icon.svg';
import {TariffSelection} from './TariffSelection';

const TariffSelectionModal = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const toggleModal = () => {
		setIsModalOpen(isModalOpen => !isModalOpen);
	}
	
	return (
		<>
			<button className="btn btn-default btn-main-buy btn-with-icon" onClick={toggleModal}>Купить сейчас <Icon glyph="arrow-right-light-icon" className="icon-right" /></button>
			<Modal 
				isOpen={isModalOpen}
				onRequestClose={toggleModal}
				toggle={toggleModal}
				ariaHideApp={false}
				overlayClassName="modal-overlay"
				className="modal-open">
				<button onClick={toggleModal} className="modal-close"></button>
				<TariffSelection/>
			</Modal>
		</>
	);
}

export {TariffSelectionModal}