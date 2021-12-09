import React, { Component } from 'react';
import { applyMiddleware } from 'redux';
import './App.css';
import TicketCard from '../TicketCard/TicketCard';
import { render } from '@testing-library/react';

import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import Filters from '../Filters/Filters';
import TicketsList from '../TicketsList/TicketsList';
import ShowTickets from '../ShowTickets/ShowTickets'
import { filterTickets, sortTickets } from '../../common';
import { connect } from 'react-redux';
import * as actions from '../../actions';


class App extends Component {
    async componentDidMount() {
        await this.props.dispatch(actions.obtainTickets());
    }

    render() {
        const { tickets, transfersQuantities, visibilityFilter } = this.props;
        const filteredTickets = filterTickets(tickets, transfersQuantities);
        const sortedTickets = sortTickets(filteredTickets, visibilityFilter);

        return(
            <div className="wrapper">
                <Header />
                <main className="main">
                    <SideBar />
                    <div className="content">
                        <Filters />
                        <TicketsList tickets={sortedTickets.slice(0, 5)} />
                        <ShowTickets />
                    </div>
                </main>
            </div>
        );
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(App);
