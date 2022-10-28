import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import AdminProductCard from '../../components/AdminProductCard';

function AdminOrder() {
	const { id } = useParams();
	const [order, setOrder] = useState({});
	const [user, setUser] = useState({});
	const [products, setProducts] = useState([]);
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
					.post(
						`${import.meta.env.VITE_PROXY}/api/user/orders/order`,
						{ id: id }
					)
					.then(async (data) => {
						console.log(data.data);
						setOrder(data.data[0]);
                    await axios.post(`${import.meta.env.VITE_PROXY}/api/user/UserData`, {
						id: data.data[0].userId,
					})
					.then((data) => {
						console.log(data.data[0]);
						setUser(data.data[0]);
					});
						setProducts(data.data[0].products);
					});
			}
		}
	}, []);
	return (
		<div className='m-10 md:m-20'>
			<h1>Order ID: {order._id}</h1>
			<div className='p-4'>
				<div className='p-4'>
					<h2>User Details</h2>
                    <p>
						User ID:
						<span className='font-bold'> {user._id}</span>
					</p>
					<p>
						Name:
						<span className='font-bold'> {user.name}</span>
					</p>
                    <p>
						Email:
						<span className='font-bold'> {user.email}</span>
					</p>

				</div>
				<div className='p-4'>
					<h2>Order Details</h2>
					<p>
						Address :
						<span className='font-bold'> {order.address}</span>
					</p>
				</div>
				<div className='p-4'>
					<h2>Products: </h2>
					<div className='grid grid-cols-1 xl:grid-cols-2 gap-4'>
						{products.map((product) => {
							return (
								<AdminProductCard
									key={product._id}
									id={product._id}
									name={product.name}
									image={product.image}
									price={product.price}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default AdminOrder;
