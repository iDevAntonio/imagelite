import { toast } from 'react-toastify'

export const useNotification = () => {
  function notify(
    message: string,
    level: "info" | "success" | "warning" | "error"
  ) {
    toast(message, { type: level });
  }
  return { notify };
};