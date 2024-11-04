export default function Textarea({ label, error, className = "", ...props }) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <textarea
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
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}