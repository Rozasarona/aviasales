import { render } from '@testing-library/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  { VisibilityFilters } from '../../common';
import './Filters.css';
import { setVisibilityFilter } from '../../actions';
import { connect } from 'react-redux';

function Filters({visibilityFilters}) {
    //const filterValue = useSelector(state => state.value.VisibilityFilter);
    //console.log(filterValue);
    debugger;
    const dispatch = useDispatch();
    const onClick = (value) => {
        debugger;
        dispatch(setVisibilityFilter(VisibilityFilters.SHOW_CHEAP));
    }
    return (
        <div className="tabs">
                    <button onClick={() => onClick(VisibilityFilters.SHOW_CHEAP)} className={`tabs_btn ${visibilityFilters === VisibilityFilters.SHOW_CHEAP ? "current" : ""}`}>САМЫЙ ДЕШЕВЫЙ</button>
                    <button onClick={() => onClick(VisibilityFilters.SHOW_FAST)} className={`tabs_btn ${visibilityFilters === VisibilityFilters.SHOW_FAST ? "current" : ""}`}>САМЫЙ БЫСТРЫЙ</button>
                    <button onClick={() => onClick(VisibilityFilters.SHOW_OPTIMAL)} className={`tabs_btn ${visibilityFilters === VisibilityFilters.SHOW_OPTIMAL ? "current" : ""}`}>ОПТИМАЛЬНЫЙ</button>
                </div>
    )
}

const mapStateToProps = (state) => {
    return {
        visibilityFilters: state.VisibilityFilters
    }
}

export default connect(mapStateToProps)(Filters);