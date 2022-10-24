export const LoadingCard = () => {
	return (
		<div className='transition-all w-full rounded-md overflow-hidden shadow-lg m-2 hover:scale-105'>
			<div className='w-full h-64 bg-white animate-pulse'></div>
			<div className='px-6 py-4 items-center'>
				<div className='text-xl mb-2 w-40 h-8 bg-dark-purple animate-pulse'></div>
			</div>
		</div>
	);
};

export const LoadingPosts = () => {
	const loadPages = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 content-start m-40'>
			{loadPages.map((num) => {
				return <LoadingCard key={num} />;
			})}
		</div>
	);
};
