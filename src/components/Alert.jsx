import {
  FaInfoCircle,
  FaExclamationTriangle,
  FaCheckCircle,
} from "react-icons/fa";

const Alert = ({ color = "blue", icon = "info", children }) => {
  const icons = {
    info: <FaInfoCircle />,
    warning: <FaExclamationTriangle />,
    success: <FaCheckCircle />,
  };

  return (
    <div
      className={`flex items-center gap-3 p-4 border-l-4 bg-${color}-100 text-${color}-700 border-${color}-500`}
    >
      {icons[icon]}
      <span>{children}</span>
    </div>
  );
};

export default Alert;
