import React, { Component } from 'react';
import TicketCard from '../TicketCard/TicketCard';
import { filterTickets, sortTickets } from '../../utils';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import Loader from '../Loader/Loader';

class TicketsList extends Component {

    async componentDidMount() {
        await this.props.dispatch(actions.obtainTickets());
    }

    render() {
        
        const { tickets, transfersQuantities, visibilityFilter, loadingCompleted } = this.props;

        const prepareTickets = (tickets, transfersQuantities, visibilityFilter) => {
            const filteredTickets = filterTickets(tickets, transfersQuantities);
            return sortTickets(filteredTickets, visibilityFilter);
        };

        const preparedTickets = prepareTickets(tickets, transfersQuantities, visibilityFilter).slice(0,5);
    
        return (
            
            <>
                <Loader visible = { !loadingCompleted } />
                {preparedTickets.map((ticket, index) => (<TicketCard ticket={ticket} key={index} />))}
            </>
        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(TicketsList);