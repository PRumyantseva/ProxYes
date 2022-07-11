import React from 'react';
import {PrivateMenu} from '../components/PrivateMenu';
import './styles/orders.less';
import cn from "classnames";
import Icon from '../ui-components/Icon';
import './images/colorIcons/money-white-icon.svg';
import './images/colorIcons/lock-icon.svg';

const Orders = () => {
	const OrdersData = [
		{
			id: 98461984,
			type: ['IPv4 Shared', '20.05.22 13:05'],
			count: '1 ip на 30 дней',
			country: ['ru', 'Russia'],
			sum: '88.00',
			isPaid: true
		},
		{
			id: 98461945,
			type: ['IPv4 Shared', '20.05.22 13:05'],
			count: '1 ip на 30 дней',
			country: ['ru', 'Russia'],
			sum: '88.00',
			isPaid: true
		},
		{
			id: 98461111,
			type: ['IPv4 Shared', '20.05.22 13:05'],
			count: '1 ip на 30 дней',
			country: ['ru', 'Russia'],
			sum: '88.00',
			isPaid: false
		},
		{
			id: 984284,
			type: ['IPv4 Shared', '20.05.22 13:05'],
			count: '1 ip на 30 дней',
			country: ['ru', 'Russia'],
			sum: '88.00',
			isPaid: true
		},
		{
			id: 98461554,
			type: ['IPv4 Shared', '20.05.22 13:05'],
			count: '1 ip на 30 дней',
			country: ['ru', 'Russia'],
			sum: '88.00',
			isPaid: true
		},
		{
			id: 98461664,
			type: ['IPv4 Shared', '20.05.22 13:05'],
			count: '1 ip на 30 дней',
			country: ['ru', 'Russia'],
			sum: '88.00',
			isPaid: true
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
								<p className="private-header-title">Заказы</p>
							</div>
							<table className="table">
								<thead>
									<tr>
										<th>ID</th>
										<th>Тип прокси</th>
										<th>Кол-во</th>
										<th>Страна</th>
										<th>Сумма</th>
										<th></th>
									</tr>
								</thead>
								<tbody>
								{OrdersData.map((order, index) => (
									<tr key={index} className="table-row">
										<td>
											<div className="table-mobile-label">ID</div>
											{order.id}
										</td>
										<td>
											<div className="table-mobile-label">Тип прокси</div>
											<p className="table-type-value">{order.type[0]}<span>{order.type[1]}</span></p>
										</td>
										<td>
											<div className="table-mobile-label">Кол-во</div>
											{order.count}
										</td>
										<td>
											<div className="table-mobile-label">Страна</div>
											<div className="table-country-value">
												<span className={`flag flag-${order.country[0]}`}></span>
												<span>{order.country[1]}</span>
											</div>
										</td>
										<td>
											<div className="table-mobile-label">Сумма</div>
											{order.sum} ₽
										</td>
										<td>
											<div className="table-order-buttons">
												<button className={cn('btn btn-with-icon table-order-btn btn-paid', !order.isPaid && "no-paid")}>
													<Icon className="icon-left order-icon" glyph="money-white-icon" />
													<span>{order.isPaid ? 'Оплачено' : 'Не оплачено'}</span>
												</button>
												<button className="btn btn-with-icon table-order-btn btn-lock">
													<Icon className="icon-left order-icon" glyph="lock-icon" />
													<span>Закрепить</span>
												</button>
											</div>
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

export {Orders}