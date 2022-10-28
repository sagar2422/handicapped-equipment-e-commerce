import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BagCard from '../components/BagCard';
import Button from '../components/Button';
function Cart() {
	const [items, setItems] = useState([]);
	const [address,setAddress] = useState('');
	const [total, setTotal] = useState(0);
	const navigate = useNavigate();
	const token = JSON.parse(atob(localStorage.getItem('token').split('.')[1]));
	useEffect(() => {
		axios
			.post('http://localhost:3000/api/user/cart', { id: token._id })
			.then((data) => {
				console.log(data.data);
				setItems(data.data[0].cart);
				data.data[0].cart.forEach((item) => {
					console.log(total, item.price);
					setTotal((prevValue) => prevValue + parseInt(item.price));
				});
			});
	}, []);
	const initPayment = (data) => {
		const options = {
			key: 'rzp_test_lJ1zG8Sfu6QSEb',
			amount: total,
			currency: data.currency,
			description: 'Test Transaction',
			order_id: data.id,
			handler: async (response) => {
				try {
					const verifyUrl =
						'http://localhost:3000/api/payment/paymentVerify';
					const { data } = await axios.post(verifyUrl, response);
					console.log(data);
					alert(data.message);
				} catch (error) {
					console.log(error);
				}
			},
			// callback_url: "http://localhost:3001/api/payment/paymentVerify",
			// handler: function (response){
			//     alert(response.razorpay_payment_id);
			//     alert(response.razorpay_order_id);
			//     alert(response.razorpay_signature)
			// },
			// prefill: {
			// 	//sample name,email,contact;
			// 	name: 'Gaurav Kumar',
			// 	email: 'gaurav.kumar@example.com',
			// 	contact: '9999999999',
			// },
			// notes: {
			// 	address: 'Razorpay Corporate Office',
			// },
			theme: {
				color: '#3399cc',
			},
		};
		const rzp1 = new window.Razorpay(options);
		rzp1.on('payment.failed', function (response) {
			alert(response.error.code);
			alert(response.error.description);
			alert(response.error.source);
			alert(response.error.step);
			alert(response.error.reason);
			alert(response.error.metadata.order_id);
			alert(response.error.metadata.payment_id);
		});
		rzp1.open();
	};
	const handleBuy = async (e) => {
		e.preventDefault();
		try {
			const orderURL = 'http://localhost:3000/api/payment/order';
			const { data } = await axios.post(orderURL, { amount: total });
			const itemIds = items.map((item) => item._id);
			console.log(itemIds);
			const createOrder = await axios.post(
				'http://localhost:3000/api/user/orders/add',
				{ id: token._id, productIds: itemIds, address:address }
			);
			console.log(data);
			initPayment(data.data);
			navigate('/user');
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className='flex flex-col'>
			<div className='text-4xl font-bold md:mx-40 mx-20 mt-20'>Cart</div>
			{items.length !== 0 ? (
				<div className='grid grid-cols-1  md:grid-cols-2 gap-8 px-20 py-5 md:px-40 md:py-10'>
					<div className='flex flex-col'>
						{items.map((item, index) => {
							return (
								<BagCard
									key={index}
									id={item._id}
									name={item.name}
									price={item.price}
									image={item.image}
								/>
							);
						})}
					</div>
					<div className='text-4xl font-bold px-20'>
						Total
						<p>{total}</p>
						<form onSubmit={handleBuy}>
							<div className='flex flex-col'>
							<label htmlFor='address' className='text-dark-purple text-sm m-4'>Address</label>
							<textarea
								type='text'
								id='address'
								className='h-40 w-80 text-sm align-top p-4 whitespace-normal font-normal'
								placeholder='Address'
								value={address}
								required
								onChange={(input)=>{
									setAddress(input.target.value)
								}}
							/>
							</div>
							<Button content='Buy Now' />
						</form>
					</div>
				</div>
			) : (
				<div className='flex items-center justify-center align-middle m-20 md:m-40'>
					<h1>No items in the cart</h1>
				</div>
			)}
		</div>
	);
}

export default Cart;
