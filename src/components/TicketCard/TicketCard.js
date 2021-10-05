import React from 'react';
import './TicketCard.css'


function TicketCard() {

    return (
        <div className="ticketcard">
            <div className="ticketcard_header">
                <div className="cost">13400 Р</div>
                <img src="https://pics.avs.io/99/36/ZM.png" />
            </div>
            <div className="ticketcard_content">
                <div className="content-string">
                    <div className="content-item">
                        <span>mow - hkt</span><br />
                        <span>10:45 - 8:00</span>
                    </div>
                    <div className="content-item">
                        <span>в пути</span><br />
                        <span>21ч 15м</span>
                    </div>
                    <div className="content-item">
                        <span>2 пересадки</span><br />
                        <span>HKG,JNB</span>
                    </div>
                </div>
                <div className="content-string">
                    <div className="content-item">
                        <span>mow - hkt</span><br />
                        <span>11:20 - 00:50</span>
                    </div>
                    <div className="content-item">
                        <span>в пути</span><br />
                        <span>13ч 30м</span>
                    </div>
                    <div className="content-item">
                        <span>1 пересадка</span><br />
                        <span>HKG</span>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default TicketCard;