import React from "react";
import _map from 'lodash/map';

const SelectedOptions = (selectedOptions, removable) => {
    return (
        <>
            {_map(selectedOptions, selectedOption => {
                const {title} = selectedOption;
                return (<div> {title}</div>)
            })}
        </>
    )
}

export default SelectedOptions;
