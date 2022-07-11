import React, { useState } from 'react';
import {PrivateMenu} from '../components/PrivateMenu';
import './styles/profile.less';
import {Field, Form} from "react-final-form";

const Profile = () => {
	const onSubmit = async values => {
		console.log(JSON.stringify(values))
	}
	return (
		<div className="private-wrapper">
			<div className="container">
				<div className="private-container">
					<PrivateMenu />
					<div className="private-content">
						<div className="private-header">
							<p className="private-header-title">Профиль</p>
						</div>
						
						<Form
							onSubmit={onSubmit}
							render={({ handleSubmit, form, values }) => (
								<form onSubmit={handleSubmit} className="profile-form vertical-form">
									<div className="form-field-group">
										<div className="form-group">
											<label className="control-label">E-mail</label>
											<Field name="email" component="input" className="form-control" placeholder="a@a.ru" />
										</div>
										<div className="form-group">
											<label className="control-label">Телефон</label>
											<Field name="phone" component="input" className="form-control" />
										</div>
										<div className="subscription-block">
											<label className="checkbox-label">
												<Field name="agreeExtensionProxyMessage" 
													   component="input" 
													   type="checkbox"
													   defaultValue="true"
													   className="checkbox-input form-check-input"
												/>
												<span className="checkbox-input-icon"></span>
												<span>Получать письма о необходимости продления прокси</span>
											</label>
											<label className="checkbox-label">
												<Field name="agreeNewsMessage"
													   component="input"
													   type="checkbox"
													   defaultValue="true"
													   className="checkbox-input form-check-input"
												/>
												<span className="checkbox-input-icon"></span>
												<span>Получать письма о новостях сервиса, купонах, акциях</span>
											</label>
										</div>
									</div>
									<h5 className="profile-form-subtitle">Изменение пароля</h5>
									
									<div className="form-group">
										<label className="control-label">Старый пароль</label>
										<Field name="lastPassword" component="input" className="form-control" placeholder="Введите ваш старый пароль" />
									</div>
									<div className="form-group">
										<label className="control-label">Новый пароль</label>
										<Field name="newPassword" component="input" className="form-control" placeholder="Введите ваш новый пароль" />
									</div>
									<div className="form-group">
										<label className="control-label">Повторите новый пароль</label>
										<Field name="newPassword2" component="input" className="form-control" placeholder="Повторите ваш новый пароль" />
									</div>
									<div className="authorization-check-block">
										<label className="checkbox-label">
											<Field name="authorization"
												   component="input"
												   type="checkbox"
												   defaultValue="true"
												   className="checkbox-input form-check-input"
											/>
											<span className="checkbox-input-icon"></span>
											<span>Включить двухфакторную авторизацию</span>
										</label>
										<p className="help-text">Если не указан телефон, код будет отправлен на E-mail</p>
									</div>
									<button className="btn btn-primary" type="submit">Сохранить</button>
								</form>
							)}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export {Profile}