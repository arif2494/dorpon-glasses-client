import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const useToast = () => {
	const notify = (type, message) => {
		if (type === 'error') {
			toast.error(message, {
				position: 'bottom-right',
				autoClose: 1800,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: false,
				draggable: true,
				progress: undefined
			});
		} else if (type === 'success') {
			toast.success(message, {
				position: 'bottom-right',
				autoClose: 1800,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: false,
				draggable: true,
				progress: undefined
			});
		}
	};

	const toaster = () => {
		return (
			<ToastContainer
				position="bottom-right"
				autoClose={1800}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover={false}
			/>
		);
	};

	return {
		notify,
		toaster
	};
};

export default useToast;
