const Badge = ({ color = "blue", size = "md", icon, children }) => {
  const colorClasses = {
    blue: "bg-blue-100 text-blue-700",
    red: "bg-red-100 text-red-700",
    green: "bg-green-100 text-green-700",
    yellow: "bg-yellow-100 text-yellow-700",
  };

  const sizeClasses = {
    sm: "text-sm px-2 py-1",
    md: "text-base px-3 py-1.5",
    lg: "text-lg px-4 py-2",
  };

  const classes = `inline-flex items-center gap-2 rounded ${
    colorClasses[color] || colorClasses.blue
  } ${sizeClasses[size] || sizeClasses.md}`;

  return (
    <span className={classes}>
      {icon && <span>{icon}</span>}
      {children}
    </span>
  );
};

export default Badge;
