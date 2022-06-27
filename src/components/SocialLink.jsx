import React from 'react';
import Icon from '../ui-components/Icon';
import './images/icons/twitter-icon.svg';
import './images/icons/linkedin-icon.svg';
import './images/icons/facebook-icon.svg';
import './styles/social-link.less';

const SocialLink = () => {
	return (
		<ul className="social-list">
			<li className="social-list-item">
				<a className="social-list-link" href="#">
					<Icon className="social-icon" glyph="facebook-icon"/>
				</a>
			</li>
			<li className="social-list-item">
				<a className="social-list-link" href="#">
					<Icon className="social-icon" glyph="linkedin-icon"/>
				</a>
			</li>
			<li className="social-list-item">
				<a className="social-list-link" href="#">
					<Icon className="social-icon" glyph="twitter-icon"/>
				</a>
			</li>
		</ul>
	); 
}

export {SocialLink}