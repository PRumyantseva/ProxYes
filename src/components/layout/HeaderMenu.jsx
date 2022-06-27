import React from 'react';
import {Link} from 'react-router-dom';
import Icon from '../../ui-components/Icon';
import './images/icons/arrow-down-icon.svg';

const HeaderMenu = () => {
	return (
		<nav className="header-nav">
			<div className="dropdown">
				<a className="header-nav-link dropdown-link" href="#">
					Преимущества
					<Icon glyph="arrow-down-icon" className="caret"/>
				</a>
				<ul className="dropdown-menu">
					<li><a className="dropdown-menu-item">Гибкие тарифы</a></li>
					<li><a className="dropdown-menu-item">Быстрое начало работы</a></li>
					<li><Link className="dropdown-menu-item" to="/proxy">Прокси</Link></li>
				</ul>
			</div>
			<div className="dropdown">
				<a className="header-nav-link dropdown-link" href="#">
					Продукты и тарифы
					<Icon glyph="arrow-down-icon" className="caret"/>
				</a>
				<ul className="dropdown-menu">
					<li><a className="dropdown-menu-item">Гибкие тарифы</a></li>
					<li><a className="dropdown-menu-item">Быстрое начало работы</a></li>
					<li><a className="dropdown-menu-item">Быстрое начало работы</a></li>
				</ul>
			</div>
			<a className="header-nav-link" href="#">Блог</a>
			<a className="header-nav-link" href="#">
				Возможности
			</a>
		</nav>
	);
}

export {HeaderMenu}