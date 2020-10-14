import React from "react";
import _size from 'lodash/size';

const NoResult = query =>{
    return
}
const Options = ({options, onChange, query}) => {
    if (_size(options) === 0) {

    }

    return ((
        <div className="autoContainer">
            {options
                .map((value, index) => {
                    return (
                        <div
                            onClick={onChange}
                            className="option"
                            key={index}
                            tabIndex="0"
                        >
                            <span>{value.name}</span>
                            <img src={value.Poster} alt="poster"/>
                        </div>
                    );
                })}
        </div>))
}