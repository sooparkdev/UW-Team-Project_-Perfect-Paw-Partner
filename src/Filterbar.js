import React, { useState } from 'react';

function FilterBar(props) {
    const { state, onChange } = props

    return (
        <>
        {props.showFilterDropdown && 
            <div className="filters">
                <h1>Filter</h1>
                <form>
                    {Object.keys(state).map((key, i) => {
                        return (
                            <div key={i}>
                                <h2>{key}</h2>
                                {Object.keys(state[key]).map((field, j) => {
                                    return (
                                        <label key={j}>{field} 
                                            <input
                                                name={field}
                                                type="checkbox"
                                                checked={state[key][field]}
                                                onChange={e => onChange(key, field, !e.target.checked)}
                                            />
                                        </label>
                                    )
                                })}
                            </div>
                        )
                    })}
                </form>
            </div>
        }
        </>
    )
}
export default FilterBar;