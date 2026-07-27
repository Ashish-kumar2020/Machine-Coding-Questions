const TabsList = ({ tab, activeTab, onHandleTabChange }) => {
  const isActive = tab.id === activeTab;

  return (
    <button
      onClick={() => onHandleTabChange(tab.id)}
      className={`px-4 py-2 rounded-md border transition-all cursor-pointer
        ${
          isActive
            ? "bg-blue-600 text-white"
            : "bg-white text-black hover:bg-gray-100"
        }`}
    >
      {tab.tabHeading}
    </button>
  );
};

export default TabsList;