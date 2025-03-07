const Tooltip = ({ event, handleShowModal }) => {
  return (
    <div
      id="tooltip-hover"
      role="tooltip"
      className="w-full absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 
    inline-block px-3 py-2 text-sm font-medium bg-gray-700 rounded-lg shadow-xs transition-opacity duration-300 left-1/2 -translate-x-1/2 -top-16 "
    >
      <div className="flex flex-col gap-2">
        <span onClick={() => handleShowModal("edit", event)}>Edit</span>
        <span onClick={() => handleShowModal("delete", event)}>Delete</span>
      </div>
      <div className="absolute w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-gray-900 dark:border-t-gray-700 left-1/2 -translate-x-1/2 top-full"></div>
    </div>
  );
};

export default Tooltip;
