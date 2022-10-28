import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminUserCard from '../../components/AdminUserCard';

function Users() {
	const [users, setUsers] = useState([]);
	const navigate = useNavigate();
	const token = localStorage.getItem('token');
	useEffect(() => {
		if (token) {
			const user = JSON.parse(atob(token.split('.')[1]));
			console.log(user);
			if (!user.admin) {
				navigate('/404');
			} else {
				axios
					.post(`${import.meta.env.VITE_PROXY}/admin/getUsers`)
					.then((data) => {
						setUsers(data.data);
					});
			}
		}
	}, []);
	return (
		<div className='m-10 md:m-20'>
			<div>
				<div className='py-4'>
					<div className='p-8'>
						<h2>All Users</h2>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 '>
						{users
                        .filter((user)=> {
                            if(!user.admin) {
                                return user;
                            }
                        })
                        .map((user) => {
							return (
								<AdminUserCard
									key={user._id}
									id={user._id}
									name={user.name}
									email={user.email}
									createdAt={user.createdAt}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Users;
