import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import cn from 'classnames';
import {HeaderMenu} from './HeaderMenu';
import {LanguageSelect} from '../LanguageSelect';
import {MobileMenu} from './MobileMenu';
import Icon from '../../ui-components/Icon';
import './images/colorIcons/logo.svg';
import './images/colorIcons/user-icon.svg';
import './styles/header.less';

const Header = (props) => {
	const [isScroll, setScroll] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			setScroll(window.scrollY > 10);
		});
	}, []);
	
	const { isCurrentUser } = props;
	
	return (
		<header id="header" className={cn('header', isScroll && "js-header-scroll")}>
			<div className="container">
				<div className="header-container">
					<Link className="logo" to="/">
						<Icon className="logo-icon" glyph="logo" />
					</Link>
					<div className="header-nav-wrap">
						{ isCurrentUser ?
							<>
								<Link className="header-nav-link header-nav-link-private" to="/profile"><Icon className="user-icon" glyph="user-icon" />Профиль</Link>
							</>
						:
							<>
								<HeaderMenu/>
								<div className="login-buttons-wrap">
									<a className="btn btn-default btn-login" href="/login">Логин</a>
									<a className="btn btn-primary btn-registr" href="/registr">Регистрация</a>
								</div>
							</>
						}
						
						<LanguageSelect/>
					</div>
					<MobileMenu isCurrentUser={isCurrentUser} />
				</div>
			</div>
		</header>
	);
}

export {Header}