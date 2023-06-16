import React from 'react';

const About = () => {
	return (
		<section id="About" className="relative w-full pt-14">
			<div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-lg gap-5">
				<div className="pb-4">
					<h2 className="text-4xl sm:text-5xl font-bold inline border-b-4 border-primary-color/40">
						About me
					</h2>
				</div>
				<p>
					My main virtue is effort. During the last year and a half, I have
					dedicated myself to front-end development, investing many hours in
					courses and personal projects. My passion for learning has allowed me
					to acquire a wide set of skills and knowledge.
				</p>
				<p>
					I value healthy work environments based on collaboration and mutual
					respect. I believe in bringing my best energy and empathy to work
					every day, while maintaining an open and receptive attitude towards
					others. I am committed to building positive relationships, as I
					believe a healthy work environment fosters creativity and personal
					growth.
				</p>
				<p>
					In addition to job searching, my motivation is focused on continuing
					to learn and improve professionally. I like to keep abreast of the
					latest trends and technologies in front-end development. Therefore, I
					am committed to acquiring new skills and knowledge. Continuous
					learning is essential in a constantly evolving technological field.
				</p>
			</div>
		</section>
	);
};

export default About;
