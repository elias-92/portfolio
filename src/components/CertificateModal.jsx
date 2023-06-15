import {FaTimes} from 'react-icons/fa';

const CertificateModal = ({selectedImage, setSelectedImage}) => {
	return (
		<div
			className={`fixed inset-0 flex items-center justify-center z-50 bg-black/60 duration-300 ${
				selectedImage ? 'opacity-100' : 'opacity-0 pointer-events-none'
			}`}
		>
			<div className=" bg-white/20 p-2 rounded-lg max-w-[800px] relative shadow-md shadow-gray-600">
				<span
					onClick={() => setSelectedImage(null)}
					className="absolute top-4 right-4 text-gray-700 text-3xl cursor-pointer hover:text-green-500"
				>
					<FaTimes size={30} />
				</span>

				<img
					className="rounded-md w-full h-full object-contain"
					src={selectedImage}
					alt="Certificate"
				/>
			</div>
		</div>
	);
};

export default CertificateModal;
