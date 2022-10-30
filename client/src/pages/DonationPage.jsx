import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';

function DonationPage() {
	const { id } = useParams();
	const [campaign, setCampaign] = useState({});
	const [product, setProduct] = useState({});
	const [amount, setAmount] = useState(0);
	const [error, setError] = useState('');

	useEffect(() => {
		axios
			.post(`${import.meta.env.VITE_PROXY}/api/campaigns/campaign`, {
				id: id,
			})
			.then((data) => {
				console.log(data.data);
				setCampaign(data.data);
				axios
					.post(`${import.meta.env.VITE_PROXY}/products/product`, {
						id: data.data.productId,
					})
					.then((resp) => {
						console.log(resp.data);
						setProduct(resp.data[0]);
					});
			});
	}, []);
	const initPayment = (data) => {
		const options = {
			key: 'rzp_test_lJ1zG8Sfu6QSEb',
			amount: amount,
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
		if (parseInt(e.target.value) > parseInt(campaign.total) - parseInt(campaign.completedAmount)) {
			setError('Please enter valid amount');
		} else {
            try {
				const orderURL = `${import.meta.env.VITE_PROXY}/api/payment/order`;
				const { data } = await axios.post(orderURL, { amount: amount });
				initPayment(data.data);
			} catch (error) {
				console.log(error);
			}
		}
	};
	return (
		<div className='flex flex-col p-4'>
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
			<div className='flex'>
            <div className='p-4'>
				{product ? (
					<img
						className='max-w-[300px] max-h-[300px] md:max-h-[500px] md:max-w-[500px] rounded-md '
						src={`${import.meta.env.VITE_PROXY}/${product.image}`}
						alt='product image'
					/>
				) : (
					<div className='w-[300px] h-[300px] rounded-md '></div>
				)}
			</div>
			<div className='p-4'>
				<h1>{campaign.title}</h1>
				<hr className='border-t-4 mt-2 text-dark-purple/50' />
				<p>{campaign.description}</p>
				<p className='py-4'>
					Total Amount required:
					<span className='font-bold'> Rs {campaign.total} </span>
				</p>
				<p className='py-4'>
					Donated Amount:
					<span className='font-bold'>
						Rs {campaign.completedAmount}
					</span>
				</p>
				<h3>Donation Progress</h3>
				<span className='font-bold'>
					{(
						(campaign.completedAmount / campaign.total) *
						100
					).toFixed(2)}
					%
				</span>
				<div className='w-full bg-dark-purple rounded-full h-2.5 '>
					<div
						style={{
							width:
								(
									(campaign.completedAmount /
										campaign.total) *
									100
								).toFixed(2) + '%',
						}}
						className='bg-white h-2.5 rounded-full'
					></div>
				</div>
				<form onSubmit={handleBuy}>
					<input
						type='number'
						name='amount'
						id='amount'
						className='rounded-md p-4 focus:outline-none'
						value={amount}
						onChange={(e) => {
							setAmount(e.target.value);
							setError('');
						}}
					/>
					<button className='bg-dark-purple text-white hover:bg-white/0 hover:border-dark-purple hover:border-2 hover:text-dark-purple transition hover:scale-105 font-bold px-8 py-4 mx-2 my-2 rounded-md'>
						Donate
					</button>
				</form>
			</div>
            </div>
		</div>
	);
}

export default DonationPage;
