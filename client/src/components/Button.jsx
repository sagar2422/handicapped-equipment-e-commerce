import React from 'react';

function Button({content}) {
    return(
        <button className='bg-dark-purple text-white font-bold px-8 py-4 mx-2 rounded-md '>{content}</button>
    )
}

export default Button;