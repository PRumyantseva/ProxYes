import React from 'react';
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
					<a className="private-menu-item-link" href="#">Баланс</a>
				</li>
				<li className="private-menu-item">
					<a className="private-menu-item-link active" href="#">Прокси</a>
				</li>
				<li className="private-menu-item">
					<a className="private-menu-item-link" href="#">Заказы</a>
				</li>
				<li className="private-menu-item">
					<a className="private-menu-item-link" href="#">Платежи</a>
				</li>
				<li className="private-menu-item">
					<a className="private-menu-item-link" href="#">Профиль</a>
				</li>
				<li className="private-menu-item">
					<a className="private-menu-item-link" href="#">Партнерская программа</a>
				</li>
				<li className="private-menu-item">
					<a className="private-menu-item-link" href="#">Api</a>
				</li>
				<li className="private-menu-item">
					<button className="private-menu-item-link" onClick={() => signOut(() => navigate('/', {replace: true}))}>Выход</button>
				</li>
			</ul>
		</div>
	);
}

export {PrivateMenu}