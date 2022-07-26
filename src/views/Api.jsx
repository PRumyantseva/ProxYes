import React from 'react';
import {PrivateMenu} from '../components/PrivateMenu';
import './styles/api.less';
import Icon from '../ui-components/Icon';
import './images/colorIcons/info-icon.svg';

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
						
						<div className="api-item-wrapper">
							<label className="control-label">API KEY</label>
							<div className="api-item-inner">
								<div className="form-control-wrap">
									<input name="apiKey" className="form-control" />
									<p className="form-help-text danger-text">Никому не говорите этот ключ!</p>
								</div>
								<button className="btn btn-primary btn-create-key">Сгенерировать</button>
							</div>
						</div>

						<div className="api-item-wrapper">
							<label className="control-label">API IP</label>
							<div className="api-item-inner">
								<div className="form-control-wrap">
									<input name="apiKey" className="form-control" />
									<p className="form-help-text">Вы можете разрешить доступп к API только с определенных IP-адресов. Можно указать до 3-ех штук, через запятую</p>
								</div>
								<button className="btn btn-primary btn-create-ip">Сохранить</button>
							</div>
						</div>
						
						<button className="btn btn-api-documentation btn-with-icon"><Icon glyph="info-icon" className="icon-left" />Документация по API</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export {Api}