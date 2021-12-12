import React from 'react';
import './TicketCard.css'

function renderSegment(segment, index) {
    let stopsCount = `${segment.stops.length}`;
    switch (segment.stops.length % 10) {
        case 1:
            stopsCount += ' пересадка';
            break;
        case 2:
        case 3:
        case 4:
            stopsCount += ' пересадки';
            break;
        default:
            stopsCount += ' пересадок';
    }
    const startOn = new Date(segment.date);
    const finishOn = new Date(segment.date);
    finishOn.setMinutes(finishOn.getMinutes() + segment.duration);
    const durationMinutes = segment.duration % 60;
    const durationHours = (segment.duration - durationMinutes) / 60;
    return (<div className="content-string" key={index}>
        <div className="content-item">
            <span>{segment.origin} - {segment.destination}</span><br />
            <span>{startOn.getHours()}:{startOn.getMinutes()} - {finishOn.getHours()}:{finishOn.getMinutes()}</span>
        </div>
        <div className="content-item">
            <span>в пути</span><br />
            <span>{durationHours}ч {durationMinutes}м</span>
        </div>
        <div className="content-item">
            <span>{stopsCount}</span><br />
            <span>{segment.stops.join(', ')}</span>
        </div>
    </div>);
}

function TicketCard({ ticket }) {
    const logoUrl = `https://pics.avs.io/99/36/${ ticket.carrier }.png`;
    return (
        <div className="ticketcard">
            <div className="ticketcard_header">
                <div className="cost">{ ticket.price } Р</div>
                <img src={ logoUrl } alt="MyLogo" />
            </div>
            <div className="ticketcard_content">
                {ticket.segments.map((segment, index) => renderSegment(segment, index))}
            </div>
        </div>
    );
}

export default TicketCard;