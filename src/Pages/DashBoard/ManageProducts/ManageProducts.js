import React, { useEffect, useState } from 'react';
import useToast from '../../../hooks/useToast';

const ManageProducts = () => {
	const [ products, setProducts ] = useState([]);
	const { notify, toaster } = useToast();

	useEffect(() => {
		fetch('http://localhost:5000/products').then((res) => res.json()).then((data) => setProducts(data));
	}, []);
	const handleCancelProduct = (id) => {
		const confirm = window.confirm('Are you sure you want to Delete this product?');
		if (confirm) {
			const url = `http://localhost:5000/products/${id}`;
			fetch(url, {
				method: 'DELETE'
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.deletedCount > 0) {
						notify('error', 'Product Deleted Successfully');
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
				<h1 className="text-center text-3xl font-thin">Manage Products</h1>
			</div>

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
													Description
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
											{products.map((product) => (
												<tr key={product._id}>
													<td className="px-6 py-4 whitespace-nowrap">
														<div className="flex items-center">
															<div className="flex-shrink-0 h-10 w-10">
																<img
																	className="h-10 w-10 rounded-full"
																	src={product.image}
																	alt=""
																/>
															</div>
															<div className="ml-4">
																<div className="text-sm font-medium text-gray-900">
																	{product.name}
																</div>
																<div className="text-sm text-gray-500">
																	{new Date(product.date).toDateString()}
																</div>
															</div>
														</div>
													</td>
													<td className="px-6 py-4 whitespace-nowrap">
														<div className="text-sm text-gray-900">
															{product.description.substring(0, 50)}
														</div>
														<div className="text-sm text-gray-500">id: {product._id}</div>
													</td>
													<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
														{product.price}
													</td>
													<td className="px-6 py-4 whitespace-nowrap">
														<button
															onClick={() => handleCancelProduct(product._id)}
															className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-green-800"
														>
															Delete
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

export default ManageProducts;
