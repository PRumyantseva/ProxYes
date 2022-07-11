import React from 'react';
import {PrivateMenu} from '../components/PrivateMenu';
import './styles/partner-program.less';
import {Statistic} from './Statistic';

const PartnerProgram = () => {
	return (
		<div className="private-wrapper">
			<div className="container">
				<div className="private-container">
					<PrivateMenu />
					<div className="private-content">
						<div className="private-header">
							<p className="private-header-title">Партнёрская программа</p>
						</div>
						<div className="partner-program-wrapper">
							<p className="partner-program-desc">
								Наша партнерская программа позволит Вам зарабатывать 30% от платежей привлеченных Вами клиентов.<br/>
								Для участия в программе Вам всего лишь нужно:
							</p>
							<div className="program-conditions-wrap">
								<div className="program-conditions-item">
									<span>Привлекать к нам новых клиентов по реферальной ссылке - зарегистрировавшийся по вашей ссылке пользователь пожизненно закрепляется за Вами и со всех его платежей вам будет идти процент.</span>
								</div>
								<div className="program-conditions-item">
									<span>Распространять партнерский купон на скидку - пользователь, использовавший ваш купон, получает 5% скидку при покупке, а так же пожизненно закрепляется за Вами и со всех его платежей вам будет идти процент.</span>
								</div>
							</div>
							
							<div className="program-link-block">
								<div className="form-group program-referral-link">
									<label className="control-label">Реферальные ссылки</label>
									<input className="form-control" defaultValue="https://proxy6.net/?r=399762"/>
									<input className="form-control" defaultValue="https://proxy6.net/?r=399788"/>
								</div>
								<div className="form-group program-partner-coupon">
									<label className="control-label">Партнерский купон</label>
									<input className="form-control" defaultValue="yc1pQEJe1e"/>
									<p className="help-text">При переходе по реферальной ссылке происходит мгновенный редирект на сайт без реферального параметра.</p>
								</div>
							</div>
							
							<ul className="partner-program-rules">
								<li className="partner-program-rules-item">Начисление партнерских вознаграждений на баланс происходит каждый день единожды.</li>
								<li className="partner-program-rules-item">Для выплаты партнерского вознаграждения на кошелек, напишите заявку на <a href="mailto:support@proxy6.net">support@proxy6.net</a> с указанием кошелька для выплаты - WebMoney (WMZ), QIWI, Payeer. Выплаты производятся каждые 7-14 дней.</li>
								<li className="partner-program-rules-item">Запрещена регистрация мультиаккаунтов с целью получения партнерских выплат, т.е. нельзя быть рефералом самому себе.</li>
							</ul>
						</div>
						<Statistic />
					</div>
				</div>
			</div>
		</div>
	);
}

export {PartnerProgram}