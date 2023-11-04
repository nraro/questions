import React from 'react';

type TsProps = {
    title: string,
    text?: string
}

const TsCompTest = ({title, text}: TsProps) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    )
}

export default TsCompTest;
