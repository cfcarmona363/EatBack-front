const Button = ({ label, onClick }) => {
  return (
    <button
      className="w-100 rounded-lg bg-blue-200 border-2 border-blue-300 p-2"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
