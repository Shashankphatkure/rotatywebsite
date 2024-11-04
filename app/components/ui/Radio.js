export default function Radio({ label, error, className = "", ...props }) {
  return (
    <label className="inline-flex items-center">
      <input
        type="radio"
        className={`
          w-4
          h-4
          text-primary-600
          border-gray-300
          focus:ring-primary-500
          ${error ? "border-red-500" : "border-gray-300"}
          ${className}
        `}
        {...props}
      />
      {label && <span className="ml-2 text-sm text-gray-700">{label}</span>}
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </label>
  );
}
