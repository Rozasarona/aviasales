import React, { Component } from 'react';
import './App.css';

import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import Filters from '../Filters/Filters';
import TicketsList from '../TicketsList/TicketsList';

class App extends Component {

    render() {
        
        return(
            <div className="wrapper">
                <Header />
                <main className="main">
                    <SideBar />
                    <div className="content">
                        <Filters />
                        <TicketsList />
                    </div>
                </main>
            </div>
        );
    }
}

export default App;
