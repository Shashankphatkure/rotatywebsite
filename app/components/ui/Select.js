export default function Select({
  label,
  options = [],
  error,
  className = "",
  ...props
}) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <select
        className={`
          w-full
          px-4
          py-2
          border
          rounded-lg
          bg-white
          transition-colors
          duration-200
          ease-in-out
          focus:outline-none
          focus:ring-2
          focus:ring-primary-500
          focus:border-primary-500
          ${error ? "border-red-500" : "border-gray-300"}
          ${className}
        `}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}
