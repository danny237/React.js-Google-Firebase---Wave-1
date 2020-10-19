import React from 'react'

export default function Home({name}) {
    const {first, second} = name;
    var isName = true;

    return (
        <div>
            <h1>
                Hello, {(isName === true)?first:second}
            </h1>
        </div>
    )
}
