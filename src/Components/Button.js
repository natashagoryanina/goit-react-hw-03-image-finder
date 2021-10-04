import React from 'react';

const Button = ({onClick}) => {
    return (
        <button type='submit' onClick={onClick}>Load more</button>
    );
};

export default Button;