import React from 'react';
import './Loader.css';

function Loader({ visible }) {
    return (visible && <div className="lds-ring"><div></div><div></div><div></div><div></div></div>);
}

export default Loader; 