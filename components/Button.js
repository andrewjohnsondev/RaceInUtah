function Button({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`${className} flex items-center justify-center gap-2 rounded py-2 px-4 font-semibold tracking-wide transition-colors `}
    >
      {children}
    </button>
  );
}
export default Button;
