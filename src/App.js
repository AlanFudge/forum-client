import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

import './App.css';

class App extends React.Component {
    render() {
        return (
            <h1>Hello World</h1>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));