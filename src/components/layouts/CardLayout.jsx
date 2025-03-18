const CardLayout = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className="bg-white p-4 rounded-lg shadow-md cursor-pointer card"
    >
      {children}
    </div>
  );
};

export default CardLayout;
