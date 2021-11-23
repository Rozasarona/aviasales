import React from 'react';
import { applyMiddleware } from 'redux';
import './App.css';
import TicketCard from '../TicketCard/TicketCard';
import { render } from '@testing-library/react';

import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import Filters from '../Filters/Filters';
import TicketsList from '../TicketsList/TicketsList';
import ShowTickets from '../ShowTickets/ShowTickets'


function App() {

    return(
        <div className="wrapper">
            <Header />
            <main className="main">
                <SideBar />
                <div className="content">
                    <Filters />
                    <TicketsList />
                    <ShowTickets />
                </div>
            </main>
        </div>
    );
}

export default App;
