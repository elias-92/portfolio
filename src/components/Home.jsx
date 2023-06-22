import React from 'react';
import fotoPerfil from '../assets/img/fotoPerfil.jpg';

const Home = () => {
	return (
		<section id="Home" className="relative w-full pt-20">
			<div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:py-0 md:flex-row md:gap-8">
				<div className="flex gap-4 flex-col justify-center items-center h-[85%] md:h-full order-2 md:order-1 md:items-start">
					<h1 className="text-4xl md:text-6xl font-bold mb-2 mt-3 md:mt-0 md:mb-4">
						I'm Elias Martinez
					</h1>
					<h2 className="rounded-md bg-primary-color/20 max-w-max px-6 py-2 text-xl md:text-3xl lg:text-4xl font-semibold">
						Front-end Developer
					</h2>
					<p className="py-4 max-x-md text-justify">
						Certified by Coder House, recognized online education platform,
						where I graduated as a Frontend Developer with React. I'm excited to
						share the knowledge and skills I've acquired along the way. Thank
						you for visiting my portfolio and being part of my journey!
					</p>
					<div>
						<a
							href="/CV_Elias_Martinez.pdf"
							download="CV_Elias_Martinez.pdf"
							className="group font-semibold w-fit px-6 py-3 my-2 flex items-center rounded-md text-black bg-gradient-to-t from-green-400 to-primary-color cursor-pointer mx-auto md:mx-0 hover:scale-105 duration-100"
						>
							Download CV
						</a>
					</div>
				</div>
				<div className="flex order-1 md:order-2 mt-8 md:mt-0">
					<img
						src={fotoPerfil}
						alt="Foto Perfil"
						className="mb-2 rounded-[50%] mx-auto w-2/3 max-w-lg md:max-w-sm object-cover md:w-[70rem] shadow-xl shadow-primary-color/60"
					/>
				</div>
			</div>
		</section>
	);
};

export default Home;
