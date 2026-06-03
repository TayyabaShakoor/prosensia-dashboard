import { StatCardProps } from "@/types";

const colorStyles = {
  blue: "bg-blue-50 text-blue-600",
  green: "bg-green-50 text-green-600",
  red: "bg-red-50 text-red-600",
  purple: "bg-purple-50 text-purple-600",
  yellow: "bg-yellow-50 text-yellow-600",
};

export default function StatCard({ title, value, icon, trend, color = "blue" }: StatCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500 font-medium">{title}</p>
          <p className="text-2xl font-bold text-gray-800 mt-2">{value}</p>
          {trend && (
            <p className={`text-sm mt-2 ${trend.isPositive ? "text-green-600" : "text-red-600"}`}>
              {trend.isPositive ? "↑" : "↓"} {Math.abs(trend.value)}% from last month
            </p>
          )}
        </div>
        {icon && <div className={`p-3 rounded-lg ${colorStyles[color]}`}>{icon}</div>}
      </div>
    </div>
  );
}