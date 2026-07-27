const TabContent = ({ tabDescription }) => {
  return (
    <div className="w-full max-w-xl rounded-lg border p-6 shadow-sm">
      {tabDescription}
    </div>
  );
};

export default TabContent;