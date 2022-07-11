import React from 'react';
import {PrivateMenu} from '../components/PrivateMenu';

const Api = () => {
	return (
		<div className="private-wrapper">
			<div className="container">
				<div className="private-container">
					<PrivateMenu />
					<div className="private-content">
						<div className="private-header">
							<p className="private-header-title">Разработчикам (API)</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export {Api}