import React from 'react';

function Button({ content, color }) {
	return (
		<button
			className={` ${
				color
					? 'bg-dark-purple text-white hover:bg-white/0 hover:border-dark-purple hover:border-2 hover:text-dark-purple'
					: 'border-2 border-dark-purple text-dark-purple hover:text-white hover:bg-dark-purple'
			} transition hover:scale-105 font-bold px-8 py-4 mx-2 rounded-md`}
		>
			{content}
		</button>
	);
}

export default Button;
