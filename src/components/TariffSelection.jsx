import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './styles/tariff-select.less';
import {TariffSelectionForm} from './TariffSelectionForm';

const TariffSelection = () => {
	return (
		<Tabs className="tariff-selection">
			<div className="tariff-tab-list">
				<TabList>
					<Tab>IPv6</Tab>
					<Tab>IPv4</Tab>
					<Tab>IPv4 Shared</Tab>
				</TabList>
			</div>
			
			<TabPanel>
				<div className="tariff-tab-desc">
					<p>// Подходит для сайтов с поддержкой iPv6.</p>
					<p>// Используется для серверных прокси.</p>
					<p>// Передается одному покупателю, никто кроме вас им не пользуется.</p>
				</div>
				<TariffSelectionForm/>
			</TabPanel>
			<TabPanel>
				<div className="tariff-tab-desc">
					<p>// Подходит для любых сайтов.</p>
					<p>// Используется для серверных, мобильных и резидентных прокси.</p>
					<p>// Передается одному покупателю, никто кроме вас им не пользуется.</p>
				</div>
				<TariffSelectionForm/>
			</TabPanel>
			<TabPanel>
				<div className="tariff-tab-desc">
					<p>// Подходит для любых сайтов.</p>
					<p>// Используется для серверных, мобильных и резидентных прокси.</p>
					<p>// Передается трём покупателям, кроме вас его использует еще два человека.</p>
				</div>
				<TariffSelectionForm/>
			</TabPanel>
		</Tabs>
	);
}

export {TariffSelection}