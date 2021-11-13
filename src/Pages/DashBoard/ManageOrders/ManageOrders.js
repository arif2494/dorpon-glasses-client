import React, { useEffect, useState } from 'react';
import useToast from '../../../hooks/useToast';
const ManageOrders = () => {
	const [ orders, setOrders ] = useState([]);
	const { notify, toaster } = useToast();
	useEffect(() => {
		fetch('http://localhost:5000/orders').then((res) => res.json()).then((data) => setOrders(data));
	}, []);
	// toaster

	// ship an order
	const shippedOrder = (id) => {
		console.log(id);
		const uri = `http://localhost:5000/order/${id}`;
		fetch(uri, {
			method: 'PUT'
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount > 0) {
					notify('success', 'Product Shipped');
					setTimeout(() => {
						window.location.reload();
					}, 2000);
				}
			});
	};
	// cancel an order
	const handleCancelOrder = (id) => {
		const confirm = window.confirm('Are you sure you want to cancel this order?');
		if (confirm) {
			const url = `http://localhost:5000/order/cancel/${id}`;
			fetch(url, {
				method: 'DELETE'
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.deletedCount > 0) {
						notify('error', 'Order Cancled');
						setTimeout(() => {
							window.location.reload();
						}, 2000);
					}
				});
		}
	};
	return (
		<div>
			<div className="my-6">
				<h1 className="text-center text-3xl font-thin">Manage Orders</h1>
			</div>
			{/* show all orders */}
			<div>
				<div className="container mx-auto">
					<div className="flex flex-col">
						<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
							<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
								<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
									<table className="min-w-full divide-y divide-gray-200">
										<thead className="bg-gray-50">
											<tr>
												<th
													scope="col"
													className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
												>
													Name
												</th>
												<th
													scope="col"
													className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
												>
													Title & Address
												</th>
												<th
													scope="col"
													className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
												>
													Status
												</th>
												<th
													scope="col"
													className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
												>
													Price
												</th>
												<th
													scope="col"
													className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
												>
													Cancel
												</th>
											</tr>
										</thead>
										<tbody className="bg-white divide-y divide-gray-200">
											{orders.map((order) => (
												<tr key={order._id}>
													<td className="px-6 py-4 whitespace-nowrap">
														<div className="flex items-center">
															<div className="flex-shrink-0 h-10 w-10">
																<img
																	className="h-10 w-10 rounded-full"
																	src={order.img}
																	alt=""
																/>
															</div>
															<div className="ml-4">
																<div className="text-sm font-medium text-gray-900">
																	{order.name}
																</div>
																<div className="text-sm text-gray-500">
																	{order.email}
																</div>
															</div>
														</div>
													</td>
													<td className="px-6 py-4 whitespace-nowrap">
														<div className="text-sm text-gray-900">{order.productName}</div>
														<div className="text-sm text-gray-500">{order.address}</div>
													</td>
													<td className="px-6 py-4 whitespace-nowrap">
														{order.status ? (
															<button className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-green-800">
																{order.status ? order.status : 'Pending'}
															</button>
														) : (
															<button
																onClick={() => shippedOrder(order._id)}
																className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-green-800"
															>
																{order.status ? order.status : 'Pending'}
															</button>
														)}
													</td>
													<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
														{order.productPrice}
													</td>
													<td className="px-6 py-4 whitespace-nowrap">
														<button
															onClick={() => handleCancelOrder(order._id)}
															className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-green-800"
														>
															Cancel
														</button>
													</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{toaster()}
		</div>
	);
};

export default ManageOrders;
