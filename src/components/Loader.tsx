export const Loader = () => {
  return (
    <div className="flex space-x-2 justify-center items-center min-h-screen">
      <div className="w-3 h-3 bg-red-600 rounded-full animate-bounce"></div>
      <div className="w-3 h-3 bg-red-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="w-3 h-3 bg-red-600 rounded-full animate-bounce [animation-delay:-0.6s]"></div>
    </div>
  );
};
