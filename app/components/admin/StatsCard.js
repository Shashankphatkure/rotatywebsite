export default function StatsCard({ icon, label, value, trend, change }) {
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

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <span className="text-2xl">{icon}</span>
        {trend && (
          <div className={`flex items-center ${getTrendColor(trend)}`}>
            {trend === "up" ? "↑" : trend === "down" ? "↓" : "•"}
            <span className="ml-1 text-sm">{change}</span>
          </div>
        )}
      </div>
      <h3 className="text-gray-500 text-sm">{label}</h3>
      <p className="text-2xl font-bold mt-1">{value}</p>
    </div>
  );
}
