import React from 'react';
import { Outlet } from 'react-router-dom';
import cn from 'classnames';
import {Header} from './layout/Header';
import {Footer} from './layout/Footer';
import {useAuth} from '../hook/useAuth';

const Layout = () => {
	const {user} = useAuth();
	return (
		<>
			<div className="wrapper">
				<div className={cn('fullpage', !user && "fullpage-public")}>
					<Header isCurrentUser={!!user}/>
					<Outlet />
				</div>
				<Footer/>
			</div>
		</>
	)
}

export {Layout}
