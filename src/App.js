import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard  from './components/dashboard/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import SignUp from './components/SignUp';
import './App.css';

class App extends Component {
        render() {
        return (
        <div className="App">
            <div className="App-content">
                <Switch>  
                    <Route exact path="/" component={Login}/>
                    <Route exact path ="/signup" component={SignUp}/>
                    <PrivateRoute path='/dashboard' component={Dashboard} />
                </Switch>
            </div>
        </div>
        );
    }
}
export default App;

