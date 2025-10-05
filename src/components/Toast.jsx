import React, { useState, useEffect } from "react";

function Toast({ message, type = "info", duration = 5000, onClose }) {
  const [progress, setProgress] = useState(100); // Start full

  useEffect(() => {
    const start = Date.now();
    const end = start + duration;
    let rafId = null;

    const update = () => {
      const now = Date.now();
      const pct = Math.max(0, 100 - ((now - start) / duration) * 100); // Decrease
      setProgress(pct);
      if (now >= end) {
        onClose();
        return;
      }
      rafId = requestAnimationFrame(update);
    };

    rafId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId);
  }, [duration, onClose]);

  // Gradient colors by type
  const gradientByType = {
    success: "bg-gradient-to-r from-green-400 to-green-600",
    error: "bg-gradient-to-r from-red-400 to-red-600",
    info: "bg-gradient-to-r from-blue-400 to-blue-600",
    warning: "bg-gradient-to-r from-yellow-400 to-yellow-600",
  };

  const gradient = gradientByType[type] || gradientByType.info;

  return (
    <div
      className={`fixed top-4 right-4 w-80 max-w-sm bg-white border shadow-md rounded-lg overflow-hidden ring-1 ring-black/5 z-50`}
    >
      <div className="p-3 flex justify-between items-center">
        <span className="text-sm text-slate-800">{message}</span>
        <button
          onClick={onClose}
          className="ml-2 text-slate-500 hover:text-slate-700 rounded p-1"
        >
          ✕
        </button>
      </div>
      {/* progress bar */}
      <div className="h-1 bg-gray-200 overflow-hidden">
        <div
          className={`h-1 rounded-full ${gradient} transition-[width] ease-linear ml-auto`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

export default Toast;
