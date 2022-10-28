import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';
import axios from 'axios';

function Login() {
	const [data, setData] = useState({
		email: '',
		password: '',
	});
	const [error, setError] = useState('');
	function handleChange({ currentTarget: input }) {
		setError('');
		setData({ ...data, [input.name]: [input.value] });
		console.log(data);
	}
	async function handleSubmit(e) {
		e.preventDefault();
		try {
			const url = 'http://localhost:3000/api/user/auth/login/';
			const { data: res } = await axios.post(url, {
				email: data.email[0],
				password: data.password[0],
			});
			console.log(res);

			localStorage.setItem('token', res.data);

			const user = await JSON.parse(atob(res.data.split('.')[1]));
			if (user.admin) {
				window.location.href = '/admin';
			} else {
				window.location.href = '/';
			}
		} catch (err) {
			console.log(err);
			setError(err.response.data.message);
		}
	}

	return (
		<div className=' flex flex-col align-middle items-center justify-center'>
			{error !== '' ? (
				<div
					className='flex align-middle justify-center items-center gap-2 cursor-pointer align-start w-[5/6] bg-dark-purple text-white px-8 py-4 rounded-md shadow-md'
					onClick={() => setError('')}
				>
					{error} <IoMdClose size={30} />
				</div>
			) : (
				<div></div>
			)}
			<div className='m-4 flex flex-col bg-white p-2 md:p-10 md:m-6 justify-between shadow-md rounded-md '>
				<div className='flex flex-row justify-center mb-5 '>
					<h1>Login</h1>
				</div>
				<form className='flex flex-col' onSubmit={handleSubmit}>
					<label htmlFor='email' className='font-bold mb-1 m-4'>
						Email Address
					</label>
					<input
						type='text'
						name='email'
						value={data.email}
						onChange={handleChange}
						required
						placeholder='Enter your Email'
						className='h-12 w-120 m-2 mt-1 border-black border-2 rounded p-2 w-100 mt-1/2'
					/>
					<label htmlFor='password' className='font-bold mb-1 m-4 '>
						Password
					</label>
					<input
						type='password'
						name='password'
						value={data.password}
						onChange={handleChange}
						required
						placeholder='Enter 6 character or more '
						className='h-12 m-2 mt-1 w-120 border-black border-2 rounded p-2  w-100 mt-1/2'
					/>
					<div className='flex flex-row justify-center'>
						<button
							type='submit'
							className='md:h-10 md:w-80 text-white rounded mt-4  p-2 bg-dark-purple font-white fond-bold border-2 border-purple bg-indigo-600 shadow-lg shadow-indigo-500/50'
						>
							Login
						</button>
					</div>
				</form>
				<Link to='/signup'>
					<p className='m-2 text-base md:text-sm text-center'>
						Don't Have an account?
						<span className='text-dark-purple'> Sign Up</span>
					</p>
				</Link>
			</div>
		</div>
	);
}

export default Login;
