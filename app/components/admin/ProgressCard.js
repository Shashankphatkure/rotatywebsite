export default function ProgressCard({
  title,
  value,
  total,
  percentage,
  trend,
  description,
  color = "blue",
}) {
  const getProgressColor = (color) => {
    const colors = {
      blue: "bg-blue-600",
      green: "bg-green-600",
      yellow: "bg-yellow-500",
      red: "bg-red-600",
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        {trend && (
          <span
            className={`text-sm ${
              trend > 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {trend > 0 ? "↑" : "↓"} {Math.abs(trend)}%
          </span>
        )}
      </div>
      <div className="flex items-end justify-between mb-4">
        <div>
          <p className="text-2xl font-bold">{value}</p>
          <p className="text-sm text-gray-500">of {total}</p>
        </div>
        <p className="text-lg font-semibold">{percentage}%</p>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`${getProgressColor(color)} rounded-full h-2`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {description && (
        <p className="mt-2 text-sm text-gray-500">{description}</p>
      )}
    </div>
  );
}
