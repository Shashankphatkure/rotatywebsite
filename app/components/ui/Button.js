const variants = {
  primary: "bg-primary-600 hover:bg-primary-700 text-white",
  secondary: "bg-gray-100 hover:bg-gray-200 text-gray-800",
  outline: "border-2 border-primary-600 text-primary-600 hover:bg-primary-50",
  ghost: "text-primary-600 hover:bg-primary-50",
  danger: "bg-red-600 hover:bg-red-700 text-white",
  success: "bg-green-600 hover:bg-green-700 text-white",
};

const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2",
  lg: "px-6 py-3 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  return (
    <button
      className={`
        ${variants[variant]}
        ${sizes[size]}
        rounded-lg
        font-medium
        transition-all
        duration-200
        focus:outline-none
        focus:ring-2
        focus:ring-primary-500
        focus:ring-offset-2
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
