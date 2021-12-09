import React from 'react';
import  { VisibilityFilters } from '../../common';
import './Filters.css';
import { setVisibilityFilter } from '../../actions';
import { connect } from 'react-redux';

function Filters({visibilityFilter, setVisibilityFilter}) {
    const onButtonClick = filterValue => () => setVisibilityFilter(filterValue);
    return (
        <div className="tabs">
            <button onClick={onButtonClick(VisibilityFilters.SHOW_CHEAP)} className={`tabs_btn ${visibilityFilter === VisibilityFilters.SHOW_CHEAP ? "current" : ""}`}>САМЫЙ ДЕШЕВЫЙ</button>
            <button onClick={onButtonClick(VisibilityFilters.SHOW_FAST)} className={`tabs_btn ${visibilityFilter === VisibilityFilters.SHOW_FAST ? "current" : ""}`}>САМЫЙ БЫСТРЫЙ</button>
            <button onClick={onButtonClick(VisibilityFilters.SHOW_OPTIMAL)} className={`tabs_btn ${visibilityFilter === VisibilityFilters.SHOW_OPTIMAL ? "current" : ""}`}>ОПТИМАЛЬНЫЙ</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        visibilityFilter: state.visibilityFilter
    }
}

const mapDispatchToProps = {
    setVisibilityFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);