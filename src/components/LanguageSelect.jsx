import React from 'react';
import './styles/language-select.less';

const LanguageSelect = () => {
	return (
		<div className="language-dropdown dropdown">
			<a className="language-dropdown-link" href="#">
				<span className="language-dropdown-link-flag flag-ru"></span>
			</a>
			<ul className="dropdown-menu">
				<li><a className="dropdown-menu-item"><span
					className="language-dropdown-link-flag flag-en"></span></a></li>
			</ul>
		</div>
	);
}

export {LanguageSelect}