export default function NotificationCenter({ notifications = [] }) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold">Notifications</h3>
      </div>
      <div className="divide-y divide-gray-200 max-h-[400px] overflow-y-auto">
        {notifications.map((notification, index) => (
          <div
            key={index}
            className={`p-4 hover:bg-gray-50 transition-colors ${
              !notification.read ? "bg-blue-50" : ""
            }`}
          >
            <div className="flex items-start">
              <span className="text-2xl mr-3">{notification.icon}</span>
              <div className="flex-1">
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
