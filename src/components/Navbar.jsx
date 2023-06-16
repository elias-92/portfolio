import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md';
import {FaBars, FaTimes} from 'react-icons/fa';
import {BsFillMoonFill, BsFillSunFill} from 'react-icons/bs';
import {useState} from 'react';
const Navbar = ({darkMode, toggleDarkMode}) => {
	const [isShowMenu, setIsShowMenu] = useState(false);

	const links = [
		{
			id: 1,
			link: 'Home',
		},
		{
			id: 2,
			link: 'About',
		},
		{
			id: 3,
			link: 'Projects',
		},
		{
			id: 4,
			link: 'Technologies',
		},
		{
			id: 5,
			link: 'Education',
		},
		{
			id: 6,
			link: 'Contact',
		},
	];
	return (
		<header className="fixed top-0 flex bg-neutral-900/60 justify-between h-16 items-center py-4 px-4 md:px-6 text-white mx-auto lg:px-12 md:py-0 w-full z-30 transition-colors duration-700">
			<div className="flex flex-row gap-4 items-center">
				<h1 className="flex items-center select-none text-[1.2rem] lg:text-[1.3rem] hover:text-primary-color hover:scale-125 duration-500">
					<MdKeyboardArrowLeft />
					Elias Martinez
					<MdKeyboardArrowRight />
				</h1>
			</div>
			<ul className="hidden lg:flex">
				{links.map(({link, id}) => (
					<li
						key={id}
						className="cursor-pointer hover:text-primary-color p-4 text-[1.1rem] lg:text-[1.3rem]"
					>
						<a href={`#${link}`}>{link}</a>
					</li>
				))}
			</ul>
			<div>
				<button onClick={toggleDarkMode}>
					{darkMode ? (
						<BsFillSunFill size={20} />
					) : (
						<BsFillMoonFill size={20} />
					)}
				</button>
			</div>
			<div
				onClick={() => setIsShowMenu(!isShowMenu)}
				className="cursor-pointer pr-4 z-10 text-gray-100 lg:hidden"
			>
				{isShowMenu ? <FaTimes size={30} /> : <FaBars size={30} />}
			</div>
			{isShowMenu && (
				<ul className="flex flex-col justify-center items-center fixed top-0 left-0 w-full h-screen bg-[#0B1131]/90 animate-slide-in-down lg:hidden">
					{links.map(({link, id}) => (
						<li
							key={id}
							className="cursor-pointer hover:text-primary-color px-4 py-6 text-4xl transition-all duration-300"
						>
							<a href={`#${link}`} onClick={() => setIsShowMenu(!isShowMenu)}>
								{link}
							</a>
						</li>
					))}
				</ul>
			)}
		</header>
	);
};

export default Navbar;
