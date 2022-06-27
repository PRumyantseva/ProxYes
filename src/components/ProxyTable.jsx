import React, { useState } from 'react';
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
	
	return (
		<div className="proxy-table-wrap">
			<div className="proxy-table-header">
				<p className="proxy-table-header-title">Все прокси<span className="proxy-count">{List.length}</span></p>
				<div className="proxy-table-header-actions">
					<button className="proxy-table-header-actions-btn btn-export">Экспорт</button>
					<button className="btn-link proxy-table-header-actions-btn"><Icon glyph="sort-icon" /></button>
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
									id="all-check"
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
								<p className='table-proxy-tag'>{proxy.proxy[1]}</p>
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
								<button className="btn-link table-proxy-btn">
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