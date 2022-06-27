import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {Home} from './views/Home';
import {Proxy} from './views/Proxy';
import {Profile} from './views/Profile';
import {Layout} from './components/Layout';
import {Login} from './views/Login';
import {RequireAuth} from './hoc/RequireAuth';
import {AuthProvider} from './hoc/AuthProvider';

class App extends React.Component {
	render() {
		return (
			<AuthProvider>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="login" element={<Login />} />
						<Route path='proxy' element={
							<RequireAuth>
								<Proxy />
							</RequireAuth>
						} />
						<Route path='profile' element={
							<RequireAuth>
								<Profile />
							</RequireAuth>
						} />
					</Route>
				</Routes>
			</AuthProvider>
		);
	}
}

export default App;