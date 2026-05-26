import React, { createContext, useContext, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, AlertCircle, Info, AlertTriangle } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

export interface ToastMessage {
  id: string;
  type: ToastType;
  message: string;
  duration: number;
}

interface ToastContextType {
  toast: {
    success: (message: string, duration?: number) => void;
    error: (message: string, duration?: number) => void;
    info: (message: string, duration?: number) => void;
    warning: (message: string, duration?: number) => void;
  };
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = useCallback((type: ToastType, message: string, duration = 4000) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, type, message, duration }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, duration);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const toastApi = {
    success: (msg: string, dur?: number) => addToast('success', msg, dur),
    error: (msg: string, dur?: number) => addToast('error', msg, dur),
    info: (msg: string, dur?: number) => addToast('info', msg, dur),
    warning: (msg: string, dur?: number) => addToast('warning', msg, dur),
  };

  return (
    <ToastContext.Provider value={{ toast: toastApi }}>
      {children}

      {/* Toast Container */}
      <div className="fixed top-0 right-5 z-50 flex flex-col gap-3 max-w-md w-full sm:w-96 pointer-events-none px-4 sm:px-0">
        <AnimatePresence>
          {toasts.map((toast) => (
            <ToastItem key={toast.id} toast={toast} onClose={() => removeToast(toast.id)} />
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context.toast;
}

function ToastItem({ toast, onClose }: { toast: ToastMessage; onClose: () => void }) {
  const styles = {
    success: {
      bg: 'bg-white/95 border-emerald-500/25 shadow-emerald-900/5',
      icon: <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />,
      text: 'text-gray-800',
      progress: 'bg-emerald-500',
      label: 'Success'
    },
    error: {
      bg: 'bg-white/95 border-rose-500/25 shadow-rose-900/5',
      icon: <AlertCircle className="h-5 w-5 text-rose-500 shrink-0" />,
      text: 'text-gray-800',
      progress: 'bg-rose-500',
      label: 'Error'
    },
    info: {
      bg: 'bg-white/95 border-blue-500/25 shadow-blue-900/5',
      icon: <Info className="h-5 w-5 text-blue-500 shrink-0" />,
      text: 'text-gray-800',
      progress: 'bg-blue-500',
      label: 'Info'
    },
    warning: {
      bg: 'bg-white/95 border-amber-500/25 shadow-amber-900/5',
      icon: <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0" />,
      text: 'text-gray-800',
      progress: 'bg-amber-500',
      label: 'Warning'
    },
  };

  const style = styles[toast.type];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.95 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      layout
      className={`pointer-events-auto relative overflow-hidden flex items-start gap-3 rounded-2xl border p-4 shadow-xl backdrop-blur-md ${style.bg} ${style.text}`}
    >
      <div className="flex gap-3 w-full">
        {style.icon}
        <div className="flex-1 flex flex-col gap-0.5">
          <span className="text-xs font-semibold tracking-wider uppercase opacity-60">{style.label}</span>
          <p className="text-sm font-medium leading-relaxed">{toast.message}</p>
        </div>
        <button
          onClick={onClose}
          className="rounded-lg p-1 hover:bg-black/5 transition-colors focus:outline-none shrink-0"
        >
          <X className="h-4 w-4 opacity-50 hover:opacity-90" />
        </button>
      </div>

      {/* Progress Bar Timer */}
      <motion.div
        initial={{ width: "100%" }}
        animate={{ width: "0%" }}
        transition={{ duration: toast.duration / 1000, ease: "linear" }}
        className={`absolute bottom-0 left-0 h-[3px] ${style.progress}`}
      />
    </motion.div>
  );
}
