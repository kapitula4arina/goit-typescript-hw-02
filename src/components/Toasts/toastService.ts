import { toast } from 'react-hot-toast';
import messages from './toastMessages';
import { ShowToastKeyType, ShowToastType } from './toast.types';

const showToast = (type: ShowToastType, key: ShowToastKeyType): void => {
  const message = messages[type][key];

  if (type !== 'success' && type !== 'error') {
    toast(message, {
      icon: '✍️',
      style: {
        borderRadius: '5px',
        background: 'rgba(214, 156, 156, 100)',
        color: 'rgba(246, 244, 244, 100)',
      },
      duration: 2000,
    });
  } else if (messages[type] && message) {
    toast[type](message, {
      duration: 2000,
      style: {
        background: 'rgba(214, 156, 156, 100)',
        color: 'rgba(246, 244, 244, 100)',
      },
    });
  } else {
    toast.error('Something went wrong!');
  }
};

export default showToast;
