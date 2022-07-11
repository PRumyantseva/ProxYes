import React from 'react';
import './styles/partner-program.less';

const Statistic = () => {
	const StatisticData = [
		{
			count: 0,
			monthlySum: '0.00',
			allSum: '0.00',
			partnerBalance: '0.00'
		}
	];
	return (
			<div className="statistic-wrapper">
				<div className="private-header">
					<p className="private-header-title">Статистика</p>
				</div>
				<table className="table">
					<thead>
						<tr>
							<th>Всего рефералов</th>
							<th>Заработано за месяц</th>
							<th>Всего заработано</th>
							<th>Партнёрский баланс</th>
						</tr>
					</thead>
					<tbody>
					{StatisticData.map((statistic,index) => (
						<tr key={index} className="table-row">
							<td>
								<div className="table-mobile-label">Всего рефералов</div>
								{statistic.count}
							</td>
							<td>
								<div className="table-mobile-label">Заработано за месяц</div>
								{statistic.monthlySum} ₽
							</td>
							<td>
								<div className="table-mobile-label">Всего заработано</div>
								{statistic.allSum} ₽
							</td>
							<td>
								<div className="table-mobile-label">Партнёрский баланс</div>
								{statistic.partnerBalance} ₽
							</td>
						</tr>
					))}
					</tbody>
				</table>
			</div>

	);
}

export {Statistic}