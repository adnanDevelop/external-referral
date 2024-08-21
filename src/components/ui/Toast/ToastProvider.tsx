import { Toaster } from 'react-hot-toast';

const ToastProvider = () => {
  return (
    <Toaster
      position="bottom-center"
      toastOptions={{
        style: {
          background: '#130185',
          color: '#fff',
          fontFamily: 'Poppins, sans-serif',
          fontSize: '12px',
        },
      }}
    />
  );
};

export default ToastProvider;
