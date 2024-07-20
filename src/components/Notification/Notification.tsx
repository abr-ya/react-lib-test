import { Component } from "react";
import { toast, CommonOptions, ToastContent, ToastOptions } from "react-toastify";

// для совместимости с уведомлениями CARS Components

export interface INotification {
  /*** Сообщение */
  message: string | JSX.Element;
  /*** Смотри документацию https://github.com/fkhadra/react-toastify */
  options?: CommonOptions;
}

export class Notification extends Component<INotification> {
  static defaultOptions: ToastOptions = {
    autoClose: false,
    closeOnClick: false,
    pauseOnHover: false,
  };

  static success = (content: ToastContent, options?: ToastOptions) => {
    toast.success(content, {
      ...Notification.defaultOptions,
      ...options,
    });
  };

  static info = (content: ToastContent, options?: ToastOptions) => {
    toast.info(content, {
      ...Notification.defaultOptions,
      ...options,
    });
  };

  static warn = (content: ToastContent, options?: ToastOptions) => {
    toast.warn(content, {
      ...Notification.defaultOptions,
      ...options,
    });
  };

  static error = (content: ToastContent, options?: ToastOptions) => {
    toast.error(content, {
      ...Notification.defaultOptions,
      ...options,
    });
  };

  static dismissAll = () => toast.dismiss();

  render() {
    return null;
  }
}
