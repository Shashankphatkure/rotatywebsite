export default function MetricCard({
  title,
  value,
  change,
  trend,
  icon,
  description,
  className = "",
}) {
  const getTrendColor = (trend) => {
    switch (trend) {
      case "up":
        return "text-green-600";
      case "down":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case "up":
        return "↑";
      case "down":
        return "↓";
      default:
        return "•";
    }
  };

  return (
    <div className={`bg-white rounded-lg p-6 shadow-sm ${className}`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="mt-2 text-3xl font-bold text-gray-900">{value}</p>
        </div>
        {icon && <span className="text-2xl">{icon}</span>}
      </div>
      {(change || description) && (
        <div className="mt-4">
          {change && (
            <span className={`text-sm ${getTrendColor(trend)} font-medium`}>
              {getTrendIcon(trend)} {change}
            </span>
          )}
          {description && (
            <p className="mt-1 text-sm text-gray-500">{description}</p>
          )}
        </div>
      )}
    </div>
  );
}
