import { useState } from "react";
import { TabsData } from "../data/TabsData";
import TabsList from "./TabsList";
import TabContent from "./TabContent";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState();

  const handleTabChange = (id) => {
    setActiveTab(id);
  };

  const activeTabData = TabsData.find((tab) => tab.id === activeTab);

  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="text-2xl font-bold">Tabs</h1>

      <div className="flex gap-6">
        {TabsData.map((tab) => (
          <TabsList
            key={tab.id}
            tab={tab}
            activeTab={activeTab}
            onHandleTabChange={handleTabChange}
          />
        ))}
      </div>

      {activeTabData && <TabContent tabDescription={activeTabData.Description} />}
    </div>
  );
};

export default Tabs;