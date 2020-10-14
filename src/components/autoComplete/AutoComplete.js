import React,{useState, useEffect, useRef} from "react";

const AutoComplete = ({options,optionsRenderer, onChange, selectedOptions}) => {
    const [display, setDisplay] = useState(false);
    const wrapperRef = useRef(null);

    useEffect(() => {
        window.addEventListener("mousedown", handleClickOutside);
        return () => {
            window.removeEventListener("mousedown", handleClickOutside);
        };
    });

    const handleClickOutside = event => {
        const { current: wrap } = wrapperRef;
        if (wrap && !wrap.contains(event.target)) {
            setDisplay(false);
        }
    };
    return (
        <div ref={wrapperRef} className="flex-container flex-column pos-rel">
            <input
                id="auto"
                onClick={() => setDisplay(!display)}
                placeholder="Type to search"
                value={search}
                onChange={event => setSearch(event.target.value)}
            />
            {display && (
                <div className="autoContainer">
                    {options
                        .filter(({ name }) => name.indexOf(search.toLowerCase()) > -1)
                        .map((value, i) => {
                            return (
                                <div
                                    className="option"
                                    key={i}
                                    tabIndex="0"
                                >
                                    <span>{value.name}</span>
                                    <img src={value.sprite} alt="pokemon" />
                                </div>
                            );
                        })}
                </div>
            )}
        </div>
    );
};