import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {Home} from './views/Home';
import {Proxy} from './views/Proxy';
import {Profile} from './views/Profile';
import {Layout} from './components/Layout';
import {Login} from './views/Login';
import {RequireAuth} from './hoc/RequireAuth';
import {AuthProvider} from './hoc/AuthProvider';
import {Payments} from './views/Payments';
import {Balance} from './views/Balance';
import {PartnerProgram} from './views/PartnerProgram';
import {Orders} from './views/Orders';
import {Api} from './views/Api';

class App extends React.Component {
	render() {
		return (
			<AuthProvider>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="login" element={<Login />} />
						<Route path="balance" element={
							<RequireAuth>
								<Balance />
							</RequireAuth>
						} />
						<Route path="proxy" element={
							<RequireAuth>
								<Proxy />
							</RequireAuth>
						} />
						<Route path="orders" element={
							<RequireAuth>
								<Orders />
							</RequireAuth>
						} />
						<Route path="payments" element={
							<RequireAuth>
								<Payments />
							</RequireAuth>
						} />
						<Route path="profile" element={
							<RequireAuth>
								<Profile />
							</RequireAuth>
						} />
						<Route path="partner-program" element={
							<RequireAuth>
								<PartnerProgram />
							</RequireAuth>
						} />
						<Route path="api" element={
							<RequireAuth>
								<Api />
							</RequireAuth>
						} />
					</Route>
				</Routes>
			</AuthProvider>
		);
	}
}

export default App;