import ChevronRight from "../../assets/chevronRight";

const SideDrawer = ({ isOpen, onClose, userName, routes }) => {
  return (
    <div
      className={`fixed inset-y-0 right-0 w-64 bg-white shadow-xl z-50 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition duration-300 ease-in-out`}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h1 className="text-lg font-semibold">Welcome {userName}</h1>
        <button onClick={onClose} className="w-8">
          <ChevronRight />
        </button>
      </div>
      <div className="flex flex-col p-4">
        {routes.map((route, index) => (
          <span
            key={index}
            onClick={() => router.push(`${route.href}`)}
            className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            {route.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SideDrawer;
