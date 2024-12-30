import React from 'react';
import dummyApidata from '../asset/apidata';

const Card = () => {
	const { title, description, imageUrl } = dummyApidata;
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
			{dummyApidata.map((item, index) => {
				return (
					<div
						key={index}
						className="max-w-xs rounded overflow-hidden shadow-lg p-1 "
					>
						<div className='flex justify-center'>
							<img
								src="https://th.bing.com/th/id/R.913becf9f884742c3bae5764e35ae12b?rik=zxv5oidL7n59fQ&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f2%2f9%2f7%2f494243.jpg&ehk=jbHEDfWJ%2fvfSK7S0gPqDY4mLwcyroJZp5ma9w4jrfOw%3d&risl=&pid=ImgRaw&r=0"
								className="  h-40 object-contain mt-2 rounded-lg bg-slate-200"
							/>
						</div>
						<div className="px-6 py-4">
							<div className="font-bold text-xl mb-2">
								<h1>{item.title}</h1>
							</div>
							<p className="text-gray-700 text-base line-clamp-2">{item.description}</p>
							<div className="flex justify-between mt-4">
								<span>
									<strong>$</strong> {item.price}
								</span>
								<span>{ item.rating}</span>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Card;
