export default function InfoCard({
  icon,
  title,
  value,
  description,
  trend,
  actions,
  className = "",
}) {
  return (
    <div className={`bg-white rounded-lg p-6 shadow-sm ${className}`}>
      <div className="flex items-start justify-between">
        <div className="flex items-center">
          {icon && <span className="text-2xl mr-3">{icon}</span>}
          <div>
            <h3 className="text-sm font-medium text-gray-500">{title}</h3>
            <p className="mt-1 text-2xl font-bold">{value}</p>
          </div>
        </div>
        {trend && (
          <span
            className={`text-sm font-medium ${
              trend > 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {trend > 0 ? "↑" : "↓"} {Math.abs(trend)}%
          </span>
        )}
      </div>
      {description && (
        <p className="mt-2 text-sm text-gray-500">{description}</p>
      )}
      {actions && <div className="mt-4 space-x-3">{actions}</div>}
    </div>
  );
}
