export default function ProgressCard({ name, progress, status }) {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "on track":
        return "text-green-600 bg-green-50";
      case "at risk":
        return "text-yellow-600 bg-yellow-50";
      case "delayed":
        return "text-red-600 bg-red-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h4 className="font-medium text-gray-900">{name}</h4>
        <span
          className={`px-2.5 py-0.5 rounded-full text-sm font-medium ${getStatusColor(
            status
          )}`}
        >
          {status}
        </span>
      </div>
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-xs font-semibold inline-block text-blue-600">
              {progress}% Complete
            </span>
          </div>
        </div>
        <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-50">
          <div
            style={{ width: `${progress}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600 transition-all duration-500"
          />
        </div>
      </div>
    </div>
  );
}
