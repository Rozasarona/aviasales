import React from 'react';
import { connect } from 'react-redux';
import { addTransferQuantity, removeTransferQuantities } from '../../actions';
import { TransfersQuantities } from '../../common';
import './SideBar.css';

function SideBar({ transfersQuantities, addTransferQuantity, removeTransferQuantities }) {
    const onCheckboxChange = value => () => {
        if(value === TransfersQuantities.SHOW_ALL) {
            if(transfersQuantities[value]) {
                Object.keys(transfersQuantities).forEach(x => removeTransferQuantities(x));
            } else {
                Object.keys(transfersQuantities).forEach(x => addTransferQuantity(x));
            }
        } else {
            if(transfersQuantities[value]) {
                removeTransferQuantities(TransfersQuantities.SHOW_ALL);
                removeTransferQuantities(value);
            } else {
                addTransferQuantity(value);
                const allOtherFlagsAreSet = Object.keys(transfersQuantities)
                                .filter(x => x !== value && x !== TransfersQuantities.SHOW_ALL)
                                .map(x => transfersQuantities[x])
                                .reduce((prev, curr) => prev && curr, true)
                if(allOtherFlagsAreSet){
                    addTransferQuantity(TransfersQuantities.SHOW_ALL);
                }
            }
        }
    };
    return(
        <div className="sidebar">
                    <div className="sidebar_header">
                        КОЛИЧЕСТВО ПЕРЕСАДОК
                    </div>
                    <div className="transfer">
                        <input type="checkbox" checked={transfersQuantities.SHOW_ALL} onChange={onCheckboxChange(TransfersQuantities.SHOW_ALL)} />Все
                    </div>
                    <div className="transfer">
                        <input type="checkbox" checked={transfersQuantities.WITHOUT_TRANSFERS} onChange={onCheckboxChange(TransfersQuantities.WITHOUT_TRANSFERS)} />Без пересадок
                    </div>
                    <div className="transfer">
                        <input type="checkbox" checked={transfersQuantities.ONE_TRANSFER} onChange={onCheckboxChange(TransfersQuantities.ONE_TRANSFER)} />1 пересадка
                    </div>
                    <div className="transfer">
                        <input type="checkbox" checked={transfersQuantities.TWO_TRANSFERS} onChange={onCheckboxChange(TransfersQuantities.TWO_TRANSFERS)} />2 пересадки
                    </div>
                    <div className="transfer">
                        <input type="checkbox" checked={transfersQuantities.THREE_TRANSFERS} onChange={onCheckboxChange(TransfersQuantities.THREE_TRANSFERS)} />3 пересадки
                    </div>
                </div>
    )
}

const mapStateToProps = state => ({
    transfersQuantities: state.transfersQuantities
});

const mapDispatchToProps = {
    addTransferQuantity,
    removeTransferQuantities
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);