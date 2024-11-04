export default function QuickActions({ actions }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {actions.map((action, index) => (
        <button
          key={index}
          onClick={action.onClick}
          className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow group"
        >
          <div className="flex flex-col items-center text-center">
            <span className="text-2xl mb-2 group-hover:scale-110 transition-transform">
              {action.icon}
            </span>
            <span className="text-sm font-medium text-gray-700">
              {action.label}
            </span>
          </div>
        </button>
      ))}
    </div>
  );
}
