import React from 'react';
import {PrivateMenu} from '../components/PrivateMenu';
import './styles/proxy.less';
import {TariffSelection} from '../components/TariffSelection';
import {ProxyTable} from "../components/ProxyTable";

const Proxy = () => {
	return (
		<div className="private-wrapper">
			<div className="container">
				<div className="private-container">
					<PrivateMenu />
					<div className="private-content">
						<div className="private-tariff-selection">
							<TariffSelection />
						</div>
						
						<ProxyTable />
						
					</div>
				</div>
			</div>
		</div>
	);
}

export {Proxy}