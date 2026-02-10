const StatCard = ({ icon, value, label, change, positive }) => {
  return (
    <div className="bg-white rounded-xl p-5 border flex justify-between items-start">
      <div>
        <div className="text-2xl font-semibold">{value}</div>
        <p className="text-sm text-gray-500">{label}</p>
      </div>

      <div className="text-right">
        <div className="mb-2">{icon}</div>
        <p className={`text-sm ${positive ? "text-green-600" : "text-red-600"}`}>
          {change}
        </p>
      </div>
    </div>
  );
};

export default StatCard;
