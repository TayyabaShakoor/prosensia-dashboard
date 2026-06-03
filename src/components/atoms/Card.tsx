import { CardProps } from "@/types";

export default function Card({
  children,
  title,
  subtitle,
  className = "",
  onClick,
  hover = false,
}: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`
        bg-white rounded-xl shadow-md p-6 border border-gray-100
        ${hover ? "transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer" : ""}
        ${onClick ? "cursor-pointer" : ""}
        ${className}
      `}
    >
      {title && (
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
        </div>
      )}
      <div>{children}</div>
    </div>
  );
}