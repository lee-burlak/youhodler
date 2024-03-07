import { Route, Switch } from 'wouter'

import Home from './pages/Home.tsx'
import Coin from './pages/Coin.tsx'

const Routes = () => {
	return (
		<Switch>
			<Route path="/" component={Home} />
			<Route path="/coins/:id" component={Coin} />
		</Switch>
	)
}

export default Routes
