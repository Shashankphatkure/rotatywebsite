export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">Dashboard Overview</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          { label: "Total Donations", value: "₱150,000" },
          { label: "Active Members", value: "250" },
          { label: "Upcoming Events", value: "5" },
          { label: "Current Sponsors", value: "12" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-gray-500 text-sm">{stat.label}</h3>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[
            {
              type: "donation",
              description: "New donation received",
              amount: "₱5,000",
              time: "2 minutes ago",
            },
            {
              type: "member",
              description: "New member registration",
              name: "John Doe",
              time: "1 hour ago",
            },
            {
              type: "event",
              description: "Event registration",
              event: "Annual Charity Gala",
              time: "3 hours ago",
            },
          ].map((activity, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-3 border-b last:border-0"
            >
              <div>
                <p className="font-medium">{activity.description}</p>
                <p className="text-sm text-gray-500">{activity.time}</p>
              </div>
              {activity.amount && (
                <span className="text-green-600 font-medium">
                  {activity.amount}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Create News Post",
            "Add Event",
            "Upload Bulletin",
            "View Reports",
          ].map((action) => (
            <button
              key={action}
              className="p-4 text-center bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
            >
              {action}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
