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
            <div className="post">
                <div className="containerStyle">
                    <div className="divStyle" />
                    <div className="divStyle" />
                    <div className="divStyle" />
                    <div className="divStyle" />
                    <div className="divStyle" />
                </div>
                <div className="avatar-container">
                
                </div>
            </div>

        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));