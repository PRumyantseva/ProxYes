import React from 'react';
import {FooterMenu} from './FooterMenu';
import {SocialLink} from '../SocialLink';
import Icon from '../../ui-components/Icon';
import './images/colorIcons/logo.svg';
import './styles/footer.less';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-container">
				<div className="container">
					<div className="footer-wrapper">
						<div className="footer-inner">
							<div className="footer-logo-wrapper hidden-xs">
								<a className="logo" href="/">
									<Icon className="logo-icon" glyph="logo" />
								</a>
								<h6 className="footer-title">Получите безопасный интернет без ограничений с PROXYES</h6>
							</div>
							<hr/>
							<FooterMenu />
						</div>
						<div className="footer-social-container">
							<div className="footer-logo-wrapper hidden-lg hidden-md hidden-sm">
								<a className="logo" href="/">
									<Icon className="logo-icon" glyph="logo" />
								</a>
								<h6 className="footer-title">Получите безопасный интернет без ограничений с PROXYES</h6>
							</div>
							<button className="btn btn-default btn-contact">Свяжитесь с нами</button>
							<button className="btn btn-primary brn-reg">Зарегистрироваться</button>
							<SocialLink/>
							<div className="social-phone">Phone: <a href="tel:+442080591037">+44 208 059 1037</a>
							</div>
							<div className="social-email">Email: <a
								href="mailto:support@proxyes.com">support@proxyes.com</a></div>
							<div className="social-address">71-75 Shelton Street, London, Greater London, United
								Kingdom, WC2H 9JQ
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-copyright-container">
				<div className="container">
					<p className="small-text">PROXYES. © 2022 All Rights Reserved.</p>
					<p className="small-text">71-75 Shelton Street, London, Greater London, United Kingdom, WC2H
						9JQ</p>
				</div>
			</div>
		</footer>
	);
}

export {Footer}