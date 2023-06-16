import ecommerce from '../assets/img/ecommerce.png';
import hotels from '../assets/img/hotels.png';
import weather from '../assets/img/weather.png';
import gifExpert from '../assets/img/gifExpert.png';

const Projects = () => {
	const projects = [
		{
			id: 1,
			src: hotels,
			name: 'Reservation Hotels',
			code: 'https://github.com/elias-92/reservahotelera',
			webSite: 'https://2023-reserva-hotelera.netlify.app',
		},
		{
			id: 2,
			src: ecommerce,
			name: 'Ecommerce',
			code: 'https://github.com/elias-92/2023-eCommerce',
			webSite: 'https://2023-ecommerce.netlify.app',
		},
		{
			id: 3,
			src: weather,
			name: 'Weather and expense annotation',
			code: 'https://github.com/elias-92/Clima-AnotacionGastos',
			webSite: 'https://elias-92.github.io/Clima-AnotacionGastos/',
		},
		{
			id: 4,
			src: gifExpert,
			name: 'Gifs finder',
			code: 'https://github.com/elias-92/gifExpertApp',
			webSite: 'https://elias-92.github.io/gifExpertApp/',
		},
	];

	const handleClickWebSite = (webSiteUrl) => {
		const newWebSite = window.open(webSiteUrl, '_blank');
		newWebSite.opener = null;
		newWebSite.rel = 'noopener noreferrer';
	};
	const handleClickCode = (codeUrl) => {
		const newWebSite = window.open(codeUrl, '_blank');
		newWebSite.opener = null;
		newWebSite.rel = 'noopener noreferrer';
	};
	return (
		<section id="Projects" className="relative w-full pt-16">
			<div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full text-lg gap-5">
				<div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
					<div className="mb-10">
						<h2 className="text-4xl font-bold inline border-b-4 border-primary-color/40 sm:text-5xl pb-1">
							Projects
						</h2>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-6">
						{projects.map(({id, src, webSite, code}) => (
							<div
								key={id}
								className="shadow-md shadow-primary-color/60 rounded-lg max-w-md mx-auto hover:scale-105 duration-500"
							>
								<img
									src={src}
									alt="project card"
									className="rounded-lg duration-200"
								/>
								<div className="flex items-center justify-center">
									<button
										onClick={() => handleClickWebSite(webSite)}
										className="w-1/2 px-6 py-2 m-4 duration-200 hover:text-primary-color"
									>
										Website
									</button>
									<button
										onClick={() => handleClickCode(code)}
										className="w-1/2 px-6 py-2 m-4 duration-200 hover:text-primary-color"
									>
										Code
									</button>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
