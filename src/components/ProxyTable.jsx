import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import Icon from '../ui-components/Icon';
import cn from 'classnames';
import './images/colorIcons/trash-icon.svg';
import './images/colorIcons/lightning-icon.svg';
import './images/colorIcons/sort-icon.svg';

const ProxyTable = () => {
	const ProxyDate = [
		{
			id: 1,
			selected: false,
			active: true,
			date: ['17.05.22 — 20.05.22', '16 дней'],
			version: ['IPv4 Shared', 'ru', 'Russia'],
			proxy: ['62.3.13.157:8000', 'SOCKS5'],
			login: 'Nf9wsdf7',
			password: 'wetbcd5',
			comment: 'комментарий'
		},
		{
			id: 2,
			selected: false,
			active: false,
			date: ['17.05.22 — 20.05.22', '16 дней'],
			version: ['IPv4 Shared', 'ru', 'Russia'],
			proxy: ['62.3.13.157:8000', 'SOCKS5'],
			login: '1Nf9wsdf7',
			password: '2etbcd5',
			comment: ''
		},
		{
			id: 3,
			selected: false,
			active: true,
			date: ['17.05.22 — 20.05.22', '16 дней'],
			version: ['IPv4 Shared', 'ru', 'Russia'],
			proxy: ['62.3.13.157:8000', 'SOCKS5'],
			login: '1Nf9wsdf7',
			password: '2etbcd5',
			comment: ''
		}
	];
	const [isCheckedAllRow, setIsCheckedAllRow] = useState(false);
	const [List, setList] = useState(ProxyDate);
	const [selectedList, setSelectedList] = useState([]);
	const [updatedItem, setUpdatedItem] = React.useState(null);
	const [checkActivity, setCheckActivity] = React.useState(false);
		

	const onItemCheck = (e, item) => {
		let tempList = List;
		
		tempList.map((itemList) => {
			if (itemList.id === item.id) {
				itemList.selected = e.target.checked;
			}
			return itemList;
		});

		const totalItems = List.length;
		const totalCheckedItems = tempList.filter((e) => e.selected).length;
		
		setList(tempList);
		setIsCheckedAllRow(totalItems === totalCheckedItems);
		setSelectedList(List.filter((e) => e.selected));
	}

	const onCheckAllRow = (e) => {
		let tempList = List;
		tempList.map((item) => (item.selected = e.target.checked));

		setList(tempList);
		setIsCheckedAllRow(e.target.checked);
		setSelectedList(List.filter((e) => e.selected));
	}
	
	const deleteItem = (item) => {
		const result = List.filter((itemList) => itemList.id !== item.id);
		setList(result);
	}

	const onCheckActivity = (item) => {
		let tempList = List;

		List.map((itemList) => {
			if (itemList.id === item.id && itemList.active === item.active) {
				setCheckActivity(true);
			}
		});
		console.log(item)
	}
	
	// useEffect(() => {
	// 	setTimeout(() => {
	// 		setAsyncData("something");
	// 	}, 2000);
	// });

	const onSubmit = async values => {
		console.log(JSON.stringify(values))
	}
	
	return (
		<div className="table-wrap proxy-table-wrap">
			<div className="private-header">
				<p className="private-header-title">Все прокси<span className="proxy-count">{List.length}</span></p>
				<div className="proxy-private-header-actions">
					<div className="dropdown">
						<button className="proxy-private-header-actions-btn btn-export">Экспорт</button>
						<div className="dropdown-menu dropdown-menu-export">
							<Form
								onSubmit={onSubmit}
								render={({ handleSubmit, form, values }) => (
									<form onSubmit={handleSubmit} className="export-form vertical-form">
										<div className="form-group">
											<label className="control-label">Формат</label>
											<Field name="format" component="select" className="form-control">
												<option value="3">3 дня</option>
												<option value="16">16 дней</option>
											</Field>
											<Field name="formatText" component="input" className="form-control" />
										</div>
										<div className="form-group">
											<label className="control-label">Версия</label>
											<Field name="version" component="select" className="form-control">
												<option value="all">Все</option>
												<option value="ru">Russia</option>
												<option value="us">USA</option>
											</Field>
										</div>
										<div className="form-group">
											<label className="control-label">Последние Х прокси</label>
											<Field name="lastProxy" component="input" className="form-control" />
										</div>
										<div className="form-group">
											<label className="control-label">Активность</label>
											<Field name="activity" component="select" className="form-control">
												<option value="all">Все</option>
												<option value="active">Активный</option>
												<option value="inactive">Неактивный</option>
											</Field>
										</div>
										<button className="btn btn-primary btn-form-export" type="submit">Экспорт в txt</button>
									</form>
								)}
							/>
						</div>
					</div>
					<div className="dropdown">
						<button className="btn-link proxy-private-header-actions-btn"><Icon glyph="sort-icon" /></button>
						<ul className="dropdown-menu">
							<li><a className="dropdown-menu-item">
									<label className="radio-label">
										<input
											type="radio"
											className="radio-input form-check-input"
											onChange={(e) => onCheckAllRow(e)}
										/>
										<span className="radio-input-icon"></span>
										По дате добавления
									</label>
								</a>
							</li>
							<li><a className="dropdown-menu-item">
									<label className="radio-label">
										<input
											type="radio"
											className="radio-input form-check-input"
											onChange={(e) => onCheckAllRow(e)}
										/>
										<span className="radio-input-icon"></span>
										По сроку действия
									</label>
								</a>
							</li>
							<li><a className="dropdown-menu-item">
									<label className="radio-label">
										<input
											type="radio"
											className="radio-input form-check-input"
											onChange={(e) => onCheckAllRow(e)}
										/>
										<span className="radio-input-icon"></span>
										По типу прокси
									</label>
								</a>
							</li>
							<li><a className="dropdown-menu-item">
									<label className="radio-label">
										<input
											type="radio"
											className="radio-input form-check-input"
											onChange={(e) => onCheckAllRow(e)}
										/>
										<span className="radio-input-icon"></span>
										По стране
									</label>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<table className="table">
				<thead>
					<tr>
						<th>
							<label className="checkbox-label">
								<input
									type="checkbox"
									className="checkbox-input form-check-input"
									checked={isCheckedAllRow}
									onChange={(e) => onCheckAllRow(e)}
								/>
								<span className="checkbox-input-icon"></span>
							</label>
						</th>
						<th>Дата действия</th>
						<th>Версия</th>
						<th>Прокси</th>
						<th>Логин</th>
						<th>Пароль</th>
						<th>Комментарий</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
				{List.map((proxy) => (
					<tr key={proxy.id} className={cn('table-row', proxy.selected && "selected")}>
						<td className="table-cell-checkbox">
							<label className="checkbox-label">
								<input
									type="checkbox"
									checked={proxy.selected}
									className="checkbox-input form-check-input"
									id="rowcheck{proxy.id}"
									onChange={(e) => onItemCheck(e, proxy)}
								/>
								<span className="checkbox-input-icon"></span>
							</label>
						</td>
						<td>
							<div className="table-mobile-label">Дата действия</div>
							<p className="table-proxy-value">{proxy.date[0]}<span>{proxy.date[1]}</span></p>
						</td>
						<td>
							<div className="table-mobile-label">Версия</div>
							<div>
								<div className="table-proxy-value">{proxy.version[0]}
									<div className="table-proxy-value-country">
										<span className={`flag flag-${proxy.version[1]}`}></span>
										<span>{proxy.version[2]}</span>
									</div>
								</div>
							</div>
						</td>
						<td>
							<div className="table-mobile-label">Прокси</div>
							<div className="table-proxy-value">
								<p>{proxy.proxy[0]}</p>
								<p className="table-tag-item">{proxy.proxy[1]}</p>
							</div>
						</td>
						<td className="table-cell-login">
							<div className="table-mobile-label">Логин</div>
							<div>{proxy.login}</div>
						</td>
						<td className="table-cell-password">
							<div className="table-mobile-label">Пароль</div>
							<div>{proxy.password}</div>
						</td>
						
						<td>
							<div className="table-mobile-label">Комментарий</div>
							<div className="table-proxy-comment">
								<CommentItem
									key={proxy.id}
									item={proxy}
									setList={setList}
									updatedItem={updatedItem}
									setUpdatedItem={setUpdatedItem}
								/>
							</div>
						</td>
						<td>
							<div className="table-proxy-buttons">
								<button className={cn('btn-link table-proxy-btn proxy-test-btn', checkActivity && "check")} onClick={() => onCheckActivity(proxy)}>
									<Icon className="proxy-icon" glyph="lightning-icon" />
									<span className="text">Тест</span>
								</button>
								<button className="btn-link table-proxy-btn" onClick={() => deleteItem(proxy)}>
									<Icon className="proxy-icon" glyph="trash-icon" />
									<span className="text">Удалить</span>
								</button>
							</div>
						</td>
					</tr>
				))}
				</tbody>
			</table>
		</div>
	);
}

const CommentItem = ({ item: { id, comment }, setList, updatedItem, setUpdatedItem }) => {
	const isCurrentBeingUpdated = updatedItem === id;
	
	const handleInputChange = ({ target: { value } }) => {
		setList((prevList) =>
			prevList.map((item) =>
				item.id === id ? { ...item, comment: value } : item
			)
		);
	};
	const handleKeyDown = (event) => {
		if (event.key === 'Enter') {
			setUpdatedItem(null);
		}
	}

	const renderTitleOrInput = () => {
		return isCurrentBeingUpdated ? (
			<input className="form-control" value={comment} 
				   onChange={handleInputChange} 
				   onBlur={() => setUpdatedItem(isCurrentBeingUpdated ? null : id)}
				   onKeyDown={handleKeyDown}
			/>
		) : (
			<p>{comment}</p>
		);
	};

	return (
		<>
			{renderTitleOrInput()}

			{isCurrentBeingUpdated ? (
				<></>
			) : (
				<button className="btn-link" onClick={() => setUpdatedItem(id)}>
					{comment ? "Изменить комментарий" : "+ Добавить"}
				</button>
			)}
			
		</>
	);
};

export {ProxyTable}