import React, {useState} from 'react';
import Modal from 'react-modal';
import Icon from '../ui-components/Icon';
import './styles/payment-modal.less';
import { NavLink } from 'react-router-dom';

const PaymentSuccess = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const toggleModal = () => {
		setIsModalOpen(isModalOpen => !isModalOpen);
	}
	
	return (
		<>
			<button className="btn btn-primary btn-buy btn-with-icon" onClick={toggleModal}>Купить сейчас <Icon glyph="arrow-right-light-icon" className="icon-right" /></button>
			<Modal 
				isOpen={isModalOpen}
				onRequestClose={toggleModal}
				toggle={toggleModal}
				ariaHideApp={false}
				overlayClassName="modal-overlay"
				className="modal-open">
				
				<div className="payment-success-wrapper">
					<div className="payment-success-icon"></div>
					<p className="payment-success-title">Оплата проведена успешно</p>
					<p className="payment-success-desc">Вы сделали заказ на оплату 3 прокси на 30 дней. Сумма заказа 69.90 ₽</p>
					
					<div className="payment-success-actions">
						<NavLink className="btn btn-primary" to="/proxy">Перейти к просмотру прокси</NavLink>
						<button className="btn btn-default" onClick={toggleModal}>Закрыть окно</button>
					</div>
				</div>
			</Modal>
		</>
	);
}

export {PaymentSuccess}