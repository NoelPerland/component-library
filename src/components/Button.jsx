const Button = ({
  size = "md",
  color = "blue",
  disabled = false,
  children,
}) => {
  const styles = `px-4 py-2 rounded text-white focus:outline-none ${
    disabled ? "bg-gray-400 cursor-not-allowed" : `bg-${color}-500`
  } ${size === "lg" ? "text-lg" : size === "sm" ? "text-sm" : "text-base"}`;

  return (
    <button className={styles} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
