import { Icon } from "../../utils/heroIcons";

export default function ActivityItem({ type, title, description, time }) {
  const getTypeIcon = (type) => {
    switch (type) {
      case "member":
        return "users";
      case "donation":
        return "heart";
      case "event":
        return "calendar";
      default:
        return "document";
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "member":
        return "text-green-600 bg-green-50";
      case "donation":
        return "text-blue-600 bg-blue-50";
      case "event":
        return "text-purple-600 bg-purple-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  return (
    <div className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
      <div
        className={`w-10 h-10 rounded-lg flex items-center justify-center ${getTypeColor(
          type
        )}`}
      >
        <Icon name={getTypeIcon(type)} className="w-5 h-5" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900">{title}</p>
        <p className="text-sm text-gray-500">{description}</p>
        <p className="text-xs text-gray-400 mt-1">{time}</p>
      </div>
      <div className="flex-shrink-0">
        <button className="text-gray-400 hover:text-gray-500">
          <Icon name="dots" className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
