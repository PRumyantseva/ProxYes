import React from 'react';
import './styles/home.less';
import {TariffSelection} from '../components/TariffSelection';
import {TariffSelectionModal} from '../components/TariffSelectionModal';
import {BlogList} from './BlogList';
import Icon from '../ui-components/Icon';
import './images/colorIcons/wallet-icon.svg';
import './images/colorIcons/json-icon.svg';
import './images/colorIcons/line-alt-icon.svg';
import './images/colorIcons/ito-icon.svg';
import './images/colorIcons/money-icon.svg';
import './images/colorIcons/check-icon.svg';
import './images/colorIcons/check-all-icon.svg';
import './images/data1.png';
//import '../images/planet.png';


const Home = () => {
	return (
		<div className="content-container">
			<div className="top-block-wrapper">
				<div className="top-block-inner">
					<div className="container">
						<div className="home-hero-wrapper">
							<div className="about-main-block">
								<h1 className="about-main-title hero">Мобильные и серверные <span className="name">Прокси</span></h1>
								<p className="about-main-description">Покупая прокси у нас, вы получаете гарантию
									безопасности в интернете, обход блокировок при работе с сайтами! Персональные прокси
									по низким ценам для любых задач. Быстрая скорость, стабильное соединение, чистые
									IP-адреса.</p>
								<button className="btn btn-primary btn-main-reg">Зарегистрироваться</button>
								<TariffSelectionModal/>
							</div>
							<div className="main-tariff-block">
								<TariffSelection/>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div className="content">
				<div className="container">
					<div className="benefits-wrapper gradient-border">
						<div className="benefits-item">
							<div className="benefits-item-title">
								<Icon glyph="wallet-icon" className="benefits-item-icon"/>
								<h5 className="title">Гибкие тарифы</h5>
							</div>
							<div className="benefits-item-desc">Не платите лишние деньги: покупайте только 1
								IP-адрес или 10 IP, но всего на 3 дня с возможностью дальнейшего продления.
								Настраивайте свой тариф так, как нужно.
							</div>
						</div>
						<div className="benefits-item">
							<div className="benefits-item-title">
								<Icon glyph="line-alt-icon" className="benefits-item-icon"/>
								<h5 className="title">Быстрое начало работы</h5>
							</div>
							<div className="benefits-item-desc">Все автоматизировано: после оплаты в вашем
								личном кабинете автоматически появляется доступ к прокси. Можно сразу приступать
								к работе.
							</div>
						</div>
						<div className="benefits-item">
							<div className="benefits-item-title">
								<Icon glyph="json-icon" className="benefits-item-icon"/>
								<h5 className="title">Анонимно и безопасно</h5>
							</div>
							<div className="benefits-item-desc">Все прокси, кроме iPv4 Shared, мы продаем в одни
								руки, то есть никто кроме вас не будет пользоваться вашим прокси. Все на 100%
								анонимно и безопасно
							</div>
						</div>
						<div className="benefits-item">
							<div className="benefits-item-title">
								<Icon glyph="ito-icon" className="benefits-item-icon"/>
								<h5 className="title">API разработчикам</h5>
							</div>
							<div className="benefits-item-desc">Внедряйте покупку и продление прокси в свой
								собственный сервис, если это необходимо. Для этого мы предоставим вам API нашего
								сервиса.
							</div>
						</div>
					</div>

					<div className="proxy-options-wrapper gradient-border">
						<div className="proxy-options-item">
							<div className="proxy-options-item-image server-proxy"></div>
							<h4 className="proxy-options-item-title">Серверные прокси</h4>
							<p className="proxy-options-item-desc">Используйте для своей организации чистые
								IP-адреса со всего мира. Ваши данные в безопасности, ведь прокси передается
								только в одни руки (при покупке iPv6 или iPv4).</p>
							<div className="proxy-options-item-bottom">
								<ul className="proxy-options-item-benefit">
									<li className="proxy-options-item-benefit-check-all">
										<Icon glyph="check-all-icon"/>
										<span>3.5M+ proxies</span>
									</li>
									<li className="proxy-options-item-benefit-check">
										<Icon glyph="check-icon"/>
										<span>Можно выбрать iPv6, iPv4 или iPv4 Shared</span>
									</li>
									<li className="proxy-options-item-benefit-check">
										<Icon glyph="check-icon"/>
										<span>16 стран для подключения</span>
									</li>
									<li className="proxy-options-item-benefit-check">
										<Icon glyph="check-icon"/>
										<span>Надежное и стабильное соединение</span>
									</li>
									<li className="proxy-options-item-benefit-check">
										<Icon glyph="check-icon"/>
										<span>Никаких блокировок</span>
									</li>
								</ul>
								<div className="proxy-options-item-buttons">
									<button className="btn btn-primary btn-with-icon btn-buy">
										<Icon glyph="money-icon" className="icon-left"/>Купить прокси
									</button>
									<a className="btn-link">Войти</a>
								</div>
							</div>
						</div>
						<div className="proxy-options-item">
							<div className="proxy-options-item-image mobile-proxy"></div>
							<h4 className="proxy-options-item-title">Мобильные прокси</h4>
							<p className="proxy-options-item-desc">Оставайтесь на связи и решайте свои задачи в
								любом месте с надежным мобильным прокси. Работает стабильно и быстро.</p>
							<div className="proxy-options-item-bottom">
								<ul className="proxy-options-item-benefit">
									<li className="proxy-options-item-benefit-check-all">
										<Icon glyph="check-all-icon"/>
										<span>3.5M+ proxies</span>
									</li>
									<li className="proxy-options-item-benefit-check">
										<Icon glyph="check-icon"/>
										<span>Можно выбрать iPv6, iPv4 или iPv4 Shared</span>
									</li>
									<li className="proxy-options-item-benefit-check">
										<Icon glyph="check-icon"/>
										<span>Смена IP по API ссылке</span>
									</li>
									<li className="proxy-options-item-benefit-check">
										<Icon glyph="check-icon"/>
										<span>Ротация по времени</span>
									</li>
									<li className="proxy-options-item-benefit-check">
										<Icon glyph="check-icon"/>
										<span>Никаких блокировок</span>
									</li>
								</ul>
								<div className="proxy-options-item-buttons">
									<button className="btn btn-primary btn-with-icon btn-buy">
										<Icon glyph="money-icon" className="icon-left"/>Купить прокси
									</button>
									<a className="btn-link">Войти</a>
								</div>
							</div>
						</div>
						<div className="proxy-options-item">
							<div className="proxy-options-item-image resident-proxy"></div>
							<h4 className="proxy-options-item-title">Резидентные прокси</h4>
							<p className="proxy-options-item-desc">Сохраняйте полную анонимность в интернете и
								забудьте о блокировках благодаря надежным и чистым IP-адресам со всего мира.</p>
							<div className="proxy-options-item-bottom">
								<ul className="proxy-options-item-benefit">
									<li className="proxy-options-item-benefit-check-all">
										<Icon glyph="check-all-icon"/>
										<span>5M+ proxies</span>
									</li>
									<li className="proxy-options-item-benefit-check">
										<Icon glyph="check-icon"/>
										<span>Можно выбрать iPv6, iPv4 или iPv4 Shared</span>
									</li>
									<li className="proxy-options-item-benefit-check">
										<Icon glyph="check-icon"/>
										<span>16 стран для подключения</span>
									</li>
									<li className="proxy-options-item-benefit-check">
										<Icon glyph="check-icon"/>
										<span>Надежное и стабильное соединение</span>
									</li>
									<li className="proxy-options-item-benefit-check">
										<Icon glyph="check-icon"/>
										<span>Никаких блокировок</span>
									</li>
								</ul>
								<div className="proxy-options-item-buttons">
									<button className="btn btn-primary btn-with-icon btn-buy">
										<Icon glyph="money-icon" className="icon-left"/>Купить прокси
									</button>
									<a className="btn-link">Войти</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<BlogList/>
			<div className="coverage-wrapper">
				<div className="container">
					<div className="coverage-inner">
						<h3 className="coverage-title">Широкое покрытие</h3>
						<p className="coverage-desc">Подключайтесь из любого уголка земного шара. Предлагаем на
							выбор IP-адреса из 16 стран!</p>

						<div className="coverage-country-block">
							<div className="coverage-country-inner">
								<div className="coverage-country-list-1">
									<ul className="coverage-country">
										<li className="coverage-country-item">
											<span className="coverage-country-item-flag flag-usa"></span>
											<div className="coverage-country-item-about">
												<p className="coverage-country-item-name">США</p>
												<p className="coverage-country-item-ips small-text">685k IPs</p>
											</div>
										</li>
										<li className="coverage-country-item">
											<span className="coverage-country-item-flag flag-can"></span>
											<div className="coverage-country-item-about">
												<p className="coverage-country-item-name">Канада</p>
												<p className="coverage-country-item-ips small-text">2.550k IPs</p>
											</div>
										</li>
										<li className="coverage-country-item">
											<span className="coverage-country-item-flag flag-nid"></span>
											<div className="coverage-country-item-about">
												<p className="coverage-country-item-name">Нидерланды</p>
												<p className="coverage-country-item-ips small-text">595k IPs</p>
											</div>
										</li>
										<li className="coverage-country-item">
											<span className="coverage-country-item-flag flag-germ"></span>
											<div className="coverage-country-item-about">
												<p className="coverage-country-item-name">Германия</p>
												<p className="coverage-country-item-ips small-text">857k IPs</p>
											</div>
										</li>
									</ul>
									<ul className="coverage-country">
										<li className="coverage-country-item">
											<span className="coverage-country-item-flag flag-sp"></span>
											<div className="coverage-country-item-about">
												<p className="coverage-country-item-name">Испания</p>
												<p className="coverage-country-item-ips small-text">331k IPs</p>
											</div>
										</li>
										<li className="coverage-country-item">
											<span className="coverage-country-item-flag flag-it"></span>
											<div className="coverage-country-item-about">
												<p className="coverage-country-item-name">Италия</p>
												<p className="coverage-country-item-ips small-text">365k IPs</p>
											</div>
										</li>
										<li className="coverage-country-item">
											<span className="coverage-country-item-flag flag-fr"></span>
											<div className="coverage-country-item-about">
												<p className="coverage-country-item-name">Франция</p>
												<p className="coverage-country-item-ips small-text">169k IPs</p>
											</div>
										</li>
										<li className="coverage-country-item">
											<span className="coverage-country-item-flag flag-en"></span>
											<div className="coverage-country-item-about">
												<p className="coverage-country-item-name">Британия</p>
												<p className="coverage-country-item-ips small-text">765k IPs</p>
											</div>
										</li>
									</ul>
								</div>
								<div className="coverage-country-list-2">
									<ul className="coverage-country">
										<li className="coverage-country-item">
											<span className="coverage-country-item-flag flag-sw"></span>
											<div className="coverage-country-item-about">
												<p className="coverage-country-item-name">Швеция</p>
												<p className="coverage-country-item-ips small-text">212k IPs</p>
											</div>
										</li>
										<li className="coverage-country-item">
											<span className="coverage-country-item-flag flag-swz"></span>
											<div className="coverage-country-item-about">
												<p className="coverage-country-item-name">Швейцария</p>
												<p className="coverage-country-item-ips small-text">178k IPs</p>
											</div>
										</li>
										<li className="coverage-country-item">
											<span className="coverage-country-item-flag flag-au"></span>
											<div className="coverage-country-item-about">
												<p className="coverage-country-item-name">Австрия</p>
												<p className="coverage-country-item-ips small-text">1.275k IPs</p>
											</div>
										</li>
										<li className="coverage-country-item">
											<span className="coverage-country-item-flag flag-aul"></span>
											<div className="coverage-country-item-about">
												<p className="coverage-country-item-name">Австралия</p>
												<p className="coverage-country-item-ips small-text">343k IPs</p>
											</div>
										</li>
									</ul>
									<ul className="coverage-country">
										<li className="coverage-country-item">
											<span className="coverage-country-item-flag flag-uk"></span>
											<div className="coverage-country-item-about">
												<p className="coverage-country-item-name">Украина</p>
												<p className="coverage-country-item-ips small-text">178k IPs</p>
											</div>
										</li>
										<li className="coverage-country-item">
											<span className="coverage-country-item-flag flag-lit"></span>
											<div className="coverage-country-item-about">
												<p className="coverage-country-item-name">Литва</p>
												<p className="coverage-country-item-ips small-text">1.275k IPs</p>
											</div>
										</li>
										<li className="coverage-country-item">
											<span className="coverage-country-item-flag flag-bol"></span>
											<div className="coverage-country-item-about">
												<p className="coverage-country-item-name">Болгария</p>
												<p className="coverage-country-item-ips small-text">343k IPs</p>
											</div>
										</li>
										<li className="coverage-country-item">
											<span className="coverage-country-item-flag flag-ind"></span>
											<div className="coverage-country-item-about">
												<p className="coverage-country-item-name">Индия</p>
												<p className="coverage-country-item-ips small-text">343k IPs</p>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="coverage-planet">
						</div>
					</div>
				</div>
			</div>

			<div className="about-tools-container">
				<div className="tools-wrapper">
					<div className="container">
						<div className="tools-inner">
							<div className="protocol-block">
								<h3 className="about-tools-title">Переключайте протоколы</h3>
								<p>В личном кабинете вы легко можете переключить протокол прокси с HTTP(S) на SOCKS5
									и обратно.</p>
							</div>
							<div className="protocol-image"></div>
						</div>
						<div className="tools-inner txt-inner">
							<div className="txt-image"></div>
							<div className="txt-block">
								<h3 className="about-tools-title">Выгружайте TXT</h3>
								<p>Для удобного копирования конкретного или всех ваших прокси, вы можете выгрузить
									их в текстовый файл в личном кабинете. Формат файла — .txt.</p>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="gathering-tool-wrapper">
						<h3 className="gathering-tool-title">Data Gathering Tool</h3>
						<div className="gathering-tool-block">
							<div className="gathering-tool-item">
								<img className="gathering-tool-item-img" src="../../dist/images/data1.png"/>
									<h5 className="gathering-tool-item-title">Flexible pricing packages</h5>
									<p className="gathering-tool-item-desc">We put zero restrictions on the number
										of proxies you can use. Choose the best plan for your needs.</p>
							</div>
							<div className="gathering-tool-item">
								<img className="gathering-tool-item-img" src="../../dist/images/data1.png"/>
									<h5 className="gathering-tool-item-title">100% anonymous & secure</h5>
									<p className="gathering-tool-item-desc">Remain 100% anonymous. Your real IP
										address is always hidden.</p>
							</div>
							<div className="gathering-tool-item">
								<img className="gathering-tool-item-img" src="../../dist/images/data1.png"/>
									<h5 className="gathering-tool-item-title">Only whitelisted IPs</h5>
									<p className="gathering-tool-item-desc">Take advantage of the cleanest proxy
										pools on the market. Zero bans, penalties, or captchas.</p>
							</div>
							<div className="gathering-tool-item">
								<img className="gathering-tool-item-img" src="../../dist/images/data1.png"/>
									<h5 className="gathering-tool-item-title">Highly reliable</h5>
									<p className="gathering-tool-item-desc">Enjoy continuous access to the whole
										proxy pool with the PROXYES Routing Logic technology.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			
		</div>
	);
}

export {Home}