import React, { Component } from 'react';
import './App.css';

import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import Filters from '../Filters/Filters';
import TicketsList from '../TicketsList/TicketsList';

import Loader from '../Loader/Loader';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';


class App extends Component {
    async componentDidMount() {
        await this.props.dispatch(actions.obtainTickets());
    }

    render() {
        const { tickets, transfersQuantities, visibilityFilter, loadingCompleted } = this.props;

        return(
            <div className="wrapper">
                <Header />
                <main className="main">
                    <SideBar />
                    <div className="content">
                        <Filters />
                        <Loader visible = { !loadingCompleted } />
                        <TicketsList tickets={tickets} transfersQuantities={transfersQuantities} visibilityFilter={visibilityFilter} />
                    </div>
                </main>
            </div>
        );
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(App);
