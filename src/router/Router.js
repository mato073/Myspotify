import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../Components/Login'
import Home from '../Components/Home'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import RedirectPage from '../Components/RedirectPage'
import App from '../App'
import SideBar from '../Components/SideBar';

class AppRouter extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <div className="main">
                    <Switch>
                        <Route path="/" component={App} exact={true} />
                        <Route path="/login" component={Login} />
                        <Route path="/redirect" component={RedirectPage} />
                        <Route path="/home" component={Home} />
                        <Route component={Footer} />
                        <Route component={SideBar} />
                        <Route component={Header} />
                    </Switch>
                </div>

            </BrowserRouter>
        );
    }
}

export default AppRouter