import React, { Component } from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';
import IPAddresses from './IPAddresses';
class App extends Component {
    render() {
        return (
            <div className="App">
                <Banner bannerText="Sextant" />
                <Exhibit name="I'm an exhibit!"></Exhibit>
                <Exhibit name="IP Address v6">
                    <IPAddresses IPtype = "IPv6"/>
                </Exhibit>
                <Exhibit name="IP Address v4" child>
                    <IPAddresses IPtype = "IPv4"/>
                </Exhibit>
            </div>
        );
    }
}

export default App;
