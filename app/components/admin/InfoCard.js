import { Icon } from "../../utils/heroIcons";

export default function InfoCard({ title, value, change, trend, icon }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex justify-between items-start">
        <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
          <Icon name={icon} className="w-6 h-6 text-blue-600" />
        </div>
        {change && (
          <span
            className={`text-sm font-medium px-2.5 py-0.5 rounded-full ${
              trend === "up"
                ? "text-green-600 bg-green-50"
                : "text-red-600 bg-red-50"
            }`}
          >
            {change}
          </span>
        )}
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mt-4">{title}</h3>
      <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
    </div>
  );
}
