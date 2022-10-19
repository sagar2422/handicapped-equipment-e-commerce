import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaGoogle } from 'react-icons/fa';

function CreateAccount() {
	const [data, setData] = useState({
		name: '',
		email: '',
		password: '',
	});
	const navigate = useNavigate();
	function handleChange({currentTarget: input}) {
		setData({...data,[input.name]:[input.value]});
		console.log(data);
	}
	async function handleSubmit(e) {
		e.preventDefault();
		try{
			const url = 'http://localhost:3000/api/user/register/';
			const {data: res} = await axios.post(url,{
				name:data.name[0],
				email:data.email[0],
				password:data.password[0],
			});
			navigate('/login');
			console.log(res.messsage);
		} catch(err) {
			console.log(err);
		}
	}
	return (
		<div className=' flex justify-center  '>
			<div className='mt-4 flex flex-col bg-white p-10 m-6 justify-between w-1/3 h-140 bg-indigo-500 shadow-lg shadow-indigo-500/50 rounded-xl md:w-1/3 h-90  sm:h-90'>
				<div className='flex flex-row justify-center mb-5 '>
					<h1>Register</h1>
				</div>
				<form className='flex flex-col' onSubmit={handleSubmit}>
					<label htmlFor='name' className='font-bold mb-1 m-4'>
						Name
					</label>
					<input
						type='text'
						name='name'
						value={data.name}
						onChange={handleChange}
						placeholder='Enter your Name'
						required
						className='h-12 w-120 m-2 mt-1 border-black border-2 rounded p-2 w-100 mt-1/2'
					/>
					<label htmlFor='email' className='font-bold mb-1 m-4'>
						Email Address
					</label>
					<input
						type='email'
						name='email'
						onChange={handleChange}
						value={data.email}
						placeholder='Enter your Email'
						required
						className='h-12 w-120 m-2 mt-1 border-black border-2 rounded p-2 w-100 mt-1/2'
					/>
					<label htmlFor='password' className='font-bold mb-1 m-4 '>
						Password
					</label>
					<input
						type='password'
						name='password'
						onChange={handleChange}
						value={data.password}
						placeholder='Enter 6 character or more '
						required
						className='h-12 m-2 mt-1 w-120 border-black border-2 rounded p-2  w-100 mt-1/2'
					/>
					<div className='flex flex-row justify-center'>
						<button type='submit' className='h-10 w-80 text-white rounded mt-4  p-2 bg-dark-purple font-white fond-bold border-2 border-purple bg-indigo-600 shadow-lg shadow-indigo-500/50'>
							Sign Up
						</button>
					</div>
					<div className='flex flex-row justify-center text-base md:text-sm mb-4 mt-2'>
						<p>--- OR sign up with ---</p>
					</div>
					<div className='flex flex-row justify-center '>
						<button className='flex'>
							<FaGoogle className='m-6' size={45}></FaGoogle>{' '}
							Google
						</button>
					</div>
				</form>
				<Link to='/login'>
					<p className='m-2 text-base md:text-sm text-center'>
						Already have an account?
						<span className='text-blue-300'> Login</span>
					</p>
				</Link>
			</div>
		</div>
	);
}

export default CreateAccount;
