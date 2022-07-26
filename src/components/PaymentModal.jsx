import React, {useState} from 'react';
import Modal from 'react-modal';
import Icon from '../ui-components/Icon';
import '../images/icons/arrow-right-light-icon.svg';
import './styles/payment-modal.less';
import {ExchangeRates} from './ExchangeRates';
import {PaymentMethods} from './PaymentMethods';
import {PaymentSuccess} from "./PaymentSuccess";

const PaymentModal = () => {
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
				className="modal-open payment-modal">
				<button onClick={toggleModal} className="modal-close"></button>
				
				<div className="payment-data-wrapper">
					<h5 className="payment-data-title">Оплата прокси</h5>
					<div className="payment-data-item">
						<p className="payment-data-item-label">Номер заказа</p>
						<p className="payment-data-item-value">98461984</p>
					</div>
					<div className="payment-data-item">
						<p className="payment-data-item-label">Дата заказа</p>
						<p className="payment-data-item-value">2017-10-04 12:37:44</p>
					</div>
					<div className="payment-data-item">
						<p className="payment-data-item-label">Тип заказа</p>
						<p className="payment-data-item-value">Покупка прокси</p>
					</div>
					<div className="payment-data-item">
						<p className="payment-data-item-label">Кол-во IP</p>
						<p className="payment-data-item-value">1</p>
					</div>
					<div className="payment-data-item">
						<p className="payment-data-item-label">Кол-во дней</p>
						<p className="payment-data-item-value">30</p>
					</div>
					<div className="payment-data-item">
						<p className="payment-data-item-label">Тип прокси</p>
						<p className="payment-data-item-value">
							<label className="radio-label">
								<input
									type="radio"
									defaultChecked="true"
									className="radio-input form-check-input"
								/>
								<span className="radio-input-icon"></span>
								HTTP(s)
							</label>
							<label className="radio-label">
								<input
									type="radio"
									className="radio-input form-check-input"
								/>
								<span className="radio-input-icon"></span>
								SOCKS5
							</label>
							<p className="help-text">Тип прокси можно будет изменить в личном кабинете после покупки</p>
						</p>
					</div>
					
					<div className="payment-data-divider"></div>
					<div className="payment-discount-block payment-data-item">
						<p className="payment-data-item-label">Купон на скидку</p>
						<input className="form-control payment-discount-value" />
					</div>
					<div className="payment-data-divider"></div>
					
					<div className="payment-data-item">
						<p className="payment-data-item-label">Сумма заказа</p>
						<p className="payment-data-item-value">69,9 ₽</p>
					</div>
					
					<p className="payment-data-method-title">Выберите способ оплаты</p>
					<ExchangeRates />
					<PaymentMethods />
					<div className="payment-data-divider"></div>
					
					<button className="btn btn-primary btn-pay">Перейти к оплате</button>
					{/*<PaymentSuccess />*/} 
				</div>
			</Modal>
		</>
	);
}

export {PaymentModal}