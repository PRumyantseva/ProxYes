import React, { useState, useEffect } from 'react';
import {PrivateMenu} from '../components/PrivateMenu';
import './styles/balance.less';
import {PaymentMethods} from '../components/PaymentMethods';

const Balance = () => {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);

	// async function getCurrencies () {
	// 	const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
	// 	const data = await response.json();
	// 	const result = await data;
	// 	setItems(result);
	// }
	// getCurrencies();
	
	// useEffect(() => {
	// 	fetch("https://www.cbr-xml-daily.ru/daily_json.js")
	// 		.then(res => res.json())
	// 		.then(
	// 			(result) => {
	// 				setIsLoaded(true);
	// 				setItems(result);
	// 			},
	// 			(error) => {
	// 				setIsLoaded(true);
	// 				setError(error);
	// 			}
	// 		)
	// }, [])
	
	
	return (
		<div className="private-wrapper">
			<div className="container">
				<div className="private-container">
					<PrivateMenu />
					<div className="private-content">
						<div className="balance-title">Баланс <span className="balance-title-sum">0.00 ₽</span></div>
						<div className="balance-agreement-block">
							<label className="checkbox-label">
								<input
									type="checkbox"
									className="checkbox-input form-check-input"
								/>
								<span className="checkbox-input-icon"></span>
								<span>Я прочитал <a href="#">FAQ</a>. Я знаю, что покупаю и согласен с <a href="#">условиями использования</a>.</span>
							</label>
						</div>
						
						<h6 className="balance-subtitle">Способ оплаты</h6>
						<PaymentMethods />

						<h6 className="balance-subtitle">Курс валют</h6>
						<div className="exchange-rates-block">
							<div className="exchange-rates-item">
								<span className="currency">1 USD</span>
								<span className="divider">=</span>
								<span>61.61 ₽</span>
							</div>
							<div className="exchange-rates-item">
								<span className="currency">1 BTC</span>
								<span className="divider">=</span>
								<span>1996495 ₽</span>
							</div>
							<div className="exchange-rates-item">
								<span className="currency">1 LTC</span>
								<span className="divider">=</span>
								<span>4331.22 ₽</span>
							</div>
							<div className="exchange-rates-item">
								<span className="currency">1 DOGE</span>
								<span className="divider">=</span>
								<span>5.49 ₽</span>
							</div>
							
						</div>
						
					</div>
				</div>
			</div>
		</div>
	);
}

export {Balance}