const Button = ({ onClick, children, type = 'button', className }) => (
  <button
    type={type}
    className={`bg-[#1B5E20] text-white px-6 py-2 rounded ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
