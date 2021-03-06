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
                    {/* <h2>Pet Type</h2>
                    <label>Dog 
                        <input
                            name="dog"
                            type="checkbox"
                            checked={dog}
                            onChange={e => setDog(e.target.checked)}
                        />
                    </label>
                    <label>Cat 
                        <input
                            name="cat"
                            type="checkbox"
                            checked={cat}
                            onChange={e => setCat(e.target.checked)}
                        />
                    </label>
                    <h2>Size</h2>
                    <label>Small 
                        <input
                            name="small"
                            type="checkbox"
                            checked={small}
                            onChange={e => setSmall(e.target.checked)}
                        />
                    </label>
                    <label>Medium 
                        <input
                            name="medium"
                            type="checkbox"
                            checked={medium}
                            onChange={e => setMedium(e.target.checked)}
                        />
                    </label>
                    <label>Large 
                        <input
                            name="large"
                            type="checkbox"
                            checked={large}
                            onChange={e => setLarge(e.target.checked)}
                        />
                    </label>

                    <h2>Sex</h2>
                    <label>Male
                        <input
                            name="male"
                            type="checkbox"
                            checked={male}
                            onChange={e => setMale(e.target.checked)}
                        />
                    </label>
                    <label>Female
                        <input
                            name="female"
                            type="checkbox"
                            checked={female}
                            onChange={e => setFemale(e.target.checked)}
                        />
                    </label>



                    <h2>Age</h2>
                    <label>0-1 
                        <input
                            name="age0"
                            type="checkbox"
                            checked={age0}
                            onChange={e => setAge0(e.target.checked)}
                        />
                    </label>
                    <label>2-5
                        <input
                            name="age2"
                            type="checkbox"
                            checked={age2}
                            onChange={e => setAge2(e.target.checked)}
                        />
                    </label>
                    <label>6-10 
                        <input
                            name="age6"
                            type="checkbox"
                            checked={age6}
                            onChange={e => setAge6(e.target.checked)}
                        />
                    </label>
                    <label>11-15 
                        <input
                            name="age11"
                            type="checkbox"
                            checked={age11}
                            onChange={e => setAge11(e.target.checked)}
                        />
                    </label>
                    <label>16+ 
                        <input
                            name="age16"
                            type="checkbox"
                            checked={age16}
                            onChange={e => setAge16(e.target.checked)}
                        />
                    </label> */}
                </form>
            </div>
        }
        </>
    )
}
export default FilterBar;