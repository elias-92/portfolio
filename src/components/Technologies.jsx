import html from '../assets/img/html.png';
import css from '../assets/img/css.png';
import javascript from '../assets/img/javascript.png';
import mui from '../assets/img/mui.png';
import react from '../assets/img/react.png';
import tailwind from '../assets/img/tailwind.png';

const Technologies = () => {
	const techs = [
		{
			id: 1,
			src: html,
			title: 'Html',
			style: 'shadow-[#E44D26]',
		},
		{
			id: 2,
			src: css,
			title: 'Css',
			style: 'shadow-[#039BE5]',
		},
		{
			id: 3,
			src: javascript,
			title: 'Javascript',
			style: 'shadow-[#FFDA3E]',
		},
		{
			id: 1,
			src: mui,
			title: 'Material Ui',
			style: 'shadow-[#007FFF]',
		},
		{
			id: 1,
			src: react,
			title: 'React',
			style: 'shadow-[#00D7FE]',
		},
		{
			id: 1,
			src: tailwind,
			title: 'Tailwind',
			style: 'shadow-[#44A8B3]',
		},
	];
	return (
		<section id="Technologies" className="relative w-full md:h-screen h-unset">
			<div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
				<div>
					<h2 className="text-4xl font-bold inline pb-1 border-b-4 border-primary-color/40 sm:text-5xl">
						Technologies
					</h2>
				</div>

				<div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 sm:px-0">
					{techs.map(({id, src, title, style}) => (
						<div
							key={id}
							className={`shadow-md hover:scale-105 duration-500 py-2 rounded-full ${style}`}
						>
							<p className="mt-4">{title}</p>
							<img
								className="w-20 mx-auto py-2 md:py-6"
								src={src}
								alt={`logo ${title}`}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Technologies;
