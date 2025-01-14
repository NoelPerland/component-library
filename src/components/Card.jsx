import nolle from "../assets/nolle.jpg";

const Card = ({ href, imgAlt, imgSrc, children }) => {
  return (
    <div className="border rounded shadow-md overflow-hidden">
      <img
        src={nolle}
        alt="Profile picture"
        style={{ width: "250px", height: "250px" }}
      ></img>
      <div className="p-4">
        {children}
        {href && (
          <a
            href={href}
            className="text-blue-500 hover:underline mt-2 inline-block"
          >
            Learn more
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
