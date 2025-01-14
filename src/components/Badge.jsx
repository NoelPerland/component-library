const Badge = ({ color = "gray", size = "md", icon, children }) => {
  const sizeClass =
    size === "lg"
      ? "text-lg px-4 py-2"
      : size === "sm"
      ? "text-sm px-2 py-1"
      : "text-base px-3 py-1.5";
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full bg-${color}-500 text-white ${sizeClass}`}
    >
      {icon}
      {children}
    </span>
  );
};

export default Badge;
