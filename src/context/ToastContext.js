import React from 'react'; 

export const ToastContext = React.createContext();

const ToastProvider = ({children}) => {
    const [toasts, setToasts] = React.useState([]);
    const addToast = (message, variant) => {
        setToasts((prevToasts) => {
            return [...prevToasts, {toastId:crypto.randomUUID(),message, variant}];
        });
    };
    const removeToast = (id) => {
        setToasts((prevToasts) => {
            return prevToasts.filter((toast) => toast.toastId !== id);
        });
    };
    const dismissAllToasts = () => {
        setToasts([]);
    }
    return (
        <ToastContext.Provider value={{toasts, addToast, removeToast,dismissAllToasts}}>
            {children}
        </ToastContext.Provider>
    );
}

export default ToastProvider;