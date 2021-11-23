import { render } from '@testing-library/react';
import React from 'react';
import TicketCard from '../TicketCard/TicketCard';

function TicketsList () {

    return (
        <>
            <TicketCard />
            <TicketCard />
            <TicketCard />
            <TicketCard />
            <TicketCard />
        </>
    )
    
}

export default TicketsList;