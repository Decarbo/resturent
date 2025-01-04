import React, { useEffect, useState } from 'react';
import { carouselData } from '../asset/apidata';
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
const Crousel = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	const handleNext = () => {
		setActiveIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
	};

useEffect(() => {
     setInterval(() => {
        handleNext();
    }, 3000);

}, [carouselData]);
	const handlePrev = () => {
		setActiveIndex((prevIndex) => (prevIndex - 1 + carouselData.length) % carouselData.length);
	};

	return (
		<div className="relative w-full h-[50vh] rounded-lg ">
			{carouselData.map((item, index) => (
				<div
					key={item.id}
					className={`absolute top-0 left-0 w-full h-full ${activeIndex === index ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 ease-in-out`}
				>
					<img
						src={item.image}
						alt={item.alt}
						className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
					/>
				</div>
			))}
			<button
				onClick={handlePrev}
				className="absolute right-0 bottom-0 bg-orange-400 m-1 p-1  text-lg cursor-pointer rounded-full"
			>
			<GrFormPrevious />
			</button>
			<button
				onClick={handleNext}
				className="absolute bottom-8 right-0 bg-orange-400 m-1 p-1   text-lg cursor-pointer rounded-full"
			>
				<MdNavigateNext />
			</button>
		</div>
	);
};

export default Crousel;
