import React, { useState } from 'react';

function FilterBar(props) {
    const { state, onChange } = props

    return (
        <>
        {props.showFilterDropdown && 
        <FilterBar3 state={state} onChange={onChange}/>}
        </>
    )
}

function FilterBar3 (props) {
    let var3 = Object.keys(props.state).map((val, i) => {
        return <FilterBar2 key={i} val={val} i={i} state={props.state} onChange={props.onChange}/>
    });

    return (
        <div className="filters">
            <h1>Filter</h1>
            <form>
                {var3}
            </form>
        </div>
    );
}

function FilterBar2 (props) {
    let var2 = Object.keys(props.state[props.val]).map((field, j) => {
            return (<FilterBar1 key={j} val={props.val} j={j} field={field} state={props.state} onChange={props.onChange}/>)
    });
     
    return (
        <div key={props.i}>
            <h2>{props.val}</h2>
            {var2}
        </div>
    );
}

function FilterBar1 (props) {
    return (
        <label key={props.j}>
            {props.field}
            <input
                name={props.field}
                type="checkbox"
                checked={props.state[props.val][props.field]}
                onChange={e => props.onChange(props.val, props.field, !e.target.checked)}
                
            />
        </label>
    );
}

export default FilterBar;