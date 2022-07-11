import React from 'react';
import './styles/payment-methods.less';
import './images/payment-methods/litecoin.png';
import './images/payment-methods/bitcoin.png';
import './images/payment-methods/ogecoin.png';
import './images/payment-methods/qiwi.png';
import './images/payment-methods/visa.png';
import './images/payment-methods/payeer.png';
import './images/payment-methods/webmoney.png';
import './images/payment-methods/robokassa.png';
import './images/payment-methods/perfect-money.png';

const PaymentMethods = () => {
	return (
		<div className="balance-payment-method-wrapper">
			<div className="payment-method-item">
				<img src="../../dist/images/visa.png" />
			</div>
			<div className="payment-method-item">
				<img src="../../dist/images/webmoney.png" />
			</div>
			<div className="payment-method-item">
				<img src="../../dist/images/qiwi.png" />
			</div>
			<div className="payment-method-item">
				<img src="../../dist/images/robokassa.png" />
			</div>
			<div className="payment-method-item">
				<img src="../../dist/images/payeer.png" />
			</div>
			<div className="payment-method-item">
				<img src="../../dist/images/perfect-money.png" />
			</div>
			<div className="payment-method-item">
				<img src="../../dist/images/bitcoin.png" />
			</div>
			<div className="payment-method-item">
				<img src="../../dist/images/litecoin.png" />
			</div>
			<div className="payment-method-item">
				<img src="../../dist/images/ogecoin.png" />
			</div>
		</div>
	);
}

export {PaymentMethods}