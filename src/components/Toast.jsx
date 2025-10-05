import React, { useState, useEffect } from "react";
function Toast({ message, type = "info", duration = 5000, onClose }) {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const start = Date.now();
    const end = start + duration;
    let rafId = null;

    const update = () => {
      const now = Date.now();
      const pct = Math.max(0, ((end - now) / duration) * 100);
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

  const bgByType = {
    success: "bg-green-50 border-green-400",
    error: "bg-red-50 border-red-400",
    info: "bg-blue-50 border-blue-400",
    warning: "bg-yellow-50 border-yellow-400",
  };

  const accentByType = {
    success: "border-green-500",
    error: "border-red-500",
    info: "border-blue-500",
    warning: "border-yellow-500",
  };

  const accent = accentByType[type] || accentByType.info;
  const bg = bgByType[type] || bgByType.info;

  return (
    <div
      className={`fixed top-4 right-4 w-80 max-w-sm ${bg} border ${accent} shadow-md rounded-lg overflow-hidden ring-1 ring-black/5 z-50`}
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
      <div className="h-1 bg-black/5">
        <div className="h-1 transition-[width] ease-linear" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}
export default Toast;
