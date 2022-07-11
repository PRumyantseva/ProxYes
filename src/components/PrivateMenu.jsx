import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {useAuth} from '../hook/useAuth';
import './styles/private-menu.less';

const PrivateMenu = () => {
	const {signOut} = useAuth();
	const navigate = useNavigate();
	
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
					<button className="private-menu-item-link" onClick={() => signOut(() => navigate('/', {replace: true}))}>Выход</button>
				</li>
			</ul>
		</div>
	);
}

export {PrivateMenu}