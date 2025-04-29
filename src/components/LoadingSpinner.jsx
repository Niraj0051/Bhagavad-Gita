// export default function LoadingSpinner() {
//     return (
//       <div className="flex justify-center items-center h-64">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
//       </div>
//     );
//   }

export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center h-64 space-y-4">
      {/* Enhanced Circular Loader */}
      <div className="relative w-16 h-16">
        {/* Outer Ring */}
        <div className="absolute inset-0 border-4 border-transparent border-t-orange-500 border-r-orange-400 rounded-full animate-spin-fast"></div>
        {/* Inner Ring */}
        <div className="absolute inset-1 border-4 border-transparent border-t-orange-300 border-l-orange-400 rounded-full animate-spin-slow"></div>
      </div>

      {/* Hindi Text with Animation */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl text-orange-600 font-bold animate-pulse">
          श्रीमद्भगवद्गीता
        </h2>
        <p className="text-gray-600 text-sm animate-fade-in-out">
          Loading Wisdom...
        </p>
      </div>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes fade-in-out {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        .animate-fade-in-out {
          animation: fade-in-out 2s ease-in-out infinite;
        }
        .animate-spin-fast {
          animation: spin 1s linear infinite;
        }
        .animate-spin-slow {
          animation: spin 2s linear infinite reverse;
        }
      `}</style>
    </div>
  );
}
