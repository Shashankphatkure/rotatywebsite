export default function TableSearch({ onSearch, filters = [], onFilter }) {
  return (
    <div className="mb-6 flex flex-col sm:flex-row gap-4">
      {/* Search Input */}
      <div className="flex-1">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => onSearch(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Filters */}
      {filters.length > 0 && (
        <div className="flex gap-2">
          {filters.map((filter) => (
            <select
              key={filter.name}
              onChange={(e) => onFilter(filter.name, e.target.value)}
              className="px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">{filter.label}</option>
              {filter.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ))}
        </div>
      )}
    </div>
  );
}
