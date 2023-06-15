import {BsLinkedin, BsGithub} from 'react-icons/bs';

const Footer = () => {
	return (
		<footer className="relative mt-auto bg-neutral-900/60 flex flex-col items-center py-3 gap-2 md:flex-row md:justify-evenly">
			<div className="flex gap-x-4 text-center md:order-last">
				<a
					href="https://www.linkedin.com/in/elias--martinez/"
					target="_blank"
					rel="noreferrer"
					className="text-3xl hover:text-primary-color"
				>
					<BsLinkedin />
				</a>
				<a
					href="https://github.com/elias-92"
					target="_blank"
					rel="noreferrer"
					className="text-3xl hover:text-primary-color"
				>
					<BsGithub />
				</a>
			</div>
			<p className="md:order-1">Copyright ©2023</p>
			<p>Elias Martinez</p>
		</footer>
	);
};

export default Footer;
