import React, {useContext, useEffect} from 'react';
import { ToastContext } from '../../context/ToastContext';
import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf() {
  const {toasts,dismissAllToasts} = useContext(ToastContext);
  useEffect(() => { 
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        dismissAllToasts();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dismissAllToasts]);

  return (
    <ol className={styles.wrapper} role="region" aria-live="polite" aria-label="Notification">
      {toasts.map((toast) =>  <li className={styles.toastWrapper}><Toast key={toast.toastId} variant={toast.variant} message={toast.message} toastId={toast.toastId}/></li>)}
    </ol>
  );
}

export default ToastShelf;
