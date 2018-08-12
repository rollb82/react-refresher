import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './scss/app.scss';
import { Header } from './components/Header';
import { Home } from './components/Home';

class App extends Component {
    constructor(){
        super();
        this.state = {
            appName: 'Intial name'
        }

        this.onChangeAppName = this.onChangeAppName.bind(this);
    }
    appAlert(){
        alert('I am app');
    }    
    onChangeAppName(newName){
        console.log(newName);
        this.setState({
            appName: newName
        });
        console.log(newName, "parent component name");
    }
    render() {
        const user = {
            city: "Richmond",
            state: "VA",
            hobbies: [
                'development',
                'baking',
                'backpacking'
            ]
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header appName={this.state.appName} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home 
                            name={"chris"} 
                            age={36} 
                            userData={user} 
                            appAlert={this.appAlert}
                            initialAppName={this.state.appName}
                            changeAppName={this.onChangeAppName} />
                    </div>
                </div>
            </div>
        );
    }
}

ReactDom.render(<App />, window.document.getElementById('app'));
