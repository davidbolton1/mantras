import React, {Component} from 'react';


function MantraList({
    mantras
}) {
    console.log(mantras)

    return (
        <div>
            <ul>
                {mantras.map( (m, i) => (
                    <li key={i}>{m}</li>
                ))}
            </ul>
        </div>
    )
}
export default MantraList