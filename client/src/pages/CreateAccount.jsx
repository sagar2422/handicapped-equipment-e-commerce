import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {IoMdClose} from 'react-icons/io';


function CreateAccount() {
	const [data, setData] = useState({
		name: '',
		email: '',
		password: '',
	});
	const [error,setError] = useState('');
	const navigate = useNavigate();
	function handleChange({currentTarget: input}) {
		setError('');
		setData({...data,[input.name]:[input.value]});
		console.log(data);
	}
	async function handleSubmit(e) {
		e.preventDefault();
		try{
			const url = `${import.meta.env.VITE_PROXY}/api/user/register/`;
			const {data: res} = await axios.post(url,{
				name:data.name[0],
				email:data.email[0],
				password:data.password[0],
			});
			navigate('/login');
			console.log(res.messsage);
		} catch(err) {
			console.log(err);
			setError(err.response.data.message);
		}
	}
	return (
		<div className=' flex flex-col align-middle items-center justify-center w-full'>
		{error !== '' ? <div className='flex align-middle justify-center items-center gap-2 cursor-pointer align-start md:w-[5/6] bg-dark-purple text-white md:px-8 md:py-4 rounded-md shadow-md' onClick={()=>setError('')}>{error} <IoMdClose size={30}/></div>:<div></div>}

			<div className='mt-4 flex flex-col bg-white p-4 md:p-10 md:m-6 justify-between md:w-1/3 md:h-140 shadow-md rounded-md md:h-90'>
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
						className='h-12 md:w-120 m-2 mt-1 border-black border-2 rounded p-2 mt-1/2'
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
						className='h-12 md:w-120 m-2 mt-1 border-black border-2 rounded p-2 md:w-100 mt-1/2'
					/>
					<label htmlFor='password' className='font-bold mb-1 m-4 '>
						Password
					</label>
					<input
						type='password'
						name='password'
						onChange={handleChange}
						value={data.password}
						placeholder='Enter 8 character or more '
						required
						className='md:h-12 m-2 mt-1 md:w-120 border-black border-2 rounded p-2  w-100 mt-1/2'
					/>
					<div className='flex flex-row justify-center'>
						<button type='submit' className='md:h-10 md:w-80 text-white rounded mt-4  p-2 bg-dark-purple font-white fond-bold border-2 border-purple bg-indigo-600 shadow-lg shadow-indigo-500/50'>
							Sign Up
						</button>
					</div>
				</form>
				<Link to='/login'>
					<p className='m-2 text-base md:text-sm text-center'>
						Already have an account?
						<span className='text-dark-purple'> Login</span>
					</p>
				</Link>
			</div>
		</div>
	);
}

export default CreateAccount;
