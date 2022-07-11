import React from 'react';
import {PrivateMenu} from '../components/PrivateMenu';

const Payments = () => {
	const PaymentData = [
		{
			id: 98461984,
			date: '16.05.22 13:05',
			sum: '400.00',
			method: 'CARD'
		},
		{
			id: 98461443,
			date: '16.05.22 13:05',
			sum: '400.00',
			method: 'QIWI'
		},
		{
			id: 984613534,
			date: '16.05.21 14:05',
			sum: '400.00',
			method: 'CARD'
		},
		{
			id: 9844,
			date: '13.12.20 09:05',
			sum: '800.00',
			method: 'Robokassa'
		},
		{
			id: 98461984,
			date: '02.05.21 13:05',
			sum: '900.00',
			method: 'QIWI'
		},
		{
			id: 98461984,
			date: '16.05.22 13:05',
			sum: '400.00',
			method: 'CARD'
		},
	];
	return (
		<div className="private-wrapper">
			<div className="container">
				<div className="private-container">
					<PrivateMenu />
					<div className="private-content">
						<div className="table-wrap payment-table-wrap">
							<div className="private-header">
								<p className="private-header-title">Платежи</p>
							</div>
							<table className="table">
								<thead>
								<tr>
									<th>ID</th>
									<th>Дата</th>
									<th>Сумма платежа</th>
									<th>Способ оплаты</th>
								</tr>
								</thead>
								<tbody>
								{PaymentData.map((payment) => (
									<tr key={payment.id} className="table-row">
										<td>
											<div className="table-mobile-label">ID</div>
											{payment.id}
										</td>
										<td>
											<div className="table-mobile-label">Дата</div>
											{payment.date}
										</td>
										<td>
											<div className="table-mobile-label">Сумма платежа</div>
											{payment.sum} ₽
										</td>
										<td>
											<div className="table-mobile-label">Способ оплаты</div>
											<p className="table-tag-item">{payment.method}</p>
										</td>
									</tr>
								))}
								</tbody>
							</table>
						</div>
	
					</div>
				</div>
			</div>
		</div>
	);
}

export {Payments}