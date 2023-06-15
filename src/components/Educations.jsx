import certificateDweb from '../assets/img/certificateDweb.png';
import certificateJs from '../assets/img/certificateJs.png';
import certificateReact from '../assets/img/certificateReact.png';
import certificateRadium from '../assets/img/certificateRadium.png';
import {useState} from 'react';
import CertificateModal from './CertificateModal';

const Educations = () => {
	const [selectedImage, setSelectedImage] = useState(null);
	const educations = [
		{id: 1, image: certificateDweb, institution: 'Coder House'},
		{id: 2, image: certificateJs, institution: 'Coder House'},
		{id: 3, image: certificateReact, institution: 'Coder House'},
		{id: 4, image: certificateRadium, institution: 'Radium Rocket'},
	];
	const openModal = (image) => {
		setSelectedImage(image);
	};
	return (
		<section
			id="Educations"
			className="relative w-full md:h-screen h-unset mt-8"
		>
			<div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
				<div>
					<h2 className="text-4xl font-bold inline pb-1 border-b-4 border-primary-color/40 sm:text-5xl">
						Educations
					</h2>
				</div>

				<div className="w-full grid sm:grid-cols-3 gap-8 text-center py-8 sm:px-0">
					{educations.map(({id, image, institution}) => (
						<div
							key={id}
							className="shadow-md hover:scale-105 duration-500 rounded-lg cursor-zoom-in"
							onClick={() => openModal(image)}
						>
							<img
								className="w-full mx-auto py-2 md:py-6 object-contain"
								src={image}
								alt={`logo of  ${institution}`}
							/>
						</div>
					))}
				</div>
			</div>
			<CertificateModal
				selectedImage={selectedImage}
				setSelectedImage={setSelectedImage}
			/>
		</section>
	);
};

export default Educations;
