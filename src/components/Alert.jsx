import {
  FaInfoCircle,
  FaExclamationTriangle,
  FaCheckCircle,
  FaAccessibleIcon,
} from "react-icons/fa";

const Alert = ({ color = "blue", icon = "info", children }) => {
  const icons = {
    info: <FaInfoCircle />,
    warning: <FaExclamationTriangle />,
    success: <FaCheckCircle />,
    arcrow: <FaAccessibleIcon />,
  };

  const colorClasses = {
    blue: {
      bg: "bg-blue-100",
      text: "text-blue-700",
      border: "border-blue-500",
    },
    yellow: {
      bg: "bg-yellow-100",
      text: "text-yellow-700",
      border: "border-yellow-500",
    },
    green: {
      bg: "bg-green-100",
      text: "text-green-700",
      border: "border-green-500",
    },
    red: {
      bg: "bg-red-100",
      text: "text-red-700",
      border: "border-red-500",
    },
  };

  const classes = colorClasses[color] || colorClasses.blue;

  return (
    <div
      className={`flex items-center gap-3 p-4 border-l-4 ${classes.bg} ${classes.text} ${classes.border}`}
    >
      {icons[icon]}
      <span>{children}</span>
    </div>
  );
};

export default Alert;
