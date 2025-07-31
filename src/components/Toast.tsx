"use client";

import { useEffect } from "react";
import { CheckCircle, X } from "lucide-react";

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

export function Toast({ message, isVisible, onClose }: ToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 z-50 animate-fade-in">
      <div className="bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2">
        <CheckCircle className="h-5 w-5" />
        <span className="font-medium">{message}</span>
        <button
          onClick={onClose}
          className="ml-2 hover:bg-green-700 rounded p-1"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
