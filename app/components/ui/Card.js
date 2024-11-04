export default function Card({ children, className = "", ...props }) {
  return (
    <div
      className={`
        bg-white
        rounded-xl
        shadow-sm
        border
        border-gray-100
        overflow-hidden
        transition-shadow
        duration-200
        hover:shadow-md
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}
