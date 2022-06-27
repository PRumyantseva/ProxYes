import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import cn from 'classnames';
import Icon from '../../ui-components/Icon';
import {HeaderMenu} from './HeaderMenu';
import {SocialLink} from '../SocialLink';
import {LanguageSelect} from '../LanguageSelect';
import {PrivateMenu} from '../PrivateMenu';
import './styles/mobile-menu.less';
import './images/colorIcons/menu-icon.svg';
import './images/colorIcons/logo.svg';
import './images/colorIcons/user-icon.svg';

const MobileMenu = (props) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	
	const toggleMenu = () => {
		setIsMenuOpen(isMenuOpen => !isMenuOpen);
	}

	const { isCurrentUser } = props;

	return (
		<>
			<button onClick={toggleMenu} type="button" className="header-hamburger">
				<Icon glyph="menu-icon" className="header-hamburger-toggle"/>
			</button>
			<Menu width={ 261 } right
				  bodyClassName="no-scroll"
				  menuClassName={cn('sidebar-menu-wrapper', isCurrentUser && "private-sidebar")}
				  customBurgerIcon={ false }
				  customCrossIcon={ false }
				  onClose={toggleMenu}
				  isOpen={isMenuOpen} >
				{ isCurrentUser ? (
					<>
						<Link className="logo" to="/">
							<Icon className="logo-icon" glyph="logo" />
						</Link>
						<Link className="profile-link-private" to="/proxy"><Icon className="user-icon" glyph="user-icon" />Профиль</Link>
						<PrivateMenu />
					</>
				) : ( <>
					<p className="sidebar-menu-title">Меню</p>
					<HeaderMenu/>
					</>
				)}
				
				<SocialLink/>
				
				{ !isCurrentUser &&
					<div className="login-buttons-wrap">
						<a className="btn btn-default btn-login" href="#">Логин</a>
						<a className="btn btn-primary btn-registr" href="#">Регистрация</a>
					</div>
				}
				
				<LanguageSelect/>

				{!isCurrentUser &&
					<>
						<div className="social-phone">Phone: <a href="tel:+442080591037">+44 208 059 1037</a></div>
						<div className="social-email">Email: <a
							href="mailto:support@proxyes.com">support@proxyes.com</a></div>
						<div className="social-address">71-75 Shelton Street, London, Greater London, United Kingdom,
							WC2H 9JQ
						</div>
						<div className="copyright">
							<p className="small-text">PROXYES. © 2022 All Rights Reserved.</p>
							<p className="small-text">71-75 Shelton Street, London, Greater London, United Kingdom, WC2H
								9JQ</p>
						</div>
					</>
				}
				
			</Menu>
		</>
	);
}

export {MobileMenu}