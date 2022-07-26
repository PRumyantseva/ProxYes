import React from 'react';
import './styles/exchange-rates.less';

const ExchangeRates = () => {
	return (
		<div className="exchange-rates-block">
			<div className="exchange-rates-inner">
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
			</div>
			<div className="exchange-rates-inner">
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
	);
}

export {ExchangeRates}