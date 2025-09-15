const Button = ({ onClick, children, type = 'button', className }) => (
  <button
    type={type}
    className={`bg-green-600 text-white px-4 py-2 rounded ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
