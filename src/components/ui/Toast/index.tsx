import toast from 'react-hot-toast';

interface Props {
  message: string;
  type?: 'success' | 'error';
}

const Toast = ({ message, type }: Props) => {
  switch (type) {
    case 'success':
      toast.success(message);
      break;
    case 'error':
      toast.error(message);
      break;
    default:
      toast(message);
  }
  return null;
};

export default Toast;
