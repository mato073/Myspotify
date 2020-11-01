import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../Components/Login'
import Home from '../Components/Home'
import Menu from '../Components/Menu'
import Footer from '../Components/Footer'
import RedirectPage from '../Components/RedirectPage'
import Search_artist from '../Components/Search_artist'
import TopTracks from '../Components/TopTracks'
import App from '../App'

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
                        <Route component={Menu} />
                        <Route component={Search_artist} />
                        <Route component={TopTracks} />
                    </Switch>
                </div>

            </BrowserRouter>
        );
    }
}

export default AppRouter