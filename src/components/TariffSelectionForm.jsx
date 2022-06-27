import React from 'react';
import { Form, Field } from 'react-final-form';
import NumericInput from 'react-numeric-input';
import Icon from '../ui-components/Icon';
import './styles/tariff-select.less';
import '../images/icons/arrow-right-light-icon.svg';

const TariffSelectionForm = () => {
	const onSubmit = async values => {
		console.log(JSON.stringify(values))
	}
	return (
		<Form
			onSubmit={onSubmit}
			render={({ handleSubmit, form, values }) => (
				<form onSubmit={handleSubmit} className="tariff-select-form">
					<div className="form-item-wrapper">
						<div className="form-item-inner">
							<div className="form-group">
								<label className="control-label">Страна</label>
								<Field name="Country" component="select" className="form-control">
									<option value="ru">Russia</option>
									<option value="us">USA</option>
									<option value="en">England</option>
								</Field>
							</div>
							<div className="form-group">
								<label className="control-label">Кол-во</label>
								<NumericInput
									className="form-control"
									value={ 1 }
									min={ 0 }
									max={ 100 }
									step={ 1 }
									precision={ 0 }
									size={ 5 }
									mobile noStyle
								/>
							</div>
						</div>
						<div className="form-item-inner">
							<div className="form-group">
								<label className="control-label">Период</label>
								<Field name="Type" component="select" className="form-control">
									<option value="1">1 days</option>
									<option value="2">2 days</option>
									<option value="3">3 days</option>
									<option value="4">4 days</option>
									<option value="5">5 days</option>
								</Field>
							</div>
							<div className="form-group">
								<label className="control-label">Тип</label>
								<Field name="Type" component="select" className="form-control">
									<option value="6">HTTPSs / SOCKS5</option>
									<option value="7">HTTPSs / SOCKS5</option>
									<option value="8">HTTPSs / SOCKS5</option>
									<option value="9">HTTPSs / SOCKS5</option>
								</Field>
							</div>
						</div>
					</div>
					
					<span className="tariff-select-form-divider"></span>

					<div className="tariff-select-form-cost-wrap">
						<div><span className="tariff-select-form-cost-label">Стоимость</span></div>
						<div className="tariff-select-form-cost"><span className="sum">155</span> $</div>
					</div>
					
					<button className="btn btn-primary btn-buy btn-with-icon" type="submit">Купить сейчас <Icon glyph="arrow-right-light-icon" className="icon-right" /></button>
				</form>
			)}
		/>
	);
}

export {TariffSelectionForm}