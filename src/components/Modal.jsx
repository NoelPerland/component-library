/* const Modal = ({ show, onClose, size = "md", children }) => {
  if (!show) return null;

  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        className={`bg-white rounded shadow-lg w-full ${
          sizeClasses[size] || "max-w-md"
        }`}
      >
        {children}
      </div>
      <button
        className="absolute top-4 right-4 text-white"
        onClick={onClose}
        aria-label="Close Modal"
      >
        ×
      </button>
    </div>
  );
};

//Modal.Header, Modal.Body, and Modal.Footer
const Header = ({ children }) => (
  <div className="p-4 border-b font-bold text-lg">{children}</div>
);

const Body = ({ children }) => (s
  <div className="p-4 text-gray-700">{children}</div>
);

const Footer = ({ children }) => (
  <div className="p-4 border-t flex justify-end space-x-4">{children}</div>
);

// Attach sub-components to Modal for point notation
Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;
 */
