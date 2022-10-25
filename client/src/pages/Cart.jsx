import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BagCard from '../components/BagCard';
import Button from '../components/Button';
function Cart() {
	const [items, setItems] = useState([]);
	const [total, setTotal] = useState(200);
	const token = JSON.parse(atob(localStorage.getItem('token').split('.')[1]));
	useEffect(() => {
		axios
			.post('http://localhost:3000/api/user/cart', { id: token._id })
			.then((data) => {
				console.log(data.data[0].cart);
				setItems(data.data[0].cart);
			});
		// items.forEach(((item)=>{
		// 	console.log(total)
		// 	setTotal((prevValue)=> prevValue+parseInt(item.price))
		// }))
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
			notes: {
				address: 'Razorpay Corporate Office',
			},
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
	const handlePayment = async () => {
		try {
			const orderURL = 'http://localhost:3000/api/payment/order';
			const { data } = await axios.post(orderURL, { amount: total });
			console.log(data);
			initPayment(data.data);
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
						<div onClick={handlePayment}>
							<Button content='Buy Now' />
						</div>
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
