import React from 'react';
import TicketCard from '../TicketCard/TicketCard';
import { filterTickets, sortTickets } from '../../utils';

const prepareTickets = (tickets, transfersQuantities, visibilityFilter) => {
    const filteredTickets = filterTickets(tickets, transfersQuantities);
    return sortTickets(filteredTickets, visibilityFilter);
};

function TicketsList ({ tickets, transfersQuantities, visibilityFilter }) {

    const preparedTickets = prepareTickets(tickets, transfersQuantities, visibilityFilter).slice(0,5);

    return (
        <>
            {preparedTickets.map((ticket, index) => (<TicketCard ticket={ticket} key={index} />))}
        </>
    )
}

export default TicketsList;