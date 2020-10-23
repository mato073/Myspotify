import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../Components/Login'
import Home from '../Components/Home'
import App from '../App'

class AppRouter extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <div className="main">
                    <Switch>
                        <Route path="/" component={App} exact={true} />
                        <Route path="/login" component={Login} />
                        <Route path="/home" component={Home} />
                    </Switch>
                </div>

            </BrowserRouter>
        );
    }
}

export default AppRouter