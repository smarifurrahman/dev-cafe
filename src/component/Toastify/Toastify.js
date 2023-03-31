import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notifyError = () => toast.warn('You Have Already Bookmarked This Blog!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
});

const notifySuccess = () => toast.success('Blog Bookmarked Successfully!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
});

export { notifyError, notifySuccess };