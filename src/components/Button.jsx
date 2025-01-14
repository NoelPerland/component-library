const Button = ({
  size = "md",
  color = "blue",
  disabled = false,
  children,
}) => {
  const colorClasses = {
    blue: "bg-blue-500 hover:bg-blue-600",
    green: "bg-green-500 hover:bg-green-600",
    red: "bg-red-500 hover:bg-red-600",
  };

  const sizeClasses = {
    sm: "text-sm px-3 py-1",
    md: "text-base px-4 py-2",
    lg: "text-lg px-5 py-3",
  };

  const baseClasses = "rounded text-white focus:outline-none";

  const disabledClasses = disabled
    ? "bg-gray-400 cursor-not-allowed"
    : `${colorClasses[color] || colorClasses.blue}`;

  const classes = `${baseClasses} ${disabledClasses} ${
    sizeClasses[size] || sizeClasses.md
  }`;

  return <button className={classes}>{children}</button>;
};

export default Button;
