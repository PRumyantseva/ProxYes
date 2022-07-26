import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/private-menu.less';
import {ExitModal} from '../views/ExitModal';

const PrivateMenu = () => {
	return (
		<div className="private-menu-wrapper">
			<ul className="private-menu">
				<li className="private-menu-item">
					<NavLink className="private-menu-item-link" to="/balance">Баланс</NavLink>
				</li>
				<li className="private-menu-item">
					<NavLink className="private-menu-item-link" to="/proxy">Прокси</NavLink>
				</li>
				<li className="private-menu-item">
					<NavLink className="private-menu-item-link" to="/orders">Заказы</NavLink>
				</li>
				<li className="private-menu-item">
					<NavLink className="private-menu-item-link" to="/payments">Платежи</NavLink>
				</li>
				<li className="private-menu-item">
					<NavLink className="private-menu-item-link" to="/profile">Профиль</NavLink>
				</li>
				<li className="private-menu-item">
					<NavLink className="private-menu-item-link" to="/partner-program">Партнерская программа</NavLink>
				</li>
				<li className="private-menu-item">
					<NavLink className="private-menu-item-link" to="/api">Api</NavLink>
				</li>
				<li className="private-menu-item">
					<ExitModal />
				</li>
			</ul>
		</div>
	);
}

export {PrivateMenu}