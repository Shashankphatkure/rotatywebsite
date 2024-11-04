export default function ActivityItem({
  icon,
  title,
  description,
  time,
  highlight,
}) {
  return (
    <div className="flex items-center p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors">
      <span className="text-2xl mr-4">{icon}</span>
      <div className="flex-1">
        <p className="font-medium">{title}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <div className="text-right">
        <span className="text-sm text-gray-500">{time}</span>
        {highlight && (
          <span className="block text-sm font-medium text-blue-600">
            {highlight}
          </span>
        )}
      </div>
    </div>
  );
}
