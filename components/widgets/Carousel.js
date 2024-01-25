import React, { useState, useEffect } from 'react';
import Swipe from 'react-easy-swipe';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

export default function CarouselDefault({ images }) {
	const [currentSlide, setCurrentSlide] = useState(0);

	const handleNextSlide = () => {
		let newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
		setCurrentSlide(newSlide);
	};

	const handlePrevSlide = () => {
		let newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
		setCurrentSlide(newSlide);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			handleNextSlide();
		}, 3000);

		return () => clearInterval(interval);
	}, [currentSlide]);

	return (
		<div className="relative">
			<AiOutlineLeft
				onClick={handlePrevSlide}
				className="absolute left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
			/>
			<div className="w-full h-auto flex overflow-hidden m-auto">
				<Swipe
					onSwipeLeft={handleNextSlide}
					onSwipeRight={handlePrevSlide}
					className="relative z-10 w-full h-full"
				>
					{images.map((image, index) => {
						if (index === currentSlide) {
							return (
								<img
									key={index}
									src={image}
									content="contain"
									className="animate-fadeIn w-full h-full fill contain"
									alt={`Slide ${index}`}
								/>
							);
						}
						return null;
					})}
				</Swipe>
			</div>
			<AiOutlineRight
				onClick={handleNextSlide}
				className="absolute right-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
			/>

			<div className="relative flex justify-center p-2">
				{images.map((_, index) => {
					return (
						<div
							className={
								index === currentSlide
									? 'h-4 w-4 bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer'
									: 'h-4 w-4 bg-gray-300 rounded-full mx-2 mb-2 cursor-pointer'
							}
							key={index}
							onClick={() => {
								setCurrentSlide(index);
							}}
						/>
					);
				})}
			</div>
		</div>
	);
}
