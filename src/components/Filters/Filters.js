import { render } from '@testing-library/react';
import React from 'react';

function Filters() {

    return (
        <div className="tabs">
                    <button class="tabs_btn">САМЫЙ ДЕШЕВЫЙ</button>
                    <button class="tabs_btn">САМЫЙ БЫСТРЫЙ</button>
                    <button class="tabs_btn">ОПТИМАЛЬНЫЙ</button>
                </div>
    )
}

export default Filters;