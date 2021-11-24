import React from 'react';
import './SideBar.css';


function SideBar() {

    return(
        <div className="sidebar">
                    <div className="sidebar_header">
                        КОЛИЧЕСТВО ПЕРЕСАДОК
                    </div>
                    <div className="transfer">
                        <input type="checkbox" />Все
                    </div>
                    <div className="transfer">
                        <input type="checkbox" />Без пересадок
                    </div>
                    <div className="transfer">
                        <input type="checkbox" />1 пересадка
                    </div>
                    <div className="transfer">
                        <input type="checkbox" />2 пересадки
                    </div>
                    <div className="transfer">
                        <input type="checkbox" />3 пересадки
                    </div>
                </div>
    )
}

export default SideBar;