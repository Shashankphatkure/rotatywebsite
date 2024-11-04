import { Icon } from "../../utils/heroIcons";

export default function NotificationCenter() {
  const notifications = [
    {
      type: "alert",
      title: "System Update",
      message: "System maintenance scheduled for tonight at 2 AM",
      time: "1 hour ago",
    },
    {
      type: "success",
      title: "Project Milestone",
      message: "Clean Water Initiative reached 75% of its goal",
      time: "2 hours ago",
    },
    {
      type: "warning",
      title: "Low Attendance",
      message: "Youth Program attendance below target",
      time: "3 hours ago",
    },
  ];

  const getTypeStyles = (type) => {
    switch (type) {
      case "alert":
        return "text-red-600 bg-red-50";
      case "success":
        return "text-green-600 bg-green-50";
      case "warning":
        return "text-yellow-600 bg-yellow-50";
      default:
        return "text-blue-600 bg-blue-50";
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="p-4 border-b border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900">Notifications</h2>
      </div>
      <div className="divide-y divide-gray-100">
        {notifications.map((notification, index) => (
          <div key={index} className="p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-start">
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center ${getTypeStyles(
                  notification.type
                )}`}
              >
                <Icon name={notification.type} className="w-4 h-4" />
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  {notification.title}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {notification.message}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  {notification.time}
                </p>
              </div>
              <button className="text-gray-400 hover:text-gray-500">
                <Icon name="dots" className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-gray-100">
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
          View all notifications
        </button>
      </div>
    </div>
  );
}
