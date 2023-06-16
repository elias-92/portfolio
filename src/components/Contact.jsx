import React from 'react';

const Contact = () => {
	return (
		<section id="Contact" className="flex flex-col text-center gap-4 py-8">
			<p className='text-xl font-semibold text-primary-color/70'>What's next?</p>
			<h3 className='text-4xl font-bold'>Let's Work Together</h3>
			<a
				href="mailto:martinezelias@hotmail.com.ar"
				target="_blank"
				rel="noreferrer"
				className="group font-semibold w-fit px-6 py-3 my-2 flex items-center rounded-md text-black bg-gradient-to-t from-green-400 to-primary-color cursor-pointer mx-auto hover:scale-105 duration-100"
			>
				Write me an E-mail
			</a>
		</section>
	);
};

export default Contact;
