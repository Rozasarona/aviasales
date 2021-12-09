import { render } from '@testing-library/react';
import React from 'react';
import TicketCard from '../TicketCard/TicketCard';

function TicketsList ({ tickets }) {

    return (
        <>
            {tickets.map((ticket, index) => (<TicketCard ticket={ticket} key={index} />))}
        </>
    )
}

export default TicketsList;