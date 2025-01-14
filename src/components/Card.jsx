const Card = ({ href, imgAlt, imgSrc, children }) => {
  return (
    <a
      href={href}
      className="block max-w-sm border rounded shadow-md overflow-hidden hover:shadow-lg"
    >
      <img src={imgSrc} alt={imgAlt} className="w-full h-auto" />
      <div className="p-4">{children}</div>
    </a>
  );
};

export default Card;
