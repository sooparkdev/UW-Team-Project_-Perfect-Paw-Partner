import React, { useState } from 'react';

function FilterBar(props) {
    const { state, onChange } = props

    return (
        <>
        {props.showFilterDropdown && 
        <FilterBar3 state={state} onChange={onChange}/>
            // <div className="filters">
            //     <h1>Filter</h1>
            //     <form>
            //         {Object.keys(state).map((key, i) => {
            //             return (
            //                 <div key={i}>
            //                     <h2>{key}</h2>
            //                     {Object.keys(state[key]).map((field, j) => {
            //                         return (
            //                             <label key={j}>{field} 
            //                                 <input
            //                                     name={field}
            //                                     type="checkbox"
            //                                     checked={state[key][field]}
            //                                     onChange={e => onChange(key, field, !e.target.checked)}
            //                                 />
            //                             </label>
            //                         )
            //                     })}
            //                 </div>
            //             )
            //         })}
            //     </form>
            // </div>
        }
        </>
    )
}

function FilterBar3 (props) {
    
    let var3 = Object.keys(props.state).map((key) => {
        // console.log(key)

        return <FilterBar2 value={key} state={props.state} onChange={props.onChange}/>
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
    // console.log(props.value);

    let var2 = Object.keys(props.state[props.value]).map((field, j) => {
            return (<FilterBar1 value={j} field={field} state={props.state} onChange={props.onChange}/>)
    });
    

        
    return (
        <div key={props.value}>
            <h2>{props.value}</h2>
            {var2}
        </div>
    );
}

function FilterBar1 (props) {
    let variable = props.value>props.field
    console.log(variable)
    return (
        <label key={variable}>
            <input
                name={props.field}
                type="checkbox"
                checked={props.state[variable][props.field]}
                onChange={e => props.onChange(variable, props.field, !e.target.checked)}
                
            />
        </label>
    );
}

    


export default FilterBar;